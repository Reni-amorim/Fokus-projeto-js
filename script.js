const timerFoco = 1500;
const timerCurto = 300;
const timerLongo = 900;

const html = document.querySelector('html')
const focoBt = document.querySelector('.app__card-button--foco')
const curtoBt = document.querySelector('.app__card-button--curto')
const longoBt = document.querySelector('.app__card-button--longo')
const displayTimer = document.querySelector('#timer')
const banner = document.querySelector('.app__image')
const apptitle = document.querySelector('.app__title')
const startStopBt = document.querySelector('.app__card-primary-button')
const StartStopBtFoco = document.querySelector('.app__card-button--foco')
const StartStopBtCurto = document.querySelector('.app__card-button--curto')
const StartStopBtLongo = document.querySelector('.app__card-button--longo')
const btn = document.querySelectorAll('.app__card-button')
const songFoco = document.querySelector('#alternar-musica')
const song = new Audio('/sons/luna-rise-part-one.mp3')
song.loop = true



songFoco.addEventListener('change', () => {
    if(song.paused) {
        song.play()
    } else {
        song.pause()
    }
})

focoBt.addEventListener('click', () => {
    alterarContexto('foco')
    focoBt.classList.add('active')
})

curtoBt.addEventListener('click', () => {
    alterarContexto('descanso-curto')
    curtoBt.classList.add('active')
})

longoBt.addEventListener('click', () => {
    alterarContexto('descanso-longo')
    longoBt.classList.add('active')
})

function alterarContexto(contexto) {
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