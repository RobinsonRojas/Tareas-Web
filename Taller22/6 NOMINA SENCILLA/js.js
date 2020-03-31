
function calcular() {

    var Solucion = document.getElementById("solucion")

    var Nombre = (document.getElementById("nombre").value)

    var Horas = (parseFloat(document.getElementById("horas").value))
    var Valor = (parseFloat(document.getElementById("valor").value))
    var Salario = (parseFloat(document.getElementById("salario").value))

    var SalarioMensual = Horas * Valor

    if (SalarioMensual >= Salario) {
        Solucion.innerHTML = ("Nombre: " + Nombre + "<br>Salario mensual: " + SalarioMensual)
    } else {
        Solucion.innerHTML = ("Nombre: " + Nombre)
    }

}
