const list_aficiones = [];

function validar() {
    let ret_password = validar_password()
    let ret_confirm_pw = confirmar_contraseña()
    let ret_comuna = seleccionarComuna()
    let ret_phone = validarTelefono()
    let ret_email = validarCorreo()
    let ret_direccion = valdiarDireccion()
    //let ret_aficiones = agregaraficiones()
    let ret_pagweb = validarPagWeb()
    let ret_aficionesVal = validarAficion() 
    return  ret_password &&  ret_confirm_pw &&
    ret_comuna && ret_phone && ret_email && ret_aficionesVal && ret_direccion &&
    ret_pagweb;
 }
 


 function validarCorreo() {
    let email = document.getElementById("email").value
    let div = document.getElementById("err_email");
    let input = document.getElementById("email");

    let arroba = email.indexOf("@")
    let punto = email.lastIndexOf(".")

    if(email == ""){
        div.innerText = "El campo correo electronico es obligatorio";
        input.className = "form-control is-invalid";
        div.className = "text-danger";
        return false;
    }
    else{
        if (arroba <= 0) {
            div.innerText = "No es un correo valido";
            input.className = "form-control is-invalid";
            div.className = "text-danger";
            return false;
        }
        else if (punto - arroba <= 1) {
            div.innerText = "No es un correo valido";
            input.className = "form-control is-invalid";
            div.className = "text-danger";
            return false;
        }
        else if  (email.length - punto <= 2) {
            div.innerText = "No es un dominio valido";
            input.className = "form-control is-invalid";
            div.className = "text-danger";
        }
        else{
            div.innerText = "";
            input.className = "form-control";
            return true;
        }
    }
 }

 function validarTelefono() {

    let numeroPH = document.getElementById("validationPhone").value
    let div = document.getElementById("err_phone");
    let input = document.getElementById("validationPhone");

    if(numeroPH == ""){
        div.innerText = "El campo numero es obligatorio";
        input.className = "form-control is-invalid";
        div.className = "text-danger";
        return false;
    }else{
        if(numeroPH.length < 9 || numeroPH.length > 10){

           if(isNaN(numeroPH)){
              div.innerText = "Solo numeros";
                input.className = "form-control is-invalid";
                div.className = "text-danger";
                return false;
            }else{
              div.innerText = "El numero debe tener entre 9 y 10 digitos";
              input.className = "form-control is-invalid";
              div.className = "text-danger";
              return false;
            }
        
        }
        else{
            div.innerText = "";
            input.className = "form-control";
            return true;
        }
    }
 }

 function confirmar_contraseña(){
    let password_original = document.getElementById("password").value;
    let password_confirmation = document.getElementById("confirmar_password").value
    let div = document.getElementById("err_confirmar_pw");
    let input = document.getElementById("confirmar_password");


    if(password_confirmation == ""){
        div.innerText = "El confirmar contraseña no puede estar en blanco";
        input.className = "form-control is-invalid";
        div.className = "text-danger";
        return false;
    }else{
        if(password_original != password_confirmation){
            div.innerText = "La contraseña de confirmacion no coinde con la contraseña anterior";
            input.className = "form-control is-invalid";
            div.className = "text-danger";
            return false;
        }else{
            div.innerText = "";
            input.className = "form-control";
            return true;
        }
    }
 }

 function validar_password() {
    let password = document.getElementById("password").value;
    let div = document.getElementById("err_password");
    let input = document.getElementById("password");
  
    let tieneLetra = false;
    let tieneDigito = false;
  
    for (let i = 0; i < password.length; i++) {
      if (password[i] >= "a" && password[i] <= "z") {
        tieneLetra = true;
      }
      if (!isNaN(password[i])) {
        tieneDigito = true;
      }
    }
  
    if (password === "") {
      div.innerText = "La contraseña es obligatoria";
      input.className = "form-control is-invalid";
      div.className = "text-danger";
      return false;

    } else if (password.length < 3 || password.length > 6) {
      div.innerText = "La contraseña debe tener de 3 a 6 caracteres y al menos un dígito y una letra.";
      input.className = "form-control is-invalid";
      div.className = "text-danger";
      return false;
    } else if (!tieneLetra) {
      div.innerText = "La contraseña debe contener al menos una letra.";
      input.className = "form-control is-invalid";
      div.className = "text-danger";
      return false;
    } else if (!tieneDigito) {
      div.innerText = "La contraseña debe contener al menos un dígito.";
      input.className = "form-control is-invalid";
      div.className = "text-danger";
      return false;
    } else {
      div.innerText = "";
      input.className = "form-control";
      return true;
    }
  }
  
  function agregaraficiones() {
    let aficiionesInput = document.getElementById("agregarAficiones").value;
    let div = document.getElementById("err_aficiones");
    let input = document.getElementById("agregarAficiones");

    let div_lista = document.getElementById("lista")
    div_lista.innerHTML = ""
    let ul = document.createElement("ul");
    div_lista.appendChild(ul)

    if(aficiionesInput == ""){
        div.innerText = "No puedes añadir nada vacio.";
        input.className = "form-control is-invalid";
        div.className = "text-danger";

        for (let i = 0; i < list_aficiones.length; i++){
            let li = document.createElement("li")
            li.innerHTML = list_aficiones[i]
            ul.appendChild(li)
        }

        return false;
    }else{
            list_aficiones.push(aficiionesInput)
            div.innerText = "";
            input.className = "form-control";
            document.getElementById("agregarAficiones").value = "";

            for (let i = 0; i < list_aficiones.length; i++){
                let li = document.createElement("li")
                li.innerHTML = list_aficiones[i]
                ul.appendChild(li)
            }

            return true;
        
    }

  }

  function validarAficion() {
    let div = document.getElementById("err_aficiones");
    let input = document.getElementById("agregarAficiones");
    
    if(list_aficiones.length <= 1){
        div.innerText = "Debes agregar al menos dos aficiones";
        input.className = "form-control is-invalid";
        div.className = "text-danger";
        return false;
    }else{
        div.innerText = "";
        input.className = "form-control";

        return true
    }
  }

  function seleccionarComuna() {
    let selected = document.getElementById("selectComuna").value;
    let div = document.getElementById("err_select");
    let input = document.getElementById("selectComuna");
    
    if(selected == 0){
        div.innerText = "Debes seleccionar una comuna";
        input.className = "form-control is-invalid";
        div.className = "text-danger";

        return false;
    }else{
        div.innerText = "";
        input.className = "form-control";
        return true;
    }
  }

  function valdiarDireccion(){
    let direcionInput= document.getElementById("direccion").value;
    let div = document.getElementById("err_direccion");
    let input = document.getElementById("direccion");


    if(direcionInput == ""){
        div.innerText = "El campo direccion es obligatorio";
        input.className = "form-control is-invalid";
        div.className = "text-danger";
        return false;
    }else{
        div.innerText = "";
        input.className = "form-control";
        return true;
    }
  }


  function validarPagWeb(){
    let pagWeb = document.getElementById("pagWeb").value
    let div = document.getElementById("err_pagweb");
    let input = document.getElementById("pagWeb");

    let punto = pagWeb.lastIndexOf(".")
    let https = pagWeb.indexOf("https://")
    let http = pagWeb.indexOf("http://")

    if(pagWeb == ""){
        div.innerText = "";
        input.className = "form-control";
        return true;
    }
    else if(https === 0 || http === 0) {
      console.log();
       if(punto < 1) {
          div.innerText = "No es un dominio valido";
          input.className = "form-control";
          div.className = "text-danger";

          return false;
       }else{
          div.innerText = "";
          input.className = "form-control";
          return true;
       }
    } 
    else{
      div.innerText = "No es una pagina valida!";
      input.className = "form-control is-invalid";
      div.className = "text-danger";
      return false;
    }

  }

  function checkPassword() {
    let password = document.getElementById("password");
    let icon = document.getElementById("iconX");
  
    if (password.type === "password") {
      password.type = "text";
      icon.setAttribute("class", "fa fa-eye-slash");
    } else {
      password.type = "password";
      icon.setAttribute("class", "fa fa-eye");
    }
  }
  function checkPassword2() {
    let confirm_password = document.getElementById("confirmar_password")
    let icon = document.getElementById("iconC");
      
    if (confirm_password.type === "password") {
      confirm_password.type = "text";
      icon.setAttribute("class", "fa fa-eye-slash");
    } else {
      confirm_password.type = "password";
      icon.setAttribute("class", "fa fa-eye");
    }
  }