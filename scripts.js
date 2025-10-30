let container = document.querySelector(".container")

for (let i = 0; i < 16; i++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for (let j = 0; j < 16; j++) {
        let div = document.createElement("div");
        div.classList.add("box");

        div.addEventListener("mouseover", () => {
            div.style.backgroundColor = "black";
        });
        row.appendChild(div);
    }
    container.appendChild(row);
}