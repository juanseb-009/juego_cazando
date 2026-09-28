let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_SUELO=40;
const ALTURA_PLAYER=60;
const ANCHO_PLAYER=40;
let personajeX=canvas.width/2;

function iniciar(){
    graficarGato();
}

function graficarGato(){
    ctx.fillStyle="orange";
    ctx.fillRect(230,400,ANCHO_PLAYER,ALTURA_PLAYER)
    

}