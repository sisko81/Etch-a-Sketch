let color = 'black'

const grid = (size) => {
    const container = document.querySelector('#container');
    container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    container.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    

    let playArea = size * size;
    for(let i = 0; i < playArea; i++) {
        const square = document.createElement('div');
        square.id = ('box');
        square.style.backgroundColor = 'white';
        container.appendChild(square)
        
        square.addEventListener('mouseover', blackColor)
        
    }
    
}

grid(16);


function blackColor() {
    this.style.backgroundColor = color
}

function greyColor(choice) {
    
}    