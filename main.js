const display = document.querySelector('.display')
const switcher = document.querySelector('.switch')

const state = { mode: 'clock' }

function showTime() {
    return `${new Date().getHours() + ":" + new Date().getMinutes() + ":" + new Date().getSeconds()}`
}
function showDate() {
    return `${new Date().getDay() + "/" + new Date().getMonth() + "/" + new Date().getUTCFullYear()}`
}

const render = (data) => {
    display.innerHTML = data
}

const setMode = () => {
    state.mode === 'clock' ? render(showTime()) : render(showDate())
}

switcher.addEventListener('click', () => {
    state.mode = state.mode === 'date' ? 'clock' : 'date'
    console.log(state.mode)
})


setInterval(() => { setMode() }, 100)