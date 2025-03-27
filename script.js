const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTimer = document.querySelector('#timer')
const banner = document.querySelector('.app__img')
const apptitle = document.querySelector('.app__title')
const startStopBt = document.querySelector('.app__card-primary-button')
const StartStopBtFoco = document.querySelector('.app__card-button--foco')
const StartStopBtCurto = document.querySelector('.app__card-button--curto')
const StartStopBtLongo = document.querySelector('.app__card-button--longo')


focoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'foco')
})

curtoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-curto')
})

longoBt.addEventListener('click', () => {
    html.setAttribute('data-contexto', 'descanso-longo')
})