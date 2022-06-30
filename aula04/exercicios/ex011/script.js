function contar() {
    inicio = document.getElementById('i')
    fim = document.getElementById('f')
    passo = document.getElementById('p')
    resposta = document.getElementById('r')
    if(inicio.value == 0 || fim.value == 0) {
        alert('ERRO! Impossível de contar')
    } else {
        resposta.innerHTML = 'Contando: ' 
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo<=0) {alert('Não existe passo zero ou negatico, portanto será atribuido passo=1')
            passo = 1} 
        if(inicio<fim){
            for(c=inicio;c<=fim;c+=passo)
            resposta.innerHTML += `${c} \u{1F449}`
        } 
        else {
            for(c=inicio;c>=fim;c-=passo)
            resposta.innerHTML += `${c} \u{1F449}`
    }
}
    resposta.innerHTML += `\u{1F3C1}`	 
}

