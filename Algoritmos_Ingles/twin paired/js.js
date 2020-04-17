function isTwinPaired() {
    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    let Array = []
    let ArrayPar = []
    let ArrayImpar = [];

    var pos = 1
    while (pos <= Num1) {
        Array.push(parseInt(prompt("ingrese el numero de la posicion " + pos)))
        pos++
    }

    for (const elemento of Array) {
        if (espar(elemento)) {
            ArrayPar.push(elemento)
        } else {
            ArrayImpar.push(elemento)
        }
    }

    let ArrayParOr = ArrayPar.slice()
    let ArrayImparOr = ArrayImpar.slice()

    ArrayParOr.sort((a, b) => a - b);
    ArrayImparOr.sort((a, b) => a - b);

    if (ArrayParOr.toString() == ArrayPar.toString() && ArrayImparOr.toString() == ArrayImpar.toString()) {
        Solucion.innerHTML = ("1")
    } else {
        Solucion.innerHTML = ("0")
    }
    
    console.log("Array")
    console.log(Array)
    console.log("ArrayPar")
    console.log(ArrayPar)
    console.log("ArrayParOr")
    console.log(ArrayParOr)
    console.log("ArrayImpar")
    console.log(ArrayImpar)
    console.log("ArrayImparOr")
    console.log(ArrayImparOr)
    console.log("----------")
    console.log(ArrayParOr.toString())
    console.log(ArrayPar.toString())
    console.log(ArrayImparOr.toString())
    console.log(ArrayImpar.toString())
}


function espar(num) {
    if (num % 2 == 0) {
        return true
    } else {
        return false
    }
}