document.addEventListener("DOMContentLoaded", function() {
  var botaoLike = document.getElementById("botao-like");
  var numeroLikes = document.getElementById("numero-likes");
  var contadorLikes = localStorage.getItem("contadorLikes") || 0;

  numeroLikes.textContent = contadorLikes;

  botaoLike.addEventListener("click", function() {
      contadorLikes++;
      localStorage.setItem("contadorLikes", contadorLikes);
      numeroLikes.textContent = contadorLikes;
  });
});

function abrirImagem() {
  window.open('assets/BLOG PROJETO.png', 'Imagem em tamanho real', 'width=640,height=480');
}
