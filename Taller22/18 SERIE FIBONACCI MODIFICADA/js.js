
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Solucion2 = document.getElementById("solucion2")

    var Terminos = (parseFloat(document.getElementById("terminos").value))

    let arreglo = [0, 1, 2];


    for (var i = 3; i < Terminos; i++) {

        arreglo.push(arreglo[i - 1] + arreglo[i - 2] + arreglo[i - 3])

        //arreglo[i] = arreglo[i - 1] + arreglo[i - 2] + arreglo[i - 3];

    }

    let total = arreglo.reduce((a, b) => a + b, 0)


    Solucion.innerHTML = arreglo

    Solucion2.innerHTML = "La suma es: " + total




}



