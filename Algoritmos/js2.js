function sol() {
    var Solucion1 = document.getElementById("solucion1")
    var n = (parseFloat(document.getElementById("n").value))
    var f = (parseFloat(document.getElementById("f").value))
    var s = 0
    Solucion1.innerHTML = ("")

    for (let k = 1; k < n; k++) {
    
        s = (k * f + 1) % n
        Solucion1.innerHTML += (k + " * " + f + " + " + "1 mod " + n + " = " + s + "<br>") 

        if (s == 0) {
            s = (k * f + 1) / n
            Solucion1.innerHTML += ("S = (" + k + " * " + f + " + 1) /" + n + "<br>")
            return Solucion1.innerHTML += ("S = " + s)
        }
    }
}

