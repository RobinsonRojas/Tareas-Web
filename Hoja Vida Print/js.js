/*Name: Robinson Arley Rojas Novoa 
Date: 30/04/2020
GitHub: https://github.com/RobinsonRojas/Tareas-Web
Copyright: Robinson Arley Rojas Novoa 
*/

function visualizar() {
    var Solucion = document.getElementById("solucion")
    var BtnImprimir = document.getElementById("Btnimprimir")
    BtnImprimir.disabled = false

    var Nombre = document.getElementById("nombre").value
    var Nombre2 = document.getElementById("nombre2").value
    var Apellido = document.getElementById("apellido").value
    var Apellido2 = document.getElementById("apellido2").value
    var FechaNac = document.getElementById("fehcaNA").value
    var Sexo = document.getElementById("sexo").value
    var Telefono = document.getElementById("telefono").value
    var Correo = document.getElementById("correo").value
    var Direccion1 = document.getElementById("direccion1").value
    var Direccion2 = document.getElementById("direccion2").value
    var Direccion3 = document.getElementById("direccion3").value
    var Texto = document.getElementById("texto").value

    //Calculando la edad actual 
    var hoy = new Date();
    var cumpleanos = new Date(FechaNac);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

    if (m < 0 || (m === 0 && hoy.getDate() < cumpleanos.getDate())) {
        edad--;
    }
    edad = parseInt(edad);



    Solucion.innerHTML = ""
    Solucion.innerHTML += "<img src='' height='150px'>"
    Solucion.innerHTML += "<p><b>Nombre : </b> " + Nombre + "</p>"
    Solucion.innerHTML += "<p><b>Segundo Nombre : </b> " + Nombre2 + "</p>"
    Solucion.innerHTML += "<p><b>Apellido : </b> " + Apellido + "</p>"
    Solucion.innerHTML += "<p><b>Segundo Apellido : </b> " + Apellido2 + "</p>"
    Solucion.innerHTML += "<p><b>Fecha de nacimiento : </b> " + FechaNac + "</p>"
    Solucion.innerHTML += "<p><b>Edad : </b> " + edad + "</p>"
    Solucion.innerHTML += "<p><b>Telefono : </b> " + Telefono + "</p>"
    Solucion.innerHTML += "<p><b>Sexo : </b> " + Sexo + "</p>"
    Solucion.innerHTML += "<p><b>Correo : </b> " + Correo + "</p>"
    Solucion.innerHTML += "<p><b>Direccion : </b> " + Direccion1 + " - " + Direccion2 + " # " + Direccion3 + "</p>"
    Solucion.innerHTML += "<p><fieldset><legend><b> Perfil personal</b></legend>" + Texto + "</fieldset></p>"

    // Agregando la imagen
    var preview = document.querySelector('img');
    var file = document.querySelector('input[type=file]').files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        preview.src = reader.result;
    }
    if (file) {
        reader.readAsDataURL(file);
    } else {
        preview.src = "";
    }

}

function imprimir() {
    var x = document.getElementById("formulario");
    //ocultando el formulario
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }

    window.print();

    //regresando el formulario
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}

