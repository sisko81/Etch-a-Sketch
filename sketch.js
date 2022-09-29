let defaultColor = 'black'

const grid = (size) => {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    const squares = container.querySelectorAll('div');
    squares.forEach(div => div.remove())
    

    let playArea = size * size;
    for(let i = 0; i < playArea; i++) {
        const square = document.createElement('div');
        square.id = ('box');
        square.style.backgroundColor = 'white';
        container.appendChild(square)
        
        square.addEventListener('mouseover', getDefaultColor);
        
        
        
    }
    
}

grid(16);


function getSize(input) {
    grid(input)
}

function getDefaultColor() {
    if((color == 'random')) {
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`
    }
    else {
        this.style.backgroundColor = color
    }
}

function addColor(choice) {
    color = choice
}    


