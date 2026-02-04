function makeBlack(event) {
    event.target.style.backgroundColor = 'black';
}

function randomColor(event) {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
}

function makeProgDark(event) {
    let opac = parseFloat(event.target.style.opacity) || 0;
    opac += 0.1;

    if (opac > 1) opac = 1;

    event.target.style.opacity = opac;
}

function createBoxes(num_box) {
    for (let i = 0; i < num_box**2; i++) {
    let box = document.createElement("div");
    box.style.display = 'flex';
    box.classList.add("gridBox");
    box.style.width = `${650 / num_box}px`;
    box.style.height = `${650 / num_box}px`;


    box.addEventListener('mouseenter', makeBlack)
    container.appendChild(box);
}
}

function removeBoxes() {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const container = document.querySelector(".container");
let starting_box_num = 32;

createBoxes(starting_box_num)

const numSquaresButton = document.querySelector(".numSquaresButton")

numSquaresButton.addEventListener('click', () => {
    let numSquares = prompt("How many squares on each side?")
    starting_box_num = numSquares;

    removeBoxes();
    createBoxes(numSquares);

})

const randomColorButton = document.querySelector(".randomColorButton");
const progDarkButton = document.querySelector(".progDarkButton");

randomColorButton.addEventListener('click', () => {
    removeBoxes();
    createBoxes(starting_box_num);
    const boxes = [...container.children];
    boxes.forEach((box) => {
        box.removeEventListener('mouseenter', makeBlack)
    })

    boxes.forEach((box) => {
        box.addEventListener('mouseenter', randomColor);
    })

})

progDarkButton.addEventListener('click', () => {
    removeBoxes();
    createBoxes(starting_box_num);

    const boxes = [...container.children];

    boxes.forEach((box) => {
        box.classList.add("opacityOn");
        box.addEventListener('mouseenter', makeProgDark);
    })



})

