/* Passando um valor padrão para o parâmetro para não retornar NaN
caso seja passado somente 1 parametro */

function soma(n1=0,n2=0) {
    return n1 + n2
}

console.log(soma(5,5))

console.log(soma(2))
