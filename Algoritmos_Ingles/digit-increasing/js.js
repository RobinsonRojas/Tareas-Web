function isDigitIncreasing() {
    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    var n = 1;
    var i = 1;

    while (n <= Num1) {
        if (Num1 % n == 0 && n * 10 > Num1) {
            return Solucion.innerHTML = ("1");
        }
        i = i + 1
        n = n * 10 + i   
    }
    return Solucion.innerHTML = ("0");
}


