let container = document.querySelector(".container");

for (i = 0; i < 256; i++){
    let square = document.createElement("div");
    square.classList.toggle("square");
    container.appendChild(square);
    }

//get nodeList of squares
let squares = document.querySelectorAll(".square");
//add event listeners, when a square is hovered(mouseover)
squares.forEach(square => {
    square.addEventListener("mouseover",(e) => {
        e.target.classList.add("hover");
    });
});