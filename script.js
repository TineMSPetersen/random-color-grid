// Selects all elements with the class .element
const elements = document.querySelectorAll('.element');

// Creates the function colorChange()
function colorChange() {
    
    // creates a function that will return a randomised hex code
    function getColor() {
    let randomColor = Math.floor(Math.random()*16777215).toString(16);
    return randomColor;
    }

    // Applies the styling to the clicked element
    event.target.style.backgroundColor = '#' + getColor();
};

// Applies eventlistener to each of the .element elements and tells it to execute "colorChange() when clicked
for (element of elements) {
    element.addEventListener('click', colorChange);
}