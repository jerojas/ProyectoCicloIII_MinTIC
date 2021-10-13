

function checkUsername(valor){
   validarletras=/^[a-zA-Z]+$/ 
   validarnumeros = /^[0-9]+$/;
    if (valor===""){
        alert("No puedo dejarlo vacío")
       
        return false;
    }
    
    
    if (valor.length<4 || valor.length>30){
      alert("debe incluir igual o mayor a 4 o menor a 30 caracteres")
     
       return false;
    }
    
    
    if (!validarletras.test(valor) && !validarnumeros.test(valor)){
      alert("Debe incluir números y letras")
     
      return false;
  }



   
    return true;
    

}


function checkCorreo(valor){


   emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

   if (emailRegex.test(valor)){

      
      return true;
   

   }else{
      alert("Correo invalido")
      return false;
   
   }

  
}

function checkContrasena(valor){

   validar = /^(?=.*\d)(?=.*[a-záéíóúüñ]).*[A-ZÁÉÍÓÚÜÑ]/;

   if((validar.test(valor)) && (valor.length>=8) && (valor!="")){
      console.log("verdadero")
      return true;
      
   }else{
      alert("Contraseña invalida")
      return false;
   }
   
 
}

valor1 =  document.getElementById("contrasena")
valor2 =  document.getElementById("confirmarContrasena")
function checkConfirmContrasena(valor1, valor2){

  

   if ((checkContrasena(valor2)) && (valor1===valor2)){

      return true
   }else{
      alert("La contraseña no coincide")
      return false
   }
      
}


module.exports.checkCorreo = checkCorreo;
module.exports.checkContrasena = checkContrasena;
module.exports.checkConfirmContrasena = checkConfirmContrasena;
module.exports.checkUsername = checkUsername;
