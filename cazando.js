let canvas = document.getElementById("areaJuego");
let ctx=canvas.getContext("2d");
const ALTURA_GATO=60;
const ANCHO_GATO=40;
const ALTO_COMIDA=20;
const ANCHO_COMIDA=30;

let gatoX = 230;
let gatoY = 250;
let comidaX = 0;
let comidaY = 0;

function iniciar(){
    graficarGato();
    graficarComida();
}
function graficarRect(x, y, ancho, alto, color){
    ctx.fillStyle= color;
    ctx.fillRect(x,y,ancho,alto);
}

function graficarGato(){
   
    graficarRect(gatoX,gatoY,ANCHO_GATO,ALTURA_GATO,"orange");


}
function graficarComida(){
   
    graficarRect(comidaX,comidaY,ANCHO_COMIDA,ALTO_COMIDA,"#074208");

}