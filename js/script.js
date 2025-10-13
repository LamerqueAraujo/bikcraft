//Ativar links do Menu

const links = document.querySelectorAll('.header-menu a');

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

// Perguntas frequentes

const perguntas = document.querySelectorAll('.perguntas button');

function ativarPergunta(e) {
  const pergunta = e.currentTarget;
  const controls = pergunta.getAttribute('aria-controls');
  const responta = document.getElementById(controls);

  responta.classList.toggle('ativa');
  const respostaAtiva = responta.classList.contains('ativa');
  pergunta.setAttribute('aria-expanded', respostaAtiva)

}

function eventosPerguntas(pergunta) {
  pergunta.addEventListener('click', ativarPergunta);
}

perguntas.forEach(eventosPerguntas);


// Galeria de bicicletas 

const galeria = document.querySelectorAll('.bicicleta-imagens img');
const galeriaContainer = document.querySelector('.bicicleta-imagens');

galeria.forEach((img) => {
  img.addEventListener('click', (e) => {
    const img = e.currentTarget;
    const media = matchMedia('(min-width: 1000px)',).matches;
    if (media === true) {
      galeriaContainer.prepend(img)
    }
  })
});

// Animação

if (window.SimpleAnime) {
  new SimpleAnime();
}
