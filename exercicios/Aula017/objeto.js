let amigo = {nome: 'Jose',
peso:85.4,
engordar(p=0){
    console.log('Engordou')
    this.peso += p
}}

amigo.engordar(3)
console.log(amigo.nome)
console.log(amigo.peso)