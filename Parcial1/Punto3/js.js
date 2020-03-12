function funcion1() {

    document.getElementById("Anchura1").innerHTML = window.outerWidth;

    document.getElementById("Altura1").innerHTML = window.outerHeight;

    document.getElementById("solucion1").innerHTML = Math.sqrt(Math.pow(window.outerWidth, 2) + Math.pow(window.outerHeight, 2));
  }

function funcion() {
    var Anchura = parseFloat(document.getElementById("anchura").value)
    var Altura = parseFloat(document.getElementById("altura").value)



    var Diagonal = Math.sqrt(Math.pow(Anchura, 2) + Math.pow(Altura, 2))

    document.getElementById("solucion").innerHTML = Diagonal;
  }


