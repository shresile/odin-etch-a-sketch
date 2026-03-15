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
            e.target.style.backgroundColor =getRandomColor(); 
    });
});

const renewButton = document.querySelector("#renewButton");
renewButton.addEventListener("click",()=>{
    let numPerSide = Number(prompt
        ("Enter a number not greater than 100 for squares per side:"));
    if (numPerSide == 0 || isNaN(numPerSide)){
        alert(`error:${numPerSide}`);
    } else if (numPerSide > 100) {
        alert("error: number is greater than 100!")
    }else {
        alert(`${numPerSide}*${numPerSide} grid is finished.`);
        //remove all children of container without reference because
        //first grid and new grid have different class name
        //so renew button still removes children after the first click
        while (container.firstChild) {
            container.removeChild(container.lastChild);
        }
        //generate new grid
        for (i = 0; i < numPerSide*numPerSide; i++){
            let newSquare = document.createElement("div");
            newSquare.classList.toggle("newSquare");
            //calculate new width and height
            let newWidthAndHeight = 960/numPerSide;
            newSquare.style.width = `${newWidthAndHeight}px`;
            newSquare.style.height = `${newWidthAndHeight}px`;
            container.appendChild(newSquare);        
        }
        //get nodeList of new squares
        //DON'T FORGET query...ALL!!
        let newSquares = document.querySelectorAll(".newSquare");
        
        //add event listeners, when a new square is hovered(mouseover)
        newSquares.forEach(square => {
            square.addEventListener("mouseover",(e) => {
            e.target.style.backgroundColor = getRandomColor();            
            });
        });


        
    }

    
    

});

function getRandomColor (){
    let R = Math.floor(Math.random() * 256);
    let G = Math.floor(Math.random() * 256);
    let B = Math.floor(Math.random() * 256);
    return "rgb(" + R + "," + G + "," + B + ")";  
}