let vetorinput = Array.from(document.querySelectorAll('input'))
let verificarcampo = Array.from(document.querySelectorAll('.erroNome'))
let verificargeral = document.getElementById('errogeral')
console.log(vetorinput)

function verificar(){

for (let i=0; i<vetorinput.length; i++) {
    if (vetorinput[i].value.trim() === ""){
    verificarcampo[i].style.visibility = "visible"; 
    verificargeral.style.visibility = "visible";
    }
    else {
        verificargeral.innerHTML = "Sucesso";
        verificargeral.style.color = "#0F7B0F";
        verificargeral.style.visibility = "visible";
    }
}
}