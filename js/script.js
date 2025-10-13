//Ativar links do Menu

const links = document.querySelectorAll(".header-menu a");

function ativarLink(link) {
  const url = location.href;
  const href = link.href;

  if (url.includes(href)) {
    link.classList.add('ativo');
  }
}

links.forEach(ativarLink);

// Ativar items do Orçamento

const parametros = new URLSearchParams(location.search);

function ativarProdutos(params) {
  const element = document.getElementById(params);
  if (element) element.checked = true
}

parametros.forEach(ativarProdutos);
