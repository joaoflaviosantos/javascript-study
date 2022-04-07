let num = document.getElementById('txt_numero')
let lista = document.getElementById('flista')
let resultado = document.getElementById('resultado')
let valores = []

function isNumero(n) {
    if (Number(n) >= 1 && Number(n) <= 100) {
        return true
    } else {
        return false
    }
}

function inLista(n, l) {
    if(l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if(isNumero(num.value) && !inLista(num.value, valores)) {
        valores.push(Number(num.value))
        let item = document.createElement('option')
        item.text = `Valor (${num.value})`
        item.value = `${num.value}`
        lista.appendChild(item)
        resultado.innerHTML = ''
    } else {
        window.alert('Valor inválido ou já encontrado na lista.')
    }
    num.value = ''
    num.focus()
}

function finalizar() {
    if (valores.length == 0) {
        window.alert('Adicione valores antes de finalizar!')
    } else {
        let total = valores.length
        let menor = valores.sort()[0]
        let maior = valores.sort().reverse()[0]
        let soma = Number(0)

        for (let i in valores) {
            soma += Number(valores[i])
        }

        let media = Number(soma) / Number(total)
        
        resultado.innerHTML = ''
        resultado.innerHTML += `<p>Ao todo, temos ${total} números adicionados a lista.</p>`
        resultado.innerHTML += `<p>O menor valor é o número ${menor}.</p>`
        resultado.innerHTML += `<p>O maior valor é o número ${maior}.</p>`
        resultado.innerHTML += `<p>Somando todos os valores, temos ${soma}.</p>`
        resultado.innerHTML += `<p>A média aritmética dos valores da lista é ${media}.</p>`
    }
}