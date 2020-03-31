
function calcular() {

    var Solucion = document.getElementById("solucion")

    var Creditos = (parseFloat(document.getElementById("creditos").value))
    var Valor = (parseFloat(document.getElementById("valor").value))
    var Estrato = (parseFloat(document.getElementById("estrato").value))

    var Matricula



    if (Creditos <= 20 && Creditos > 0) {
        //paga valor normal
        Matricula = Creditos * Valor
    } else {
        //creditos extra al doble de precio
        var CreditosExtra = Creditos - 20
        Matricula = 20 * Valor + (CreditosExtra * Valor * 2)
    }


    if (Estrato == 1) {
        Matricula = Matricula - (Matricula * 0.80)
    } else if (Estrato == 2) {
        Matricula = Matricula - (Matricula * 0.50)
    } else if (Estrato == 3) {
        Matricula = Matricula - (Matricula * 0.30)
    }


    if (Estrato == 1) {
        Solucion.innerHTML = ("Costo de la matricula: " + Matricula + "<br>Valor del subsidio: " + "200.000")
    } else if (Estrato == 2) {
        Solucion.innerHTML = ("Costo de la matricula: " + Matricula + "<br>Valor del subsidio: " + "100.000")
    } else if (Estrato == 3) {
        Solucion.innerHTML = ("Costo de la matricula: " + Matricula + "<br>Valor del subsidio: " + "0")
    }

}
