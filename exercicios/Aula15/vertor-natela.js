let valores = [0,1,2,3,9,5,6]


/*
for (let pos = 0; pos < valores.length; pos++){
    console.log(valores[pos])
}


for(let pos in valores){
    console.log(valores[pos])
}
*/

let info = valores.indexOf(1)

for (let pos in valores){
    let print = valores[pos]
    if (print != info ){
        console.log(`O valor ${valores[pos]} é incompativel`)
    }else if (print == info){
        console.log(`Este valor é o ${info}`)
    }else{
        console.log(valores[pos])
    }
}
