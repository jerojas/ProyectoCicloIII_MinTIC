let registros = []


function obtenerUsername(arreglo) { 

    var arreglonombres= [];
    var regExp = /^([0-9]+[a-zA-Z]+|[a-zA-Z]+[0-9]+)[0-9a-zA-Z]*$/;


    for (let i = 0; i < arreglo.length; i++) {
        
        if(arreglo[i].usuario.match(regExp) != null){
            arreglonombres.push(arreglo[i].usuario);
        }    
    }

    return arreglonombres;

}


function filtrarCorreo(arreglo) {
    var arreglocorreo=[];
    var regExp3 = /\bhotmail.com$\b/;
    
    for (let i = 0; i < arreglo.length; i++) {
    
        if(arreglo[i].correo.match(regExp3) != null){
            arreglocorreo.push(arreglo[i].correo);
        }
    
    }
    
    return arreglocorreo; 
    
}

function agregarRegistro() {

    var username = document.getElementById("username").value;
    var correo = document.getElementById("correo").value;
    var contrasena = document.getElementById("contrasena").value;

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