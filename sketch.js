

const container = document.querySelector('#container');
container.style.gridTemplateColumns = 'repeat(16, 1fr)';
container.style.gridTemplateRows = 'repeat(16, 1fr)';
//container.style.border = '1px solid blue'

for(let i = 0; i < 256; i++) {
    const square = document.createElement('div');
    square.style.backgroundColor = 'blue'

    container.insertAdjacentElement('beforeend', square);

}