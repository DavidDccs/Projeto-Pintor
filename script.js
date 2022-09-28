const quadro = document.getElementById("quadro"); 
const contexto = quadro.getContext("2d");
var cor = "black";
var mouseAtual = {x: 0, y:0};
var mouseAntigo = {x:0, y:0};
var tamanho = 2;
var color = document.getElementById("color");
quadro.addEventListener("mousemove", function (e) {
        mouseAntigo.x = mouseAtual.x
        mouseAntigo.y = mouseAtual.y
        mouseAtual.x = e.pageX - quadro.offsetLeft;
        mouseAtual.y = e.pageY - quadro.offsetTop;
}, );

function inicial(){
quadro.width=600;
quadro.height=600;
quadro.addEventListener("mousedown", function (e) {
  quadro.addEventListener('mousemove', pintar, false);
},false );
quadro.addEventListener("mouseup", function (e) {
  quadro.removeEventListener('mousemove', pintar, false)
}, );
quadro.addEventListener("mouseout", function (e) {
  quadro.removeEventListener('mousemove', pintar, false)
}, );

}

//limpa o quadro
function resetar(){
contexto.clearRect(0,0,quadro.width,quadro.height);
}


//define a cor como preta
function corpreta(){

  tamanho =2;
  color.value = "#000000"
}

//define a cor como branca (borracha)
function corbranca(){
  color.value = "#ffffff";
  tamanho = 20;
}


function pintar(){
 
        contexto.beginPath();
        contexto.moveTo(mouseAntigo.x, mouseAntigo.y);
        contexto.lineTo(mouseAtual.x, mouseAtual.y);
        contexto.strokeStyle = color.value;
        contexto.lineWidth = tamanho;
        contexto.closePath();
        contexto.stroke();
   
}


