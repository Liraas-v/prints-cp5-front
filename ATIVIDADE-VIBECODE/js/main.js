(function () {
  'use strict';

  /* Revelação na rolagem */
  var itens = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    var obs = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (e.isIntersecting) { e.target.classList.add('visivel'); obs.unobserve(e.target); }
      });
    }, { threshold: 0.1 });
    itens.forEach(function (el) { obs.observe(el); });
    /* Rede de segurança: salto de rolagem (tecla End, âncora) pode pular o observer. */
    window.addEventListener('scroll', function () {
      itens.forEach(function (el) {
        if (!el.classList.contains('visivel') && el.getBoundingClientRect().top < window.innerHeight) {
          el.classList.add('visivel'); obs.unobserve(el);
        }
      });
    }, { passive: true });
  } else {
    itens.forEach(function (el) { el.classList.add('visivel'); });
  }

  /* Cabeçalho com fundo ao rolar, progresso de leitura e barra de ação */
  var topo = document.getElementById('topo');
  var prog = document.getElementById('progresso');
  var barra = document.getElementById('barra-acao');
  var hero = document.getElementById('inicio');
  var contato = document.getElementById('contato');
  var barraLinks = barra ? barra.querySelectorAll('a') : [];
  var barraVisivel = null;
  function aoRolar() {
    var y = window.pageYOffset || document.documentElement.scrollTop;
    if (topo) {
      var h = hero ? hero.getBoundingClientRect().top + y : 0;
      topo.classList.toggle('rolou', y > h + 8);
    }
    var total = document.documentElement.scrollHeight - window.innerHeight;
    if (prog && total > 0) { prog.style.transform = 'scaleX(' + Math.min(1, Math.max(0, y / total)) + ')'; }
    if (barra && hero && contato) {
      var passouHero = hero.getBoundingClientRect().bottom < 0;
      var noContato = contato.getBoundingClientRect().top < window.innerHeight * 0.6;
      var mostrar = passouHero && !noContato;
      if (mostrar !== barraVisivel) {
        barraVisivel = mostrar;
        barra.classList.toggle('visivel', mostrar);
        barra.setAttribute('aria-hidden', mostrar ? 'false' : 'true');
        barraLinks.forEach(function (l) { l.tabIndex = mostrar ? 0 : -1; });
      }
    }
  }
  window.addEventListener('scroll', aoRolar, { passive: true });
  window.addEventListener('resize', aoRolar);
  aoRolar();

  /* Formulário de pré-agendamento: simulado, não envia nada */
  var fc = document.getElementById('form-contato');
  var ok = document.getElementById('sucesso-contato');
  if (fc && ok) {
    var setErro = function (id, msg) {
      var el = document.getElementById('erro-' + id);
      var inp = document.getElementById(id);
      el.textContent = msg || '';
      if (msg) { inp.setAttribute('aria-invalid', 'true'); } else { inp.removeAttribute('aria-invalid'); }
    };
    fc.addEventListener('submit', function (ev) {
      ev.preventDefault();
      var nome = document.getElementById('c-nome').value.trim();
      var email = document.getElementById('c-email').value.trim();
      var primeiro = null;
      var m1 = nome.length < 2 ? 'Informe seu nome.' : '';
      var m2 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email) ? '' : 'Informe um e-mail no formato nome@exemplo.com.';
      setErro('c-nome', m1); setErro('c-email', m2);
      if (m1) { primeiro = 'c-nome'; } else if (m2) { primeiro = 'c-email'; }
      if (primeiro) { document.getElementById(primeiro).focus(); return; }
      fc.hidden = true; ok.hidden = false; ok.focus();
    });
    document.getElementById('refazer-contato').addEventListener('click', function () {
      fc.reset(); ok.hidden = true; fc.hidden = false;
      document.getElementById('c-nome').focus();
    });
  }

  /* Menu: aberto e sem botão em telas largas */
  var menu = document.getElementById('menu');
  var larga = window.matchMedia('(min-width: 48em)');
  function ajustaMenu() { if (menu) { menu.open = larga.matches; } }
  ajustaMenu();
  if (larga.addEventListener) { larga.addEventListener('change', ajustaMenu); }
  if (menu) {
    menu.addEventListener('click', function (e) {
      if (e.target.closest('a') && !larga.matches) { menu.open = false; }
    });
  }

  /* Fichas dos casos */
  document.querySelectorAll('[data-caso]').forEach(function (b) {
    b.addEventListener('click', function () {
      var d = document.getElementById(b.getAttribute('data-caso'));
      if (d && d.showModal) { d.showModal(); }
    });
  });
  document.querySelectorAll('dialog').forEach(function (d) {
    var f = d.querySelector('.fechar');
    if (f) { f.addEventListener('click', function () { d.close(); }); }
    d.addEventListener('click', function (e) {
      if (e.target === d) { d.close(); }
    });
  });

  /* Carteiras de exemplo: abas, rosca, contagem, inclinação, paralaxe */
  var raiz = document.documentElement;
  var reduz = window.matchMedia('(prefers-reduced-motion: reduce)');
  function animar() { return !reduz.matches && !raiz.classList.contains('sem-anim'); }

  var alterna = document.getElementById('alterna-anim');
  if (alterna) {
    var rotulo = function () {
      var off = raiz.classList.contains('sem-anim');
      alterna.setAttribute('aria-pressed', off ? 'true' : 'false');
      alterna.textContent = off ? 'Ativar animações' : 'Desativar animações';
      if (reduz.matches) {
        alterna.textContent = 'Animações desligadas pelo seu sistema';
        alterna.disabled = true;
      }
    };
    alterna.addEventListener('click', function () {
      raiz.classList.toggle('sem-anim');
      rotulo();
      atualizaParalaxe();
    });
    rotulo();
  }

  function conta(painel) {
    painel.querySelectorAll('.cont').forEach(function (el) {
      var alvo = parseInt(el.getAttribute('data-valor'), 10);
      if (el._tempo) { clearInterval(el._tempo); }
      el.textContent = alvo + '%';
      if (!animar() || !alvo) { return; }
      var ini = Date.now();
      el.textContent = '0%';
      el._tempo = setInterval(function () {
        var p = Math.min(1, (Date.now() - ini) / 800);
        el.textContent = Math.round(alvo * p) + '%';
        if (p >= 1) { clearInterval(el._tempo); el.textContent = alvo + '%'; }
      }, 40);
    });
  }
  function desenha(painel) {
    var r = painel.querySelector('.rosca');
    if (!r) { return; }
    r.classList.remove('desenha');
    if (animar()) { void r.getBoundingClientRect(); r.classList.add('desenha'); }
  }

  var comp = document.getElementById('comparador');
  var paineis = comp ? Array.prototype.slice.call(comp.querySelectorAll('.cart')) : [];
  var abas = [];
  var atual = null;
  function mostra(i, foco) {
    paineis.forEach(function (p, k) {
      var on = k === i;
      p.hidden = !on;
      abas[k].setAttribute('aria-selected', on ? 'true' : 'false');
      abas[k].tabIndex = on ? 0 : -1;
    });
    if (foco) { abas[i].focus(); }
    var p = paineis[i];
    p.classList.remove('entra');
    if (animar() && atual !== null) { void p.offsetWidth; p.classList.add('entra'); }
    atual = i;
    desenha(p);
    conta(p);
  }
  if (comp && paineis.length) {
    var lista = document.createElement('div');
    lista.className = 'abas';
    lista.setAttribute('role', 'tablist');
    lista.setAttribute('aria-label', 'Carteiras de exemplo');
    paineis.forEach(function (p, k) {
      var b = document.createElement('button');
      b.type = 'button';
      b.className = 'aba';
      b.id = 'aba-' + p.id;
      b.setAttribute('role', 'tab');
      b.setAttribute('aria-controls', p.id);
      var ic = p.querySelector('.cart-icone').cloneNode(true);
      ic.removeAttribute('role'); ic.removeAttribute('aria-label'); ic.setAttribute('aria-hidden', 'true');
      var tx = document.createElement('span');
      var n = document.createElement('span'); n.className = 'aba-nome'; n.textContent = p.getAttribute('data-nome');
      var s = document.createElement('span'); s.className = 'aba-resumo'; s.textContent = p.getAttribute('data-resumo');
      tx.appendChild(n); tx.appendChild(s);
      b.appendChild(ic); b.appendChild(tx);
      p.setAttribute('role', 'tabpanel');
      p.setAttribute('aria-labelledby', b.id);
      p.tabIndex = 0;
      b.addEventListener('click', function () { mostra(k, false); });
      b.addEventListener('keydown', function (e) {
        var j = null;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { j = (k + 1) % paineis.length; }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { j = (k - 1 + paineis.length) % paineis.length; }
        else if (e.key === 'Home') { j = 0; }
        else if (e.key === 'End') { j = paineis.length - 1; }
        if (j !== null) { e.preventDefault(); mostra(j, true); }
      });
      /* Inclinação sutil, só com mouse */
      b.addEventListener('pointermove', function (e) {
        if (e.pointerType !== 'mouse' || !animar()) { return; }
        var r = b.getBoundingClientRect();
        var x = (e.clientX - r.left) / r.width - 0.5;
        var y = (e.clientY - r.top) / r.height - 0.5;
        b.style.setProperty('--ry', (x * 6).toFixed(2) + 'deg');
        b.style.setProperty('--rx', (-y * 6).toFixed(2) + 'deg');
      });
      b.addEventListener('pointerleave', function () {
        b.style.removeProperty('--rx'); b.style.removeProperty('--ry');
      });
      lista.appendChild(b);
      abas.push(b);
    });
    comp.insertBefore(lista, comp.firstChild);
    comp.classList.add('tem-abas');
    mostra(0, false);
  }

  /* Destaque do segmento: mouse e foco nas linhas da tabela */
  paineis.forEach(function (p) {
    var r = p.querySelector('.rosca');
    var linhas = p.querySelectorAll('table.comp tbody tr');
    function liga(k) {
      r.classList.add('destaca');
      r.querySelectorAll('.seg').forEach(function (s) { s.classList.toggle('on', s.getAttribute('data-seg') === k); });
      linhas.forEach(function (l) { l.classList.toggle('on', l.getAttribute('data-seg') === k); });
    }
    function desliga() {
      r.classList.remove('destaca');
      r.querySelectorAll('.seg').forEach(function (s) { s.classList.remove('on'); });
      linhas.forEach(function (l) { l.classList.remove('on'); });
    }
    linhas.forEach(function (l) {
      l.tabIndex = 0;
      var k = l.getAttribute('data-seg');
      l.addEventListener('mouseenter', function () { liga(k); });
      l.addEventListener('focus', function () { liga(k); });
      l.addEventListener('mouseleave', desliga);
      l.addEventListener('blur', desliga);
    });
    r.querySelectorAll('.seg').forEach(function (s) {
      var k = s.getAttribute('data-seg');
      s.addEventListener('mouseenter', function () { liga(k); });
      s.addEventListener('mouseleave', desliga);
    });
  });

  /* Usar a carteira no simulador: preenche só o prazo */
  document.querySelectorAll('[data-usar-prazo]').forEach(function (b) {
    b.addEventListener('click', function () {
      var campo = document.getElementById('prazo');
      var msg = document.getElementById('sim-origem');
      if (!campo) { return; }
      var meses = b.getAttribute('data-usar-prazo');
      var nome = b.closest('.cart').getAttribute('data-nome');
      campo.value = meses;
      campo.removeAttribute('aria-invalid');
      var er = document.getElementById('erro-prazo'); if (er) { er.textContent = ''; }
      if (msg) {
        msg.textContent = 'Prazo preenchido com ' + meses + ' meses a partir do modelo "' + nome + '". Valores e taxa continuam por sua conta.';
        msg.hidden = false;
      }
      var sim = document.getElementById('simulador');
      if (sim) { sim.scrollIntoView({ behavior: animar() ? 'smooth' : 'auto', block: 'start' }); }
      campo.focus({ preventScroll: true });
    });
  });

  /* Paralaxe leve em uma foto */
  var para = document.getElementById('paralaxe');
  var pendente = false;
  function atualizaParalaxe() {
    pendente = false;
    if (!para) { return; }
    if (!animar()) { para.style.transform = ''; return; }
    var r = para.parentNode.getBoundingClientRect();
    var centro = r.top + r.height / 2;
    var p = (centro - window.innerHeight / 2) / window.innerHeight;
    p = Math.max(-1, Math.min(1, p));
    para.style.transform = 'translate3d(0,' + (p * 24).toFixed(1) + 'px,0)';
  }
  window.addEventListener('scroll', function () {
    if (!pendente) { pendente = true; requestAnimationFrame(atualizaParalaxe); }
  }, { passive: true });
  atualizaParalaxe();

  /* Simulador */
  var form = document.getElementById('form-sim');
  if (!form) { return; }
  var campos = ['inicial', 'aporte', 'prazo', 'taxa'];

  function numero(txt) {
    var t = String(txt).trim().replace(/\s/g, '').replace(/^R\$/i, '');
    if (t === '') { return null; }
    if (t.indexOf(',') !== -1) { t = t.replace(/\./g, '').replace(',', '.'); }
    /* "1.500" e "1.500.000" em pt-BR são milhares, não decimais. */
    else if (/^[1-9]\d{0,2}(\.\d{3})+$/.test(t)) { t = t.replace(/\./g, ''); }
    if (!/^-?\d+(\.\d+)?$/.test(t)) { return NaN; }
    return parseFloat(t);
  }
  function moeda(v) {
    return v.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
  }
  function erro(id, msg) {
    var el = document.getElementById('erro-' + id);
    var inp = document.getElementById(id);
    el.textContent = msg || '';
    if (msg) { inp.setAttribute('aria-invalid', 'true'); } else { inp.removeAttribute('aria-invalid'); }
  }

  form.addEventListener('submit', function (ev) {
    ev.preventDefault();
    var v = {}, primeiro = null;
    var regras = {
      inicial: { nome: 'o valor inicial', min: 0, max: 1e9 },
      aporte: { nome: 'o aporte mensal', min: 0, max: 1e9 },
      prazo: { nome: 'o prazo em meses', min: 1, max: 600, inteiro: true },
      taxa: { nome: 'a taxa anual', min: -50, max: 100 }
    };
    campos.forEach(function (id) {
      var r = regras[id];
      var n = numero(document.getElementById(id).value);
      var msg = '';
      if (n === null) { msg = 'Informe ' + r.nome + '.'; }
      else if (isNaN(n)) { msg = 'Use só números, por exemplo 1500 ou 1500,50.'; }
      else if (n < r.min || n > r.max) {
        msg = 'Informe ' + r.nome + ' entre ' + String(r.min).replace('.', ',') + ' e ' + String(r.max).replace('.', ',') + '.';
      } else if (r.inteiro && Math.floor(n) !== n) { msg = 'Use um número inteiro de meses.'; }
      erro(id, msg);
      if (msg && !primeiro) { primeiro = id; }
      v[id] = n;
    });
    var saida = document.getElementById('sim-saida');
    var vazio = document.getElementById('sim-vazio');
    if (!primeiro && v.inicial === 0 && v.aporte === 0) {
      erro('inicial', 'Informe um valor inicial ou um aporte maior que zero.');
      primeiro = 'inicial';
    }
    if (primeiro) {
      saida.hidden = true; vazio.hidden = false;
      document.getElementById(primeiro).focus();
      return;
    }
    /* Taxa mensal equivalente; aportes no fim de cada mês. */
    var i = Math.pow(1 + v.taxa / 100, 1 / 12) - 1;
    var f = Math.pow(1 + i, v.prazo);
    var total = v.inicial * f + (i === 0 ? v.aporte * v.prazo : v.aporte * (f - 1) / i);
    var aportado = v.inicial + v.aporte * v.prazo;
    var dif = total - aportado;
    var sinal = dif < 0 ? '−' : (dif > 0 ? '+' : '');
    document.getElementById('sim-total').textContent = moeda(Math.round(total * 100) / 100);
    document.getElementById('sim-detalhe').textContent =
      'Total aportado: ' + moeda(aportado) + '. Diferença: ' + sinal + moeda(Math.abs(dif)) + '.';
    vazio.hidden = true; saida.hidden = false;
  });
})();
