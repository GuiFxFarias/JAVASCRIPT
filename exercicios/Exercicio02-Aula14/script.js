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
            tab.appendChild(item) // adicioando na tabela
            c = c + 1
        }
    }
}


/*
function gerar(){
    let n = document.getElementById('num')
    let tab = document.getElementById('seltab')



    if (n.value == 0 || n.value.length == 0){
        window.alert('Verifique os dados novamente')
    }else{
        n = Number(n.value)
        let c = 1
        tab.innerHTML = ''

        while(c <= 10){
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value =`tab${c}`
            tab.appendChild(item)
            c++
        }
    }
}
*/
