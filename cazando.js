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

function graficarGato(){
    ctx.fillStyle="orange";
    ctx.fillRect(gatoX,gatoY,ANCHO_GATO,ALTURA_GATO);


}
function graficarComida(){
    ctx.fillStyle=" #074208";
    ctx.fillRect(comidaX,comidaY,30,20);

}