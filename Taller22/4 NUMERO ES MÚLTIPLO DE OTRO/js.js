
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))
    var Num2 = (parseFloat(document.getElementById("numero2").value))

    if (Num1 % Num2 == 0) {
        Solucion.innerHTML = ("El número: " + Num2 + ", es múltiplo de: "+ Num1)
    } else {
        Solucion.innerHTML = ("El número: " + Num2 + ", no es múltiplo de: "+ Num1)
    }


}
