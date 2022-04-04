function contar() {
    let inicio = document.getElementById('txt_inicio')
    let fim = document.getElementById('txt_fim') 
    let passo = document.getElementById('txt_passo')
    let resultado = document.getElementById('resultado')

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0 ) {
        resultado.innerHTML = 'Impossível contar!'
        //window.alert('[ERRO] Faltam dados!')
    } else {
        resultado.innerHTML = 'Contando: <br>'
        let i = Number(inicio.value)
        let f = Number(fim.value)
        let p = Number(passo.value)

        if (p <= 0) {
            window.alert('Passo inválido! Considerado passo = 1.')
            p = Number(1)
        }

        if (i < f) {
            // Contagem crescente
            for (let c = i; c <= f; c += p) {
                resultado.innerHTML += `${c}\u{1F449}`
            }
        } else {
            // Contagem regressiva
            for (let c = i; c >= f; c -= p) {
                resultado.innerHTML += `${c}\u{1F449}`
            }
        }

        resultado.innerHTML += `\u{1F3C1}`
    }

}

