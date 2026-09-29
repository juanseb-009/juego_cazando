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
let puntaje = 0;

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
function limpiarCanva(){
    ctx.clearRect(0,0,canvas.width, canvas.height);
}

function moverIzq(){
    gatoX = gatoX - 10;

    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverDere(){
    gatoX = gatoX+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverUp(){
    gatoY = gatoY-10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function moverDown(){
    gatoY = gatoY+10;
    limpiarCanva();
    graficarGato();
    graficarComida();
    detectarColision();
}
function detectarColision() {
    if (gatoX + ANCHO_GATO > comidaX && 
        gatoX < comidaX + ANCHO_COMIDA && 
        gatoY + ALTURA_GATO > comidaY && 
        gatoY < comidaY + ALTO_COMIDA) {
        
        puntaje = puntaje+1;
        mostrarEnSpan("puntos", puntaje);
        

        comidaX = generarAleatorio(0, canvas.width - ANCHO_COMIDA);
        comidaY = generarAleatorio(0, canvas.height - ALTO_COMIDA);
        
        limpiarCanva();
        graficarGato();
        graficarComida();
    }
}