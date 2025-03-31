
const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')

const banner = document.querySelector('.app__image')
const apptitle = document.querySelector('.app__title')

const startStopBtFoco = document.querySelector('.app__card-button--foco')
const startStopBtCurto = document.querySelector('.app__card-button--curto')
const startStopBtLongo = document.querySelector('.app__card-button--longo')
const btn = document.querySelectorAll('.app__card-button')
const songFoco = document.querySelector('#alternar-musica')
const song = new Audio('/sons/luna-rise-part-one.mp3')
song.loop = true

let timer = 1500
const startStopBt = document.querySelector('#start-pause')
let intervaloId = null

const songBeep = new Audio('/sons/beep.mp3')
const songPlay = new Audio('/sons/play.wav')
const songPause = new Audio('/sons/pause.mp3')

const startStopBtText = document.querySelector('#start-pause span')
const startStopImg = document.querySelector('.app__card-primary-butto-icon')

const displayTimer = document.querySelector('#timer')

songFoco.addEventListener('change', () => {
    if(song.paused) {
        song.play()
    } else {
        song.pause()
    }
})

focoBt.addEventListener('click', () => {
    timer = 1500
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    timer = 300
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    timer = 900
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
    displayTime()
    btn.forEach(function (contexto){
        contexto.classList.remove('active')
    })
    html.setAttribute('data-contexto', contexto)
    banner.setAttribute('src', `/imagens/${contexto}.png`)
    switch (contexto) {
        case 'foco':
            apptitle.innerHTML = `
            Otimize sua produtividade,<br>
            <strong class="app__title-strong">mergulhe no que importa.</strong>
            `
            break;
        case 'descanso-curto':
            apptitle.innerHTML = `
            Que tal dar uma respirada? <strong class="app__title-strong">Faça uma pausa curta!</strong>
            `
            break;

        case 'descanso-longo':
            apptitle.innerHTML = `
            Hora de voltar à superfície.<strong class="app__title-strong"> Faça uma pausa longa.</strong>
            `
        default:
            break;           
    }
}

const contagemRegressiva = () => {
        if (timer <= 0) {
            songBeep.play()
            alert('O tempo acabou!')
            zerar()
            return
        }
    timer -= 1
    displayTime()
    // console.log('Temporizador: ' + timer)
}

startStopBt.addEventListener('click', iniciarOuPausar)

function iniciarOuPausar() {
    if(intervaloId){
        songPause.play()
        startStopImg.setAttribute('src', '/imagens/play_arrow.png')
        zerar()
        return
    }
    songPlay.play()
    startStopImg.setAttribute('src', '/imagens/pause.png')
    intervaloId = setInterval(contagemRegressiva, 1000)
    startStopBtText.textContent = 'Pausar'
}

function zerar() {
    clearInterval(intervaloId)
    startStopBtText.textContent = 'Começar'
    intervaloId = null
}

function displayTime() {
    const tempo = new Date(timer * 1000)
    const modifiedTimer = tempo.toLocaleTimeString('pt-BR', {minute: '2-digit', second: '2-digit'})
    displayTimer.innerHTML = `${modifiedTimer}`
}

displayTime()