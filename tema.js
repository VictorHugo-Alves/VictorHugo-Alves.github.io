// =====================================================================
// Alternância de tema claro/escuro.
//
// Carregado como script CLÁSSICO no <head>, de propósito: precisa rodar
// antes da primeira pintura. Um módulo seria adiado e a página abriria
// no tema errado por um quadro antes de corrigir, aquele flash branco.
//
// Três estados, não dois: claro, escuro e "sistema" (nada guardado). No
// terceiro nenhum atributo é carimbado, e o CSS decide pelo
// prefers-color-scheme. Escolher explicitamente vence o sistema.
// =====================================================================
(function () {
  'use strict'

  var CHAVE = 'tema'
  var raiz = document.documentElement

  function guardado() {
    try { return localStorage.getItem(CHAVE) } catch (e) { return null }
  }

  function aplicar(valor) {
    if (valor === 'dark' || valor === 'light') raiz.setAttribute('data-theme', valor)
    else raiz.removeAttribute('data-theme')
  }

  // antes de qualquer pintura
  aplicar(guardado())

  function escuroAgora() {
    var escolhido = guardado()
    if (escolhido) return escolhido === 'dark'
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  }

  function montarBotao() {
    if (document.querySelector('.tema-btn')) return

    var b = document.createElement('button')
    b.className = 'tema-btn'
    b.type = 'button'
    b.innerHTML =
      '<svg class="lua" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"' +
      ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z"/></svg>' +
      '<svg class="sol" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8"' +
      ' stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' +
      '<circle cx="12" cy="12" r="4.2"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4' +
      'M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'

    function rotular() {
      var escuro = escuroAgora()
      b.setAttribute('aria-label', escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro')
      b.setAttribute('title', escuro ? 'Tema claro' : 'Tema escuro')
    }
    rotular()

    b.addEventListener('click', function () {
      var proximo = escuroAgora() ? 'light' : 'dark'
      try { localStorage.setItem(CHAVE, proximo) } catch (e) { /* modo privado */ }
      aplicar(proximo)
      rotular()
    })

    document.body.appendChild(b)
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', montarBotao)
  } else {
    montarBotao()
  }

  // Quem nunca escolheu continua seguindo o sistema, inclusive se o
  // sistema mudar com a página aberta.
  if (window.matchMedia) {
    var mq = window.matchMedia('(prefers-color-scheme: dark)')
    var aoMudar = function () {
      if (!guardado()) {
        var b = document.querySelector('.tema-btn')
        if (b) {
          var escuro = escuroAgora()
          b.setAttribute('aria-label', escuro ? 'Mudar para o tema claro' : 'Mudar para o tema escuro')
          b.setAttribute('title', escuro ? 'Tema claro' : 'Tema escuro')
        }
      }
    }
    if (mq.addEventListener) mq.addEventListener('change', aoMudar)
    else if (mq.addListener) mq.addListener(aoMudar)
  }
})()
