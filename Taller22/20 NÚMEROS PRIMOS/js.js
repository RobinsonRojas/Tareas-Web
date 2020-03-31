
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Solucion2 = document.getElementById("solucion2")

    var Numero1 = (parseFloat(document.getElementById("numero1").value))




    let arreglo = []
    let arregloPrimos = []
    var i = 1
    var i2 = 0

    do {
        arreglo.push(i)
        i++

        //verificando numero por numro del arreglo si es primo o no 
        if (primo(arreglo[i2])) {
            arregloPrimos.push(arreglo[i2])
        }
        i2++

    } while (Numero1 != arregloPrimos.length)



    let total = arregloPrimos.reduce((a, b) => a + b, 0);
    var promedio = Math.round(total / arregloPrimos.length)

    Solucion.innerHTML = arregloPrimos
    Solucion2.innerHTML = "La suma es: " + total + "<br>El promedio es: " + promedio

}

function primo(numero) {

    for (var i = 2; i <= numero / 2; i++) {
        if (numero % i == 0) {
            return false
        }
    }
    return true
}