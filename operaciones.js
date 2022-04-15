// var rootElement = document.documentElement;

var x;
var y;

// rootElement.style.setProperty("--x", x);
// rootElement.style.setProperty("--y", y);

function aleatorio(mini, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return resultado;
}


document.body.onload = addElement;
function dibujarEstrella(){
    const newDiv = document.createElement("div");
    const currentDiv = document.getElementById("star");
    document.body.insertBefore(newDiv, planet);
}
