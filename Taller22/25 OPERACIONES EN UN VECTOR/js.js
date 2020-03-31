function calcular() {

    var Solucion = document.getElementById("solucion")
    var Solucion2 = document.getElementById("solucion2")

    var Numero1 = (parseFloat(document.getElementById("numero1").value))

    let vector = new Array(Numero1)
    var suma = 0
    var promedio

    for (var i = 0; i < Numero1; i++) {

        vector[i] = (i + 1) * i

        suma += vector[i]
        Solucion.innerHTML += "vec [" + i + "] = " + vector[i] + "<br>"
    }

    promedio = suma / vector.length

    Solucion2.innerHTML = "La suma es: " + suma + "<br>El promedio es: " + promedio

}