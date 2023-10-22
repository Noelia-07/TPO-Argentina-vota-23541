const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
    abrir.classList.remove("abrir-menu");
})


cerrar.addEventListener("click",() => {
    nav.classList.remove("visible");
    abrir.classList.add("abrir-menu");
})

//Validacion del formulario
function validarFormulario() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("mail").value;
    var consulta = document.getElementById("message").value;
    var mensajeValidacion = document.getElementById("mensajeValidacion");

    if (nombre === "" || email === "" || consulta === "") {
        mensajeValidacion.textContent = "Por favor complete todos los campos.";
        return false; 
    } else {
        mensajeValidacion.textContent = "Su mensaje se envió con éxito.";
        return true;
    }
    
}
