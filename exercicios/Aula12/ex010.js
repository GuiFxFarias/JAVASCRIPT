var agora = new Date()
var hora = agora.getHours()
console.log(`Agora sao exatamente ${hora} horas`)
if (hora <= 4){
    console.log('Bom madrugada!')
} else{
    if (hora <= 12){
        console.log('Bom dia')
    } else {
        if (hora < 19){
            console.log('Boa tarde')
        } else if (hora < 25) {
            console.log('Boa noite')
        } else{
            console.log('Essa hora nao existe')
        }
    }
}