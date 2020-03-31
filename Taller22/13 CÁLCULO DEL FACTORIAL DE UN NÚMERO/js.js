
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    var total = 1;

    for (i = 1; i <= Num1; i++) {
        total = total * i;
    }

    Solucion.innerHTML = ("El factorial es: " + total)
}
