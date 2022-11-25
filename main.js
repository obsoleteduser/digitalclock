const display = document.querySelector('.display')
const switcher = document.querySelector('.switch')

const state = { mode: 'clock' }

function showTime() {
    return `${new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}`
}
function showDate() {
    return `${new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getUTCFullYear()}`
}

const render = (data, element) => {
    element.innerHTML = data
}

const setMode = () => {
    state.mode === 'clock' ? render(showTime(), display) : render(showDate(), display)
}

switcher.addEventListener('click', () => {
    state.mode = state.mode === 'date' ? 'clock' : 'date'
    display.classList.toggle('animation')
})


setInterval(() => { setMode() }, 100)