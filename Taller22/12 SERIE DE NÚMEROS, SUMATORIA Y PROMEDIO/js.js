
function calcular() {

    var Solucion = document.getElementById("solucion")
    var Solucion2 = document.getElementById("solucion2")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    var array = new Array
    var espacio = 15
    var suma = 0
    var promedio

    for (var i = 1; i <= Num1; i++) {
        array[i] = i
    }


    for (var i = 1; i <= Num1; i++) {
        Solucion.innerHTML += array[i] + ",";
        if (i == espacio) {
            Solucion.innerHTML += array[i] + ", <br>";
            espacio += 15
        }
        suma = suma + array[i]
        
    }

    promedio = suma / Num1

    Solucion2.innerHTML = ("La suma es: "+ suma + "<br> El promedio es: " + promedio)



}
