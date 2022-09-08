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
            if (fnome == 'Xavi'){
                gols = 85
                img.setAttribute('src', 'imagens/xavi-redondo.png')
            }
            if (fnome == 'Messi'){
                gols = 672	
                img.setAttribute('src', 'imagens/messi-redondo.png')
            }
            if (fnome == 'Piqué'){
                gols = 53
                img.setAttribute('src', 'imagens/pique-redondo.png')
            }
            if (fnome == 'Iniesta'){
                gols = 57
                img.setAttribute('src', 'imagens/iniesta-redondo.png')
            }
            if (fnome == 'Puyol'){
                gols = 19
                img.setAttribute('src', 'imagens/puyol-redondo.png')
            }
            if (fnome == 'Busquets'){
                gols = 18
                img.setAttribute('src', 'imagens/busquets-redondo.png')
            }
        }else if (fparticipa[1].checked){
            if (fnome == 'Xavi'){
                assists = 185
                img.setAttribute('src', 'imagens/xavi-redondo.png')
            }
            if (fnome == 'Messi'){
                assists = 303
                img.setAttribute('src', 'imagens/messi-redondo.png')
            }
            if (fnome == 'Piqué'){
                assists = 15
                img.setAttribute('src', 'imagens/pique-redondo.png')
            }
            if (fnome == 'Puyol'){
                assists = 13
                img.setAttribute('src', 'imagens/puyol-redondo.png')
            }
            if (fnome == 'Busquets'){
                assists = 43
                img.setAttribute('src', 'imagens/busquets-redondo.png')
            }
            if (fnome == 'Iniesta'){
                assists = 138
                img.setAttribute('src', 'imagens/iniesta-redondo.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `O ${fnome} tem em sua carreira ${gols || assists} ${fparticipa[0].value || fparticipa[1].value}`
        resultado.appendChild(img)
    }
}



