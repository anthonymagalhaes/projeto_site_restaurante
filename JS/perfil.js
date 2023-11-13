let nome = document.getElementById("nome")
let form = document.getElementById("form-pagamento")
let form2 = document.getElementById("form-container")
let form3 = document.getElementById("form-avancadas")
let antigo = nome.innerText

function MudarForm(){

    if(form.style.display === "none"){
        form.style.display = "block"
        nome.style.marginTop = "150px"
    }else{
        form.style.display ="none"
        nome.style.marginTop = "20%"
    }
}

function MudarForm2(){

    if(form2.style.display === "none"){
        form2.style.display = "block"
        nome.style.marginTop = "400px"
    }else{
        form2.style.display ="none"
        nome.style.marginTop = "20%"
    }
}

function MudarForm3(){

    if(form3.style.display === "none"){
        form3.style.display = "block"
        nome.style.marginTop = "300px"
    }else{
        form3.style.display ="none"
        nome.style.marginTop = "20%"
    }
}
function SalvarNome(){
    let username = document.getElementById("username").value
    nome.innerText = `${username}`
}
function Voltar(){
    nome.innerText = `${antigo}`
}
function Alert(){
    window.alert("Você ainda não efetuou nenhum pedido")
}