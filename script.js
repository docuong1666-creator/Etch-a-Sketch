const container = document.querySelector('#container');

for (let i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.className = "line-div";
    container.appendChild(div);

    for ( let j = 0; j < 16; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = "grid-div";
        div.appendChild(gridDiv);
    }
}

const button = document.createElement('button');
button.textContent = "Number of squares ? "
document.body.insertBefore(button, container);

button.addEventListener('click', function() {
    const squareNum = +prompt('Number of squares per side for the new grid ?', '');
    if ( squareNum > 100) {
        return alert('Too Many'); 
    } else if ( squareNum <= 100 ) {
    container.textContent ="";

    for (let i = 0; i < squareNum; i++) {
    const div = document.createElement('div');
    div.className = "line-div";
    container.appendChild(div);

    for ( let j = 0; j < squareNum; j++) {
        const gridDiv = document.createElement('div');
        gridDiv.className = "grid-div";
        div.appendChild(gridDiv);
    }
    
}}
})