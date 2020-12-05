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
    app.style.opacity = 1
    cover.style.display = 'none'
    input.disabled = false
    getExercise()
}

const gameOver = () => {
    intro.innerHTML = `<p>You scored ${score} in 30 seconds!</p>`
    score = 0
    input.value = ''
    input.disabled = true
    app.style.opacity = 0.7
    // display.innerHTML =`<span id="num1">0</span>
    //                     <span id="mul">x</span>
    //                     <span id="num2">0</span>`
    cover.style.display = 'flex'
    app.style.opacity = 0.3
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
        input.style['background-color'] = '#72ff72'
        next.disabled = false
        next.classList.remove('disabled')
    }
    else{
        input.style['background-color'] = '#ff7d7d'
        next.disabled = true
    }
}

input.addEventListener('keyup', checkAnswer)
next.addEventListener('click', (e) => {
    e.preventDefault()
    score++
    input.style['background-color'] = 'white'
    display.classList.remove('bounce')
    input.value = ''
    next.disabled = true
    next.classList.add('disabled')
    getExercise()
})

start.addEventListener('click', init)