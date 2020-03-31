
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Terminos = (parseFloat(document.getElementById("terminos").value))
    var x = (parseFloat(document.getElementById("valor").value))

    var sumatoria = 1
    var dividendo
    var divisor

    for (var i = 1; i <= Terminos; i++) {
        dividendo = Math.pow(x, i)

        divisor = factorial(i)

        sumatoria = sumatoria + dividendo / divisor
    }

    Solucion.innerHTML = ("f(x) = " + sumatoria)

}

function factorial(n) {
    var total = 1;
    for (i = 1; i <= n; i++) {
        total = total * i;
    }
    return total;
}