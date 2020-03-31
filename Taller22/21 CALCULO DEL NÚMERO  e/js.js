
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Terminos = (parseFloat(document.getElementById("terminos").value))

    var sumatoria = 0
    var divisor = 0

    for (var i = 0; i <= Terminos; i++) {
        divisor = factorial(i)
        sumatoria = sumatoria + (1 / divisor)
    }

    Solucion.innerHTML = ("e = " + sumatoria)

}

function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}