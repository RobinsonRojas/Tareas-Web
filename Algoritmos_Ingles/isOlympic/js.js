function isOlympic() {
    var Solucion = document.getElementById("solucion")
    var Num1 = (parseFloat(document.getElementById("numero1").value))

    let Array = [0,]

    var pos = 1

    //llenando el array del usuario
    while (pos <= Num1) {
        Array.push(parseInt(prompt("ingrese el numero de la posicion " + pos)))
        pos++
    }
    console.log("Array original: " + Array)

    //ordenando el arry
    Array.sort((a, b) => a - b);
    Array.reverse()
    console.log("Array ordenado: " + Array)

    //verificando que no tenga numeros inferiores a 0
    for (let i = 0; i < Array.length; i++) {
        if (Array[i] < 0) {
            return Solucion.innerHTML = "0"
        }
    }

    for (let i = 0; i < Array.length - 1; i++) {

        //calculando numeros menores que cada [] del array
        function NumerosMenores(elemento) {
            return elemento < Array[i];
        }
        var menores = Array.filter(NumerosMenores);
        //sumando los numeros menores 
        var SumaMenores = menores.reduce(function(a, b){ return a + b; });

        //verificando que la suma de los numeros menosres sea inferior a su numero mayor
        if (Array[i] < SumaMenores) {
            i = Array.length
            return Solucion.innerHTML = "0"
        }

        console.log("menores que " + Array[i] + " :: " + menores)
        console.log("suma de los menores que " + Array[i] + " :: " + SumaMenores)
    }

    return Solucion.innerHTML = "1"

}