function createGrid(size) {
    const container = document.getElementById("grid-container");
    container.innerHTML = ""; // Clear existing grid
    const squareSize = 960 / size;
    
    for (let i = 0; i < size * size; i++) {
        let square = document.createElement("div");
        square.classList.add("grid-square");
        square.style.width = `${squareSize}px`;
        square.style.height = `${squareSize}px`;
        square.style.opacity = "0"; // Start with opacity 0
        square.addEventListener("mouseover", () => darkenSquare(square));
        container.appendChild(square);
    }
}

function darkenSquare(square) {
    let opacity = parseFloat(square.style.opacity);
    if (opacity < 1) {
        opacity += 0.1;
        square.style.opacity = opacity;
        square.style.backgroundColor = randomColor();
    }
}

function randomColor() {
    let r = Math.floor(Math.random() * 256);
    let g = Math.floor(Math.random() * 256);
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

function changeGridSize() {
    let size = parseInt(prompt("Enter new grid size (max 100):"));
    if (size > 0 && size <= 100) {
        createGrid(size);
    } else {
        alert("Invalid input! Please enter a number between 1 and 100.");
    }
}

createGrid(16);