function carregar(){
    var msg = window.document.getElementById('msg')
    var ft = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()

    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 5){ 
        ft.src = "imagens/madrugada-redondo.png"
        document.body.style.background = '#2D4B75'
    }else if (hora >= 5 && hora < 12) { 
        ft.src = "imagens/manha-redondo.png"
        document.body.style.background = '#5ECDE6'
    }else if (hora >=12 && hora < 19) { 
        ft.src = "imagens/tarde-redondo.png"
        document.body.style.background = '#C28359'
    }else { 
        ft.src = "imagens/noite-redondo.png"
        document.body.style.background = '#5999DE'
    }

}


