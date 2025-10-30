let container = document.querySelector(".container");
let button = document.querySelector(".btn");
let size = 16;

function createGrid(size){
    container.innerHTML=""; //clear old grid
    const boxSize = 640/size;
    for (let i = 0; i < size; i++) {
        let row = document.createElement("div");
        row.classList.add("row");
        for (let j = 0; j < size; j++) {
            let div = document.createElement("div");
            div.classList.add("box");
            div.style.height=`${boxSize}px`;
            div.style.width=`${boxSize}px`;
            div.addEventListener("mouseover", () => {
                div.style.backgroundColor = "black";
            });
            row.appendChild(div);
        }
        container.appendChild(row);
    }
}

button.addEventListener("click", () => {
    let newSize = parseInt(prompt("Enter a whole number (1-100) to resize the grid of squares"));
    if(newSize > 0 && newSize <= 100 && Number.isInteger(newSize)){
        size = newSize;
        createGrid(newSize);
    } else {
        alert(`${newSize} is not a valid integer (1-100). Please enter a valid integer.`)
    }
});

createGrid(size);