
function calcular() {

    var Solucion = document.getElementById("solucion")

    var Numero1 = (parseFloat(document.getElementById("numero1").value))

    for (var i = 2; i <= Numero1/2; i++) {
        if (Numero1 % i == 0) {
            return Solucion.innerHTML = ("El número: " + Numero1 + ",no es primo")
        }
    }
    return Solucion.innerHTML = ("El número: " + Numero1 + ",es primo")
}