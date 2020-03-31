
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))
    var Num2 = (parseFloat(document.getElementById("numero2").value))
    var Num3 = (parseFloat(document.getElementById("numero3").value))

    var max = Math.max(Num1, Num2, Num3)

    Solucion.innerHTML = ("El número mayor es: " + max)
}
