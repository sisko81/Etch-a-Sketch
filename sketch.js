const grid = (size) => {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let = playArea = size * size;
    for(let i = 0; i < playArea; i++) {
        const square = document.createElement('div');
        square.id = ('box');
        square.style.backgroundColor = 'blue';
        container.appendChild(square)
    }
}

grid(7)