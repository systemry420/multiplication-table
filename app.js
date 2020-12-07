const input = document.querySelector('input'),
next = document.querySelector('#next'),
cover = document.querySelector('.cover'),
app = document.querySelector('.app'),
intro = document.querySelector('.intro'),
timer = document.querySelector('#timer'),
start = document.querySelector('#start'),
display = document.querySelector('.display'),
num1El = document.getElementById('num1'),
num2El = document.getElementById('num2');

let product = 0, score = 0

const data = [2, 3, 4, 5, 6, 7, 8, 9, 10]

const init = () => {
    startGame()
}

const startGame = () => {
    startTimer()
    updateStyle(app, 'opacity', 1)
    updateStyle(cover, 'display', 'none')
    input.disabled = false
    getExercise()
}

const gameOver = () => {
    intro.innerHTML = `<p>You scored ${score} in 30 seconds!</p>`
    score = 0
    input.value = ''
    input.disabled = true
    updateStyle(app, 'opacity', 1)
    num1.innerText = '0'
    num2.innerText = '0'
    updateStyle(cover, 'display', 'flex')
}

const startTimer = () => {
    let time = 30
    let interval = setInterval(() => {
        if(time == 0) {
            clearInterval(interval)
            gameOver()
        }
        timer.innerText = time--
    }, 1000);
}

const getExercise = () => {
    let num1 = data[getRandom()],
        num2 = data[getRandom()];
    num1 = num1 == undefined? 0 : num1
    num2 = num2 == undefined? 1 : num2

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
        updateStyle(input, 'background-color', '#72ff72')
        next.disabled = false
        next.classList.remove('disabled')
    }
    else{
        updateStyle(input, 'background-color', '#ff7d7d')
        next.disabled = true
    }
}

const updateStyle = (el, property, value) => {
    el.style[property] = value
}

input.addEventListener('keyup', checkAnswer)
next.addEventListener('click', (e) => {
    e.preventDefault()
    score++
    updateStyle(input, 'background-color', 'white')
    display.classList.remove('bounce')
    input.value = ''
    next.disabled = true
    next.classList.add('disabled')
    getExercise()
})

start.addEventListener('click', init)