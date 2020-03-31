
function calcular() {

    var Solucion = document.getElementById("solucion")

    var Peso = (parseFloat(document.getElementById("peso").value))
    var Valor = (parseFloat(document.getElementById("valor").value))

    //Lunes (Si) == 1
    //Lunes (No) == 2
    var Lunes = (parseFloat(document.getElementById("lunes").value))

    //Efectivo == 1
    //Tarjeta == 2
    var Pago = (parseFloat(document.getElementById("pago").value))

    var Tarifa
    var TotalPagar


    //Tarifas:
    if (Peso < 100) {
        Tarifa = 20000
        console.log(Tarifa)
    } else if (Peso <= 150) {
        Tarifa = 25000
        console.log(Tarifa)
    } else if (Peso <= 200) {
        Tarifa = 30000
        console.log(Tarifa)
    } else if (Peso > 200) {
        Tarifa = 35000
        var PesoAdicinal = Peso - 200
        PesoAdicinal = parseInt(PesoAdicinal / 10)
        var TarifaAdicional = 2000 * PesoAdicinal
        Tarifa = Tarifa + TarifaAdicional
    }



    if (Lunes == 1) {
        //Promociones
        var Promocion
        if (Pago == 2) {
            Promocion = Tarifa * 0.50
            TotalPagar = Tarifa - Promocion

            Solucion.innerHTML = ("Tarifa: " + Tarifa + "<br>Promoción: " + Promocion + "<br>Total a pagar: " + TotalPagar)
        } else if (Pago == 1 && Valor > 1000000) {
            Promocion = Tarifa * 0.60
            TotalPagar = Tarifa - Promocion

            Solucion.innerHTML = ("Tarifa: " + Tarifa + "<br>Promoción: " + Promocion + "<br>Total a pagar: " + TotalPagar)
        }

    } else {

        //Descuentos:
        var Descuento
        if (Valor >= 300000 && Valor <= 600000) {
            Descuento = (Tarifa * 0.10)
            TotalPagar = Tarifa - Descuento 
            Solucion.innerHTML = ("Tarifa: " + Tarifa + "<br>Descuento: " + Descuento + "<br>Total a pagar: " + TotalPagar)
        } else if (Valor > 600000 && Valor <= 1000000) {
            Descuento = (Tarifa * 0.20)
            TotalPagar = Tarifa - Descuento 
            Solucion.innerHTML = ("Tarifa: " + Tarifa + "<br>Descuento: " + Descuento + "<br>Total a pagar: " + TotalPagar)
        } else if (Valor > 1000000) {
            Descuento = (Tarifa * 0.30)
            TotalPagar = Tarifa - Descuento 
            Solucion.innerHTML = ("Tarifa: " + Tarifa + "<br>Descuento: " + Descuento + "<br>Total a pagar: " + TotalPagar)
        }

    }






}
