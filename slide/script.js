var botao1 = document.querySelector("#botao1");
var botao2 = document.querySelector("#botao2");
var botao3 = document.querySelector("#botao3");
var areaslide = document.querySelector(".areaslide");
var setaesquerda = document.querySelector(".setaesquerda");
var setadireita = document.querySelector(".setadireita");
var intervalpara1;
var intervalpara2;
var intervalpara3;
;




function imagem1() {
  botao1.style.backgroundColor = "white";
  botao2.style.backgroundColor = "gray";
  botao3.style.backgroundColor = "gray";
  areaslide.style.left = "0vw";
  setaesquerda.setAttribute("onclick", "irpraesquerda1()");
  setadireita.setAttribute("onclick", "irpradireita1()");
  clearInterval(intervalpara1);
  clearInterval(intervalpara3);
  var intervalpara2 = setInterval(imagem2, 3000);
}

function imagem2() {
  botao1.style.backgroundColor = "gray";
  botao2.style.backgroundColor = "white";
  botao3.style.backgroundColor = "gray";
  areaslide.style.left = "-100vw";
  setaesquerda.setAttribute("onclick", "irpraesquerda2()");
  setadireita.setAttribute("onclick", "irpradireita2()");
  var intervalpara3 = setInterval(imagem3, 3000);
}

function imagem3() {
  botao1.style.backgroundColor = "gray";
  botao2.style.backgroundColor = "gray";
  botao3.style.backgroundColor = "white";
  areaslide.style.left = "-200vw";
  setaesquerda.setAttribute("onclick", "irpraesquerda3()");
  setadireita.setAttribute("onclick", "irpradireita3()");
  clearInterval(intervalpara2);
  clearInterval(intervalpara3);
  var intervalpara1 = setInterval(imagem1, 3000);

}

function irpraesquerda1() {
  imagem1();
}
function irpraesquerda2() {
  imagem1();
}
function irpraesquerda3() {
  imagem2();
}
function irpradireita1() {
  imagem2();
}
function irpradireita2() {
  imagem3();
}