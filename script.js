// declaring sketchbox and reset button
const sketchBox = document.querySelector('#sketchbox');
const resetButton = document.querySelector('#reset_button');

// setting up sketch box
function makeGrid(number) {
    sketchBox.style.gridTemplateRows = 'repeat(' + number + ', 1fr)';
    sketchBox.style.gridTemplateColumns = 'repeat(' + number + ', 1fr)';

    for (let i = 0; i < number**2; ++i) {
        let gridTile = document.createElement('div');
        gridTile.classList.add('tile');
        sketchBox.appendChild(gridTile);
    }
}
// change color of grid tile to black when mouse goes over it
sketchBox.addEventListener("mouseover", function(event) {
    event.target.style.backgroundColor = "black";
})

// adds click to resetbox
resetButton.addEventListener("click", resetBox);

// display prompt and reset box
function resetBox(e) {
    sketchBox.innerHTML = "";
    getNumber = prompt("Enter number of columns and rows as a whole number");
    makeGrid(getNumber);
}

makeGrid(16);








