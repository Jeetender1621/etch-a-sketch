const mainContainer = document.querySelector('.main-container');
const userChoiceGrid = document.querySelector('.user-choice');
let isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints;
gridCreation(); //default 16x16 Grid

function gridCreation(userInput =16) {
    mainContainer.innerHTML = '';
    for (let divID = 1; divID <= (userInput ** 2); divID++) {
        let divCreate = document.createElement('div');
        divCreate.classList.add('div-grid');
        divCreate.style.width = `calc(100% /${userInput})`; /* Each item takes up 1/16th of the container width */
        divCreate.style.height = `calc(100% /${userInput})`; /* Each item takes up 1/16th of the container height */
        divCreate.style.border = '1px solid rgba(0, 0, 0, 0.281)';
        mainContainer.appendChild(divCreate);

        
    }
    addHoverEffect(); // Add hover effect after creating the grid
}

//Random Color Generator for divID
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}


function addHoverEffect() {
    const gridDivs = document.querySelectorAll('.div-grid');

    gridDivs.forEach(div => {
        if (isTouchDevice) {
            div.addEventListener('touchmove', () => {
                div.style.backgroundColor = getRandomColor(); // Change the background color on touchstart
            });
        } else {
            div.addEventListener('mouseenter', () => {
                div.style.backgroundColor = getRandomColor(); // Change the background color on hover
            });
        }
    });
}


userChoiceGrid.addEventListener('click',() =>{
    let userInput = prompt('Enter a value between 1 and 100');
    if (userInput === null || userInput.trim() === '' || isNaN(userInput)) {
        alert('Invalid input. Please enter a valid number.');
    } else {
        userInput = parseInt(userInput);
        if (userInput >= 1 && userInput <= 100) {
            gridCreation(userInput);
        } else {
            alert('Value must be between 1 and 100');
        }
    }
})