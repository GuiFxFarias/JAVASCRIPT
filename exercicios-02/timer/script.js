let sec = 00
let watch = document.getElementById('time')
let min = 00
let interval
let hora = 0

function twodigits(dgito){
    if (dgito < 10){ // Colocando 0 com o digito, parametro do tempo selecionado
        return(`0${dgito}`)
    }else{
        return dgito
    }
}

function go(){
    counter()
    interval = setInterval(counter,1000) // Iniciando cronometro - setInterval
}
function pause(){
    clearInterval(interval) // Pausando o cronometro - clearInterval
}
function stop(){
    clearInterval(interval) // Pausando o cronometro - clearInterval
    sec = 0 // Resetando o cronometro
    min = 0 // Resetando o cronometro
    watch.innerHTML = `${twodigits(hora)}:${twodigits(min)}:${twodigits(sec)}`
}

function counter(){
    sec += 1
    if (sec == 60){
        min += 1
        sec = 0
    }
    watch.innerHTML = `${twodigits(hora)}:${twodigits(min)}:${twodigits(sec)}`
    if (min == 60){
        hora +=1
        min=0
    }
    watch.innerHTML = `${twodigits(hora)}:${twodigits(min)}:${twodigits(sec)}`
}