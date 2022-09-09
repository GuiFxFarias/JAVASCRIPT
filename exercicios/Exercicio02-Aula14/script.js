/*
function gerar(){
    let n = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (n.value.length == 0){
        window.alert('Digite um número')
    }else{
        n = Number(n.value)
        let c = 1
        tab.innerHTML = '' // Apagar a tabela

        while(c <= 10){
            let item = document.createElement('option') // Adicionar um option para fzr a tabuada entrar na tabela
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item) // adicioando o item na tabela
            c = c + 1
        }
    }
}
*/

function gerar (){
    let n = document.getElementById('num')
    let tab = document.getElementById('seltab')

    if (n.value.length == 0){
        window.alert('Digite um número')
    }else{
        n = Number(n.value)
        tab.innerHTML = ''

        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }

}
