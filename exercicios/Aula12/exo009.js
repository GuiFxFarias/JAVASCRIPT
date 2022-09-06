var idade = 66
console.log(`Voce tem ${idade} anos`)
if (idade < 16) {
    console.log('Menor de idade')
} else {
    if (idade < 18 || idade > 66){
        console.log('Voto opcional')
    } else {
        console.log('Pode votar')
    }
}