function calcular() {

    var Solucion = document.getElementById("solucion")
    var Solucion2 = document.getElementById("solucion2")
    var Solucion3 = document.getElementById("solucion3")
    var Solucion4 = document.getElementById("solucion4")

    var Numero1 = (parseFloat(document.getElementById("numero1").value))

    let vector = new Array(Numero1)

    let vectorPar = []
    let vectorImpar = []

    let vectorOrdenado = []

    for (var i = 0; i < Numero1; i++) {
        if (esPar(i)) {
            vector[i] = i * i + 1
            vectorPar.push(vector[i])
        } else {
            vector[i] = 3 * (i + 1)
            vectorImpar.push(vector[i])

        }
    }



    Solucion.innerHTML += "<h3>SIN ORDENAR</h3>"
    vector.forEach(function (elemento, indice, array) {
        Solucion2.innerHTML += "vec [" + indice + "] = " + elemento + "<br>"

    });

    //ordenandolo

    vectorImpar.sort((a, b) => b - a)

    vectorPar.sort((a, b) => a - b)

    Array.prototype.push.apply(vectorImpar,vectorPar)

    Solucion3.innerHTML += "<h3>ORDENADO</h3>"
    vectorImpar.forEach(function (elemento, indice, array) {
        Solucion4.innerHTML += "vec [" + indice + "] = " + elemento + "<br>"
        
    });



}

function esPar(n) {
    if (n % 2 == 0) {
        return true
    } else {
        return false
    }
}

