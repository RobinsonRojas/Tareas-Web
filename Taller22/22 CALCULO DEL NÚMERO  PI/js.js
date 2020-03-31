function calcular() {

    var Solucion = document.getElementById("solucion")
    var Terminos = (parseFloat(document.getElementById("terminos").value))

    var sumatoria = 0
    var divisor = 1
    var sig = 1

    for (var i = 1; i <= Terminos; i++) {
        sumatoria = sumatoria + (1 / divisor) * sig
        divisor += 2
        sig *= -1
    }

    sumatoria = sumatoria * 4

    Solucion.innerHTML = ("e = " + sumatoria)

}
