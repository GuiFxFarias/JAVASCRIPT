let lista = document.getElementById('seltab')
let num = document.getElementById('inum')
let resultado = document.getElementById('res')
let valores = []

function isNumero(n){
    if (Number(n) >= 1 && Number(n) <= 100){
        return true
    }else{
        return false
    }
}

function inLista(n, l){
    if (l.indexOf(Number(n)) != -1){
        return true
    }else{
        return false
    }
}

function clicar(){
    if (isNumero(num.value) && !inLista(num.value, valores)){
        let item = document.createElement('option')
        item.text = `O valor ${num.value} está na lista`
        lista.appendChild(item)
        valores.push(Number(num.value))
    }else {
        window.alert('Valor invalido ou ja encontrado na lista')
    }
    num.value = ''
    num.focus()
    resultado.innerHTML = ''
}

function finaliza(){
    if (valores.length == 0){
        window.alert('Adiocione valores antes de finalizar')
    }else{
        let total = valores.length
        let maior = valores[0]
        let meno = valores[0]
        let soma = 0
        let medi = 0
        for (let pos in valores){
            soma += valores[pos]
            if(valores[pos] > maior)
            maior = valores[pos]
            if (valores[pos] < meno)
            meno = valores[pos]
        }
        medi = soma/total
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo temos ${total} números cadastrados</p>`
        resultado.innerHTML += `<p>O maior número é ${maior}</p>`
        resultado.innerHTML += `<p>O menor número é ${meno}</p>`
        resultado.innerHTML += `<p>Somando todos os valores ${soma}</p>`
        resultado.innerHTML += `<p>A media dos valores digitados ${medi}</p>`

    }
}