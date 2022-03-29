function verificar() {
    var data = new Date()
    var ano_atual = data.getFullYear()
    var fano = document.getElementById('txtano')
   
    var resultado = document.getElementById('resultado')
    
    if (fano.value.length == 0 || fano.value > ano_atual) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano_atual - Number(fano.value)
        var genero = ''

        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebe-menino.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/homem-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            }else if (idade >= 50) {
                //Idoso
                img.setAttribute('src', 'img/homem-idoso.png')
            }
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //Criança
                img.setAttribute('src', 'img/bebe-menina.png')
            } else if (idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/mulher-jovem.png')
            } else if (idade < 50) {
                //Adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            }else if (idade >= 50) {
                //Idoso
                img.setAttribute('src', 'img/mulher-idosa.png')
            }
        }

        resultado.style.textAlign = 'center'
        resultado.innerHTML = '<hr>'
        resultado.innerHTML += `<p>Detectamos ${genero} com ${idade} anos.</p>`
        resultado.innerHTML += `<img id="foto" src="${img.src}" alt="">`
        //resultado.appendChild(img)
    }
}