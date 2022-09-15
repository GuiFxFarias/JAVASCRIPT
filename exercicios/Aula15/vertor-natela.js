let valores = [0,1,2,3,9,5,6]
console.log(valores[4])

/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(valores[pos])
}


for(let pos in valores){
    console.log(valores[pos])
}
*/

let info = valores.indexOf(6)

for (let pos in valores){
    let print = valores[pos]
    if (print != info ){
        console.log(`O valor ${print} não corresponde com o ${info}`)
    }else if (print == info){
        console.log(`O valor ${print} é compatível`)
    }
}
