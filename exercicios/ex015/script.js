function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = window.document.getElementById('txtano')
    var res = window.document.querySelector('div#res')
    if (fano.value.lenght == 0 || (fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = window.document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', '5h.png')
            } else if (idade < 21) {
                // 20 anos
                img.setAttribute('src', '20h.png') 
            } else if (idade < 40) {
                // 40 anos
                img.setAttribute('src', '40h.png') 
            } else if (idade < 60) {
                // 60 anos
                img.setAttribute('src', '60h.png') 
            } else if (idade < 80) {
                // 80 anos
                img.setAttribute('src', '80h.png') 
            }
        } else if (fsex[1].checked) {
            genero = 'Feminino'
            if (idade >=0 && idade < 10) {
                // criança
                img.setAttribute('src', '5m.png')
            } else if (idade > 21) {
                // 20 anos
                img.setAttribute('src', '20m.png') 
            } else if (idade > 40) {
                // 40 anos
                img.setAttribute('src', '40m.png') 
            } else if (idade > 60) {
                // 60 anos
                img.setAttribute('src', '60m.png') 
            } else if (idade > 80) {
                // 80 anos
                img.setAttribute('src', '80m.png') 
            }
        }
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        res.appendChild(img)
    } 

}