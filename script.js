// Selects all the squares
const elements = document.querySelectorAll('.element')
console.log(elements);

//Function to change background color
function changeColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    console.log(randomColor);
}

// Add event listener to each of .element
for (element of elements) {
    element.addEventListener('click', changeColor);
}