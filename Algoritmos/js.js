function MCD() {
    var Solucion1 = document.getElementById("solucion1")
    var a = (parseFloat(document.getElementById("a").value))
    var b = (parseFloat(document.getElementById("b").value))

    Solucion1.innerHTML = ("")
    if (a < b) {
        cambio = a
        a = b
        b = cambio
    }
     
    Solucion1.innerHTML += ("<b> a mod b = r </b> <br><br>")
    while (b != 0) {
        r = a % b
        
        Solucion1.innerHTML += (a + " mod " + b + " = " + r + "<br>")
        a = b
        b = r
    }

    Solucion1.innerHTML += ("<br> MCD = " + a)

    MCM(a)
}

function MCM(x) {
    var a = (parseFloat(document.getElementById("a").value))
    var b = (parseFloat(document.getElementById("b").value))
    var Solucion2 = document.getElementById("solucion2")

    var mcm = (a * b) / x

    Solucion2.innerHTML = ("MCM = " + mcm)

}