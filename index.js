const button = document.querySelector('.button-change');
const color = document.querySelector('.color');
const body = document.querySelector('body');
const message = document.querySelector(".message");




const arrayOfNumbersLetters = [0,1,2,3,4,5,6,7,8,9, 'A', 'B', 'C', 'D', 'E', 'F']


button.addEventListener('click', () => {
    message.textContent = 'Color is changing...';
    setTimeout(()=> {
        const newColor = changeTheColor();
        body.style.backgroundColor = newColor;
        color.textContent = newColor;
        message.textContent = 'Color changed!';
    }, 2000)
})

function changeTheColor() {
    let generatedColor = '#';
    for (let i = 0; i < 6; i++) {
        let randomIndex = Math.floor(Math.random() * arrayOfNumbersLetters.length);
        generatedColor += arrayOfNumbersLetters[randomIndex];
    }
    return generatedColor
}