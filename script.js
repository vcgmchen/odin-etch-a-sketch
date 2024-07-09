// Function to create a 16x16 grid of divs 
function createGrid() {
    
    // Store DOM selector for container div
    const container = document.querySelector("#container");
    const SIZE = 16;

    // Create the grid rows by creating div elements 
    // and appending directly to container div
    for (let row = 0; row < SIZE; row++) {
        container.appendChild(document.createElement("div"));
    }

    // Store DOM selectors for all row divs
    const containerRow = document.querySelectorAll("#container > div");

    // Create the grid squares by creating div elements within each row div 
    // (nested) and appending directly to row divs
    for (let row = 0; row < SIZE; row++) {
        for (let col = 0; col < SIZE; col++) {
            containerRow[row].appendChild(document.createElement("div"));
        }
    }
}

// Run the function
createGrid();