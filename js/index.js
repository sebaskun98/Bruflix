var intervalo;

function scrollDireita(){
  intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft += 1 }  , 5);
};
function scrollEsquerda(){
  intervalo = setInterval(function(){ document.getElementById('scroller').scrollLeft -= 1 }  , 5);
};
function clearScroll(){
  clearInterval(intervalo);
};

function scrollDireita1(){
  intervalo = setInterval(function(){ document.getElementById('scroller1').scrollLeft += 1 }  , 5);
};
function scrollEsquerda1(){
  intervalo = setInterval(function(){ document.getElementById('scroller1').scrollLeft -= 1 }  , 5);
};
function clearScroll1(){
  clearInterval(intervalo);
};
