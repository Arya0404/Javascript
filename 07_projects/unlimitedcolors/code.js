
let changeColor
const color_change = function(){
    let element = document.body
    // let colors = ["red", "blue", "green", "yellow", "orange", "brown"]; // Array of colors to cycle through
    // let randomIndex = Math.floor(Math.random() * colors.length);
    // element.style.backgroundColor = colors[randomIndex];
    let randomColor = `rgb(${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)}, 
                           ${Math.floor(Math.random() * 256)})`;
    element.style.backgroundColor = randomColor
    // const randomNumber = Math.floor(Math.random() * 256)
    // console.log(randomNumber)
}

document.querySelector("#start").addEventListener("click", function(){
    changeColor = setInterval(color_change, 100)
}, false)
document.querySelector("#stop").addEventListener("click", function(){
    clearInterval(changeColor)
    changeColor= null
}, false)


