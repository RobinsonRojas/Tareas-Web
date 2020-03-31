
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Terminos = (parseFloat(document.getElementById("terminos").value))
    var x = (parseFloat(document.getElementById("valor").value))

    var sumatoria = 1
    var dividendo
    var divisor
    var division
    var signo = -1

    for (var i = 1; i <= Terminos; i++) {
        dividendo = Math.pow(x, i)

        divisor = factorial(i)

        division = (dividendo / divisor) * signo
        signo = signo * -1

        sumatoria = sumatoria + division
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