
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))
    var Num2 = (parseFloat(document.getElementById("numero2").value))
    var Num3 = (parseFloat(document.getElementById("numero3").value))


    var mayor = Math.max(Num1, Num2, Num3)

    var menor = Math.min(Num1, Num2, Num3)

    var medio
    if (Num1 < mayor && Num1 > menor) {
        medio = Num1
    } else if (Num2 < mayor && Num2 > menor) {
        medio = Num2
    } else if (Num3 < mayor && Num3 > menor) {
        medio = Num3
    }

    Solucion.innerHTML = ("El número mayor es: " + mayor + "<br>" + "El número del medio es: " + medio + "<br>" + "El número menor es: " + menor + "<br>")

}
