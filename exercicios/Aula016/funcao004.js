function fat(n){
    let fatt = 1
    for (let c = n; c > 1; c--){
        fatt *= c
    }
    return fatt
}

console.log(fat(5))