function validarCamposObligatorios()
{
    var bandera = true

    for(var i=0; i<document.forms[0].elements.length; i++){
        var elemento = document.forms[0].elements[i]
        if(elemento.value == '' && elemento.type == 'text'){
            
            if(elemento.id == 'cedula'){
                document.getElementById('mensajeCedula').innerHTML = '<br/>La cedula esta vacia ' 
                
            }
            if (elemento.id == 'nombres') {
                document.getElementById('mensajeNombres').innerHTML = '<br/>ingrese sus dos nombres'
               
            }

            if (elemento.id == 'apellidos') {
                document.getElementById('mensajeApellidos').innerHTML = '<br/>ingrese sus dos apellidos'
            }
            if (elemento.id == 'direccion') {
                document.getElementById('mensajeDireccion').innerHTML = '<br/>ingrese una direccion'
            }
            if (elemento.id == 'telefono') {
                document.getElementById('mensajeTelefono').innerHTML = '<br/>ingrese un telefono'
            }
            if (elemento.id == 'fechaNacimiento') {
                document.getElementById('mensajeFecha').innerHTML = '<br/>ingrese una fecha de nacimiento'
            }
            if (elemento.id == 'correo') {
                document.getElementById('mensajeCorreo').innerHTML = '<br/>ingrese un correo'
            }
            if (elemento.id == 'contrasena'){
                document.getElementById('mensajeContrasena').innerHTML = '<br/>ingrese contraseña'
            }

            elemento.border='1px red solid'
            
            elemento.className = 'error'
            bandera = false
        }
    }
    if(!bandera){
        alert('Error: revisar los comentarios')
    }
    return bandera
}


function validar() {
    var cedula = frmusr.cedula.value;
    array = cedula.split("");
    num = array.length;
    if (num == 10) {
        total = 0;
        digito = (array[9] * 1);
        for (i = 0; i < (num - 1); i++) {
            mult = 0;
            if ((i % 2) != 0) {
                total = total + (array[i] * 1);
            } else {
                mult = array[i] * 2;
                if (mult > 9)
                    total = total + (mult - 9);
                else
                    total = total + mult;
            }
        }
        decena = total / 10;
        decena = Math.floor(decena);
        decena = (decena + 1) * 10;
        final = (decena - total);
        if ((final == 10 && digito == 0) || (final == digito)) {

            document.getElementById('cedula').style.border = "1px solid black";
            document.getElementById('mensajeCedula').innerHTML = ''
            return true;
        } else {

            document.getElementById('cedula').style.border = "1px solid red";
            document.getElementById('mensajeCedula').innerHTML = 'cedula incorrecta'
            return false;
        }
    } else {

        document.getElementById('cedula').style.border = "1px solid red";
        document.getElementById('mensajeCedula').innerHTML = 'cedula incorrecta'
        return false;
    }
}



function sololetras(e) {
    key = e.keyCode || e.which;
    teclado = String.fromCharCode(key);
    letras = "qwertyuiopasdfghjklñzxcvbnmQWERTYUIOPASDFGHJKLZXCVBNM ";
    especiales = "164";
    teclado_especial = false;   
    for (var i in especiales) {

        if (key == especiales[i]) {

            teclado_especial = true;

            break;
        }
    }

    if (letras.indexOf(teclado) == -1 && !teclado_especial) {

        return false;

    }

}


function soloNumeros(e) {
    var key = window.Event ? e.which : e.keyCode
    return ((key >= 48 && key <= 57) || (key == 8) || (key == 45))
}



function validarEmail() {
    var texto = document.getElementById('correo').value;

    var regex = /^[-\w.%+]{1,64}@(?:[@est.ups.edu.ec]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!regex.test(texto)) {
        document.getElementById("mensajeCorreo").innerHTML = "corrreo invalido";
        correo.style.border = '1px red solid'

    } else {
        document.getElementById("mensajeCorreo").innerHTML = "";
        correo.style.border = '1px black solid'

    }

}




function nombre() {
    
    var fecha = document.getElementById("nombres").value;
    
        limite = 2;

    var cortado = fecha.split(separador);
    fechechita = cortado.length
    var f = 1;

    if (fechechita == limite) {

        nombres.style.border = " 1px black solid "
        document.getElementById('mensajeNombres').innerHTML = " "
    } else {
        nombres.style.border = " 2px red solid "
        document.getElementById('mensajeNombres').innerHTML = "ingrese solo dos nombres"
        document.frmusr.nombres.setfocus();

    }


}

function apellido() {

    var fecha = document.getElementById("apellidos").value;
    separador = (' '),
        limite = 2;
    
    var cortado = fecha.split(separador);
    fechechita = cortado.length
    var f = 1;

    if (fechechita == limite) {

        apellidos.style.border = " 1px black solid "
        document.getElementById('mensajeApellidos').innerHTML = " "
    } else {
        apellidos.style.border = " 1px red solid "
        document.getElementById('mensajeApellidos').innerHTML = "ingrese solo dos apellidos"
        document.frmusr.apellidos.setfocus();

    }
}


function fecha() {
    var date = document.getElementById('fechaNacimiento').value;
    var hh = date.substring(4, -1);

    if (hh.indexOf('-') != -1) {

        var newdate = date.split("-").reverse().join("-");

        frmusr.fechaNacimiento.value = newdate;
        apellidos.style.border = " 1px black solid "
        document.getElementById('mensajeFecha').innerHTML = ""

    } else {
        fechaNacimiento.style.border = '1px red solid';
        document.getElementById('mensajeFecha').innerHTML = "ingrese con formato dd-mm-yyy"
        document.frmusr.fechaNacimiento.setfocus();

    }

}