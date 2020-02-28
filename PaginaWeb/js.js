

function calcular(numero1, numero2, numero3) {
    var nombre = document.getElementById("nombre").value

    var numero1 = parseFloat(document.getElementById("numero1").value)
    var numero2 = parseFloat(document.getElementById("numero2").value)
    var numero3 = parseFloat(document.getElementById("numero3").value)

    var resultado = (numero1 + numero2 + numero3) / 3;

    var nota = "nada"



    if (resultado >= 3) {
        nota = "aprobo.";
    } else {
        nota = "reprobo.";
    }

    return Solucion.innerHTML = ("El estudiante " + nombre + " tiene las siguientes Notas:<li>" + numero1 + "</li>  <li>" + numero2 + "</li><li>" + numero3 + "</li> El promedio es : " + resultado + " el estudiante " + nota);   
}



var boton = document.getElementById("enviar");
boton.addEventListener("click", calcular);

var Solucion = document.getElementById("solucion");