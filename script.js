
const form = document.querySelector(".formulario-fale-conosco")
const mascaraFormulario= document.querySelector(".mascara-formulario")


function mostrarForm(){
    form.style.left = "50%"
    form.style.transform = "translateX(-50%)"
    mascaraFormulario.style.visibility = "visible"
}

function esconderMascara(){
    form.style.left="-300px"
    form.style.transform ="0"
    mascaraFormulario.style.visibility="hidden"
}


 






