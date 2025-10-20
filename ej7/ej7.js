const frame = document.getElementById("frame")
const btnCreate = document.getElementById("btnCreate");

let boxCreated = false;

btnCreate.addEventListener("click", () => {
    if (!boxCreated) {
        const box = document.createElement("div");
        box.className = "box";
        frame.appendChild(box);
        boxCreated = true;
        btnCreate.disabled = true;
    }
})