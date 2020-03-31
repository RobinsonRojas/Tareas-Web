
function calcular() {

    var Solucion = document.getElementById("solucion")

    var ValorA = (parseFloat(document.getElementById("valora").value))
    var ValorB = (parseFloat(document.getElementById("valorb").value))
    var ValorC = (parseFloat(document.getElementById("valorc").value))

    var dividendo
    var divisor

    dividendo = -ValorB + Math.sqrt(Math.pow(ValorB, 2) - 4 * ValorA * ValorC)
    divisor = 2 * ValorA

    var x1 =  parseFloat(dividendo / divisor)

    dividendo = -ValorB - Math.sqrt(Math.pow(ValorB, 2) - 4 * ValorA * ValorC)
    divisor = 2 * ValorA

    var x2 = parseFloat(dividendo / divisor)

    Solucion.innerHTML = ("x1: " + x1 + "<br>" + "x2: " + x2)

}