
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    if ((Num1 % 4 == 0) && (Num1 % 100 != 0) || (Num1 % 400 == 0)) {
        Solucion.innerHTML = ("El año: " + Num1 + ", si es bisiesto ")
    } else {
        Solucion.innerHTML = ("El año: " + Num1 + ", no es bisiesto ")
    }

}
