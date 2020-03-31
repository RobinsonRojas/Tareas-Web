function calcular() {

    var Solucion = document.getElementById("solucion")
    var Solucion2 = document.getElementById("solucion2")

    var Numero1 = (parseFloat(document.getElementById("numero1").value))

    let vector = new Array(Numero1)
    var suma = 0
    var productoria = 1

    for (var i = 0; i < Numero1; i++) {
        if (esPar(i)) {
            vector[i] = i + 7
            productoria *= vector[i]
        } else {
            vector[i] = i - 1
            suma += vector[i]
        }
        
        Solucion.innerHTML += "vec [" + i + "] = " + vector[i] + "<br>"
    }

    Solucion2.innerHTML = "La suma es: " + suma + "<br>La productoria es: " + productoria

}

function esPar(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

