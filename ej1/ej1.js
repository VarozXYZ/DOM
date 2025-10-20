const text = document.getElementById("text");
const btnModify = document.getElementById("btnModify")

btnModify.addEventListener("click", function () {
    text.textContent = 'Esto es el texto cambiado.'
})