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

    // Apply hover effect once grid is set up
    applyHover();
}

// Function to make each grid square respond to mouse hover
function applyHover() {

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

}

// Function to remove existing grid 
function clearGrid() {

    // Select the parent node
    const container = document.querySelector("#container");
    // Select the child nodes 
    const rows = document.querySelectorAll("#container > div");

    // Iteratively remove each child node
    for (let i = 0; i < rows.length; i++) {
        container.removeChild(rows[i]);
    }

}

// Select button element
const button = document.querySelector("button");

// Add callback function to take in a number from 1-100; store the user input number into a variable
const handleClick = function () {

    // Get size from user via window prompt
    let size = prompt("Set grid size (1-100)");

    // Validate user input
    if (size > 100) {
        alert("Error: maximum size 100");
    } else if (size < 1) {
        alert("Error: size must be positive");
    } else {
        // Remove the existing grid
        clearGrid();
        // Create new grid with user-given size 
        createGrid(size);
    }

}

// Event listener for click event 
button.addEventListener("click", handleClick);

