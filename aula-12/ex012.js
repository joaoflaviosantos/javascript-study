
var agora = new Date()
var hora = agora.getHours()

if (hora >= 0 && hora <= 24) {
    console.log(`Agora são exatamente ${hora} horas.`)
}

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!')
} else if (hora < 19) {
    console.log('Boa tarde!')
} else if (hora < 24) {
    console.log('Boa noite!')
} else {
    console.log('Hora inválida.')
}