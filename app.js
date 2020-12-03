const input = document.querySelector('input'),
button = document.querySelector('button'),
display = document.querySelector('.display'),
num1El = document.getElementById('num1'),
num2El = document.getElementById('num2');

let product = 0

const data = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const init = () => {
    getExercise()
}

const getExercise = () => {
    let num1 = data[getRandom()],
        num2 = data[getRandom()];
    num1 = num1 == undefined? 0 : num1
    num2 = num2 == undefined? 0 : num2

    product = num1 * num2

    num1El.innerText = num1
    num2El.innerText = num2
    display.classList.add('bounce')
    input.focus()
}

const getRandom = () => {
    return Math.round(Math.random() * data.length)
}

const checkAnswer = (e) => {
    const answer = e.target.value
    if(answer == product) {
        input.style['background-color'] = '#43de43'
        button.disabled = false
        button.classList.remove('disabled')
    }
    else{
        input.style['background-color'] = '#ff5050'
        button.disabled = true
    }
}

input.addEventListener('keyup', checkAnswer)
button.addEventListener('click', (e) => {
    e.preventDefault()
    input.style['background-color'] = 'white'
    display.classList.remove('bounce')
    input.value = ''
    button.disabled = true
    button.classList.add('disabled')
    getExercise()
})
init()