function verificar(){
    var text = document.getElementById('nome')
    var resultado = document.getElementById('res')
    
   
    
    if (text.length == 0 || text != String){
        window.alert('Verifique os dados e tente novamente')
    } else{
        img.setAttribute('id', 'foto')  
        var img = document.createElement('img')
        var fParticipa = document.getElementsByName('participa')
        var gols = ''
        var assists = ''

    } if (fParticipa[0].checked){
        if (text == 'Xavi')
        var gols = 85
        img.setAttribute('src', 'imagens/xavi-redondo.png')
    }
    resultado.style.textAlign = 'center'
    resultado.innerHTML = `O ${text}`
}



