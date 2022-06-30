function checar() {
    data = new Date()
    ano = data.getFullYear()
    fano = document.getElementById('num')
    r = document.getElementById('r')
    if (fano.value.length == 0 || fano.value > ano){
        alert('[ERRO] Dados incorretos!')
    } else {
        fsex = document.getElementsByName('sex')
        age = ano - fano.value
        genero = ''
        img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'babym.png')
            } else if (age < 21) {
                img.setAttribute('src', 'youngm.png')
            } else if (age < 50) {
                img.setAttribute('src', 'adultm.png')
            } else {
                img.setAttribute('src', 'oldm.png')
            }

        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (age >= 0 && age < 10) {
                img.setAttribute('src', 'babyf.png')
            } else if (age < 21) {
                img.setAttribute('src', 'youngtf.png')
            } else if (age < 50) {
                img.setAttribute('src', 'adultf.png')
            } else {
                img.setAttribute('src', 'oldf.png')
            }
        }
        r.style.textAlign = 'center'
        r.innerHTML = `Detectamos ${genero} com ${age} anos.`
        r.appendChild(img)
    }
}