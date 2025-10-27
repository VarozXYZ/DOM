const frame = document.getElementById("frame");
const btnDelete = document.getElementById("btnDelete");
const btnCreate = document.getElementById("btnCreate");

btnCreate.addEventListener("click", function() {
    const box = document.createElement("div");
    box.className = "box";
    frame.appendChild(box);
})

btnDelete.addEventListener("click", () => {
    const boxes = frame.querySelectorAll(".box");
    if (boxes.length > 0) {
        frame.removeChild(boxes[boxes.length-1])
    }
})
