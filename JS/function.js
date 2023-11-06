
const form = document.getElementById("form")
const campos = document.querySelectorAll(".required")
const spans = document.querySelectorAll(".span-required")
const emailRegex = /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+\.([a-z]+)?$/i;


function setError(index){
    campos[index].style.border = "3px solid #e63636 !important"
    spans[index].style.display = "block"
}
function removeError(index){
    campos[index].style.border = ""
    spans[index].style.display = "none"
}

function nomeValidar(){
    if(campos[0].value.length < 3){
          setError(0)
    }else{
    console.log("Validado o Nome")
}
}