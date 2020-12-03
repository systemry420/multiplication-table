const input = document.querySelector('input'),
    num1El = document.getElementById('num1'),
    num2El = document.getElementById('num2');

let product = 0

const data = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

const init = () => {
    getExercise()
    
}

const getExercise = () => {
    let num1 = data[getRandom()],
        num2 = data[getRandom()];

    product = num1 * num2

    num1El.innerText = num1
    num2El.innerText = num2
}

const getRandom = () => {
    return Math.floor(Math.random() * data.length)
}

const checkAnswer = (e) => {
    const answer = e.target.value
    if(answer == product) {
        console.log('yes')
    }
    else
        console.log('no')
}

input.addEventListener('keyup', checkAnswer)

init()