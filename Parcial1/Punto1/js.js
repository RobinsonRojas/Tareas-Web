function funcion() {
    var tiempo = new Date();
    var milisec = tiempo.getTime() - 946702800000;
    document.getElementById("solucion").innerHTML = milisec;

}