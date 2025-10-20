const text = document.getElementById("text");
const btnToggle = document.getElementById("btnToggle");

btnToggle.addEventListener("click", () => {
    if (text.style.textDecoration === "underline") {
        text.style.textDecoration = "none";
    } else {
        text.style.textDecoration = "underlined";
    }
})