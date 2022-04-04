let num = [5, 8, 2, 9, 3]

console.log('\nVETOR SEM ALTERAÇÕES')
console.log(`O vetor [${num}] tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log()

for (let pos = 0; pos < num.length; pos++) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

num[5] = 6
num.push(7)
num.sort()

console.log('\nVETOR COM ALTERAÇÕES')
console.log(`O vetor [${num}] tem ${num.length} posições.`)
console.log(`O primeiro valor do vetor é ${num[0]}`)
console.log()

for (let pos in num) {
    console.log(`A posição ${pos} tem o valor ${num[pos]}`)
}

let posicao = num.indexOf(5)

console.log(`\nO valor 5 está na posição ${posicao}`)