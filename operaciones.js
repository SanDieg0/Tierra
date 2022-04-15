function aleatorio(mini, maxi){
    var resultado;
    resultado = Math.floor(Math.random() * (maxi - mini + 1)) + mini;
    return resultado;
}

var body = document.getElementById("body")
var x = body.clientWidth;
var y = body.clientHeight;

function estrellitas (){
    for(i=0; i<aleatorio(500,1000); i++){
        var estrellitas_container = document.getElementById("estrellitas_container");
        var star = document.createElement("div");
        estrellitas_container.appendChild(star);
        
        star.style.position = "absolute";
        star.style.backgroundColor = "#fff";
        star.style.width = aleatorio(1,1)+"px";
        star.style.height = aleatorio(1,1)+"px";
        star.style.borderRadius = "50%";
        star.style.top = aleatorio(0, 0.99*y)+"px";
        star.style.left = aleatorio(0, 0.99*x)+"px";
    }

}