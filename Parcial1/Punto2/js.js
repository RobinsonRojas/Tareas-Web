function funcion() {
    var Cadena = document.getElementById("cadena").value
    var caracteres = Cadena.length

    caracteres = parseFloat(Cadena.length) ;
    document.getElementById("solucion").innerHTML = caracteres;
  }