const frame = document.getElementById("frame");
const counter = document.getElementById("counter");
const btnCreate = document.getElementById("btnCreate");

let boxesCreated = 0;
let maxBoxes = 5;

btnCreate.addEventListener("click", function() {
    if (boxesCreated < maxBoxes) {
        const box = document.createElement("div");
        box.className = "box";
        frame.appendChild(box);
        boxesCreated++;
        counter.textContent = `Cajas creadas: ${boxesCreated}/${maxBoxes}`
    }
    if (boxesCreated === maxBoxes) {
        btnCreate.disabled = true;
    }
})