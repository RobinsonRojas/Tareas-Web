
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))


    if (Num1 < 5) {
        var total = 650000 * Num1
        total = total - (total * 0.10)
        Solucion.innerHTML = ("El valor a pagar es: " + total)
    } else if(Num1 < 10){
        var total = 650000 * Num1
        total = total - (total * 0.20)
        Solucion.innerHTML = ("El valor a pagar es: " + total)
    }else if(Num1 >= 10){
        var total = 650000 * Num1
        total = total - (total * 0.40)
        Solucion.innerHTML = ("El valor a pagar es: " + total)
    }

    
}
