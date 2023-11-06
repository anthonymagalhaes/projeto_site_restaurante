let username = document.getElementById("username")
let txtemail = document.getElementById("textEmail")
let senha = document.getElementById("password")
let txtsenha = document.querySelector(".span-required")

function ValidaçãoSenha(){
     if (senha.ariaValueMax.length < 8){
        txtsenha.style.display = "block" 
     }else{
        txtsenha.style.display = "none"
     }
}