function tabuada() {
    let numero = document.getElementById('txt_numero')
    let tabuada = document.getElementById('select_tabuada')

    if (numero.value.length == 0) {
        window.alert('Por favor digite um número!')
    } else {
        let n = Number(numero.value)
        let c = 1
        tabuada.innerHTML = ''
        while (c <= 10) {
            let item = document.createElement('option')
            item.text = `${n} X ${c} = ${n*c}`
            item.value = `tabuada${c}`
            tabuada.appendChild(item)
            c++
        }
    }
}