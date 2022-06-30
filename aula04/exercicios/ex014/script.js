function carregar() {
    m = document.getElementById('msg')
    i = document.getElementById('imagem')
    d = new Date()
    h = d.getHours()
    m.innerHTML = `Agora são ${h} horas` 
    if (h >= 0 && h < 12) { 
        i.src = 'manha.png'
        document.body.style.background = '#fde675'
    } else if (h >= 12 && h <= 18) {
        i.src = 'tarde.png'
        document.body.style.background = '#cb7736'
    } else {
        i.src = 'noite.png'
        document.body.style.background = '#032439'
    }
}