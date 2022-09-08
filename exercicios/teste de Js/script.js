function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('ano')
    var resultado = document.getElementById('res')
    
    if (fAno.value.length == 0 || fAno.value > ano){
        window.alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('sex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked){
            genero = 'Homem'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'imagens/masc-bebe.png')
            }else if (idade <11){
                img.setAttribute('src', 'imagens/masc-cr.png')
            }else if (idade <18){
                img.setAttribute('src', 'imagens/masc-adoles.png')
            }else if (idade <50){
                img.setAttribute('src', 'imagens/masc-adul.png')
            }else if (idade <100){
                img.setAttribute('src', 'imagens/masc-idoso.png')
            }
        }else if (fsex[1].checked){
            genero = 'Mulher'
            if (idade >= 0 && idade < 5){
                img.setAttribute('src', 'imagens/femi-bebe.png')
            }else if (idade >=5 && idade <11){
                img.setAttribute('src', 'imagens/femi-cr.png')
            }else if (idade >=11 && idade <18){
                img.setAttribute('src', 'imagens/femi-adol.png')
            }else if (idade >=18 && idade <50){
                img.setAttribute('src', 'imagens/femi-adul.png')
            }else if (idade >=50 && idade <100){
                img.setAttribute('src', 'imagens/femi-idosa.png')
            }
        }
        resultado.style.textAlign = 'center'
        resultado.innerHTML = `Detectamos ${genero} com ${idade} anos`
        resultado.appendChild(img)
    }
}