// Set up page with a grid of initial size
const INITIAL_SIZE = 16;
createGrid(INITIAL_SIZE);

// Function to create a 16x16 grid of divs 
function createGrid(size) {

    // Store DOM selector for container div
    const container = document.querySelector("#container");

    // Create the grid rows by creating div elements 
    // and appending directly to container div
    for (let row = 0; row < size; row++) {
        container.appendChild(document.createElement("div"));
    }

    // Store DOM selectors for all row divs
    const containerRow = document.querySelectorAll("#container > div");

    // Create the grid squares by creating div elements within each row div 
    // (nested) and appending directly to row divs
    for (let row = 0; row < size; row++) {
        for (let col = 0; col < size; col++) {
            containerRow[row].appendChild(document.createElement("div"));
        }
    }

}


// Select all squares of the grid
const squares = document.querySelectorAll("#container > div > div");

// Helper function that applies CSS class to a given square 
const handleMouseover = function () {
    // `this` references the event's target element - i.e. the square 
    this.classList.add("colored");
}

// Iterate over the nodeList of squares to add event listener for hover
squares.forEach((square) => {
    square.addEventListener("mouseover", handleMouseover);
})


