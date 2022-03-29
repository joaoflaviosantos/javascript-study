function carregar() {
    var msg = document.getElementById('msg')
    var img = document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    var minutos = data.getMinutes()

    msg.innerHTML = `Agora são ${hora} horas e ${minutos} minutos.`

    if (hora >= 0 && hora < 12) {
        img.src = 'img/foto-manha.png'
        img.alt = 'Foto da manhã'
        document.body.style.background = '#e2cd9f'
    } else if (hora >= 12 && hora < 18) {
        img.src = 'img/foto-tarde.png'
        img.alt = 'Foto da tarde'
        document.body.style.background = '#b9846f'
    } else {
        img.src = 'img/foto-noite.png'
        img.alt = 'Foto da noite'
        document.body.style.background = '#515154'
    }
}
