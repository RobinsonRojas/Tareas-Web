
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    if (Num1 % 2 == 0) {
        Solucion.innerHTML = ("El número: " + Num1 + ", es par")
    
    } else {
        Solucion.innerHTML = ("El número: " + Num1 + ", es impar")
    }

}
