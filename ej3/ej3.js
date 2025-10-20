const text = document.getElementById("text");
const btnUnderline = document.getElementById("btnUnderline");

btnUnderline.addEventListener("click", () => {
    text.style.textDecoration = "underline";
})