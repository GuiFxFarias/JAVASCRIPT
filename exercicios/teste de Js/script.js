function verifica(){
    var fnome = document.getElementById('nome').value
    var resultado = document.getElementById('res')

    if (fnome.length == 0) {
        window.alert('Verifique os dados e tente novamente ou digite o nome do jogador como exemplificado')
    }else {
        var gols = ''.value
        var assists = ''.value
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        var fparticipa = document.getElementsByName('participa')

        if (fparticipa[0].checked){
            if (fnome == 'Xavi'|| fnome == 'XAVI'|| fnome == 'xavi'){
                gols = 85
                img.setAttribute('src', 'imagens/xavi-redondo.png')
            }
            if (fnome == 'Messi'|| fnome == 'MESSI'|| fnome == 'messi'){
                gols = 672	
                img.setAttribute('src', 'imagens/messi-redondo.png')
            }
            if (fnome == 'Piqué'|| fnome == 'pique'|| fnome == 'PIQUE'){
                gols = 53
                img.setAttribute('src', 'imagens/pique-redondo.png')
            }
            if (fnome == 'Iniesta'|| fnome == 'iniesta'|| fnome == 'INIESTA'){
                gols = 57
                img.setAttribute('src', 'imagens/iniesta-redondo.png')
            }
            if (fnome == 'Puyol'|| fnome == 'puyol'|| fnome == 'PUYOL'){
                gols = 19
                img.setAttribute('src', 'imagens/puyol-redondo.png')
            }
            if (fnome == 'Busquets' || fnome== 'BUSQUETS'|| fnome == 'busquets'){
                gols = 18
                img.setAttribute('src', 'imagens/busquets-redondo.png')
            }
        }else if (fparticipa[1].checked){
            if (fnome == 'Xavi'|| fnome == 'XAVI'|| fnome == 'xavi'){
                assists = 185
                img.setAttribute('src', 'imagens/xavi-redondo.png')
            }
            if (fnome == 'Messi'|| fnome == 'MESSI'|| fnome == 'messi'){
                assists = 303
                img.setAttribute('src', 'imagens/messi-redondo.png')
            }
            if (fnome == 'Piqué'|| fnome == 'pique'|| fnome == 'PIQUE'){
                assists = 15
                img.setAttribute('src', 'imagens/pique-redondo.png')
            }
            if (fnome == 'Puyol'|| fnome == 'puyol'|| fnome == 'PUYOL'){
                assists = 13
                img.setAttribute('src', 'imagens/puyol-redondo.png')
            }
            if (fnome == 'Busquets' || fnome== 'BUSQUETS'|| fnome == 'busquets'){
                assists = 43
                img.setAttribute('src', 'imagens/busquets-redondo.png')
            }
            if (fnome == 'Iniesta'|| fnome == 'iniesta'|| fnome == 'INIESTA'){
                assists = 138
                img.setAttribute('src', 'imagens/iniesta-redondo.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `O ${fnome} tem em sua carreira ${gols || assists} `
        resultado.appendChild(img)
    }
}



