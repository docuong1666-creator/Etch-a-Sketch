const container = document.querySelector('#container');

function createGrid(squareNum) {  
    for (let i = 0; i < squareNum; i++) {
        const div = document.createElement('div');
        div.className = "line-div";
        container.appendChild(div);

        for ( let j = 0; j < squareNum; j++) {
            const gridDiv = document.createElement('div');
            gridDiv.className = "grid-div";
            div.appendChild(gridDiv);
        }
}
}

function paintGrid() { 
    const gridDiv = document.querySelectorAll('.grid-div');

    gridDiv.forEach( grid => grid.addEventListener('mouseenter', function() {
        grid.style.backgroundColor = "gray";
}))}

createGrid(16);

paintGrid();

const button = document.createElement('button');
button.textContent = "Change Grid";
document.body.insertBefore(button, container);

button.addEventListener('click', function() {
    const squareNum = +prompt('Number of squares per side for the new grid ?', '');
    if ( squareNum > 100 || isNaN(squareNum)) {
        return alert('ERROR!'); 
    } else if ( squareNum <= 100 ) {
        container.textContent ="";
        createGrid(squareNum);
        paintGrid();
    }
})