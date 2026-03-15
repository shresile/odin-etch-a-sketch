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

const renewButton = document.querySelector("#renewButton");
renewButton.addEventListener("click",()=>{
    let numPerSide = Number(prompt
        ("Enter a number not greater than 100 for squares per side:"));
    if (numPerSide == 0 || isNaN(numPerSide)){
        console.log(`error:${numPerSide}`);
    } else if (numPerSide > 100) {
        console.log("error: number is greater than 100!")
    }else {
        console.log(numPerSide);
        squares.forEach(square => {
            container.removeChild(square);
        })
        
    }

    
    

});