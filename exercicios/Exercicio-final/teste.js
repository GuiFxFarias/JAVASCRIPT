
let alimentos = [1,1,2,3,4,5,6,7,7,7,1,1]


let alimentosUni = new Set();

alimentos.forEach(alimento => {
    alimentosUni.add(alimento);
});

console.log([...alimentosUni.values()])