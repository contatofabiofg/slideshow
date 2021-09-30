var botao1 = document.querySelector("#botao1");
var botao2 = document.querySelector("#botao2");
var botao3 = document.querySelector("#botao3");
var areaslide = document.querySelector(".areaslide");
var setaesquerda = document.querySelector(".setaesquerda");
var setadireita = document.querySelector(".setadireita");
var timeout = setTimeout(imagem2, 3000);


function imagem1() {
  clearTimeout(timeout);
  botao1.style.backgroundColor = "white";
  botao2.style.backgroundColor = "gray";
  botao3.style.backgroundColor = "gray";
  areaslide.style.left = "0vw";
  setaesquerda.setAttribute("onclick", "imagem1()");
  setadireita.setAttribute("onclick", "imagem2()");
  timeout = setTimeout(imagem2, 3000);
}

function imagem2() {
  clearTimeout(timeout);
  botao1.style.backgroundColor = "gray";
  botao2.style.backgroundColor = "white";
  botao3.style.backgroundColor = "gray";
  areaslide.style.left = "-100vw";
  setaesquerda.setAttribute("onclick", "imagem1()");
  setadireita.setAttribute("onclick", "imagem3()");
  timeout = setTimeout(imagem3, 3000);

}

function imagem3() {
  clearTimeout(timeout);
  botao1.style.backgroundColor = "gray";
  botao2.style.backgroundColor = "gray";
  botao3.style.backgroundColor = "white";
  areaslide.style.left = "-200vw";
  setaesquerda.setAttribute("onclick", "imagem2()");
  setadireita.setAttribute("onclick", "imagem3()");
  timeout = setTimeout(imagem1, 3000);

}
