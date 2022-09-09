function contar(){
    let ini = document.getElementById('inicio')
    let fim = document.getElementById('fim')
    let passo = document.getElementById('passo')
    let resultado = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ){
        resultado.innerHTML = 'Impossível contar'
        // window.alert('Verifique os dados novamente')
    } else{
        resultado.innerHTML = 'contando: <br>'
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0){
            window.alert('Passo invalido, considerando passo 1')
            p = 1
        }

        if (i < f){
            // Contagem crescente
            for(let c = i; c <= f; c+= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        }else{
            // Contagem regressiva
            for(let c = i; c >= f; c -= p){
                resultado.innerHTML += `${c} \u{1F449}`
            }
        } 
        resultado.innerHTML += `\u{1F3C1}`
    }
}