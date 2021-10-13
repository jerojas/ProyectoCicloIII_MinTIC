let registros = []

function obtenerUsername(arreglo) {


}

function filtrarCorreo(arreglo) {


}

function agregarRegistro() {

    var username = document.getElementById("Username").value;
    var correo = document.getElementById("Correo").value;
    var contrasena = document.getElementById("Contrasena").value;

    console.log(username)
    console.log(correo)
    console.log(contrasena)
    let registro = {
        "usuario": username,
        "correo": correo,
        "contrasena": contrasena,
    }

    registros.push(registro)

    console.log(registros);


}

module.exports.registros = registros;
module.exports.filtrarCorreo = filtrarCorreo;
module.exports.obtenerUsername = obtenerUsername;
module.exports.agregarRegistro = agregarRegistro;