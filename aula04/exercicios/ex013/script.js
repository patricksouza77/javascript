num = document.querySelector('input#fnum')
lst = document.querySelector('select#flista')
res = document.querySelector('div#res')
valores = []

function isnumero(n) {
    if (1<=Number(n)<=100) {
        return true
    } else {
        return false
    }
}

function inlist(n, l) {
    if (l.indexOf(Number(n)) != -1) {
        return true
    } else {
        return false
    }
}

function adicionar() {
    if (isnumero(num.value) && !inlist(num.value, valores)){
        alert('Tudo ok!')
    } else {
        alert('Valor invalido ou já encontrado na lista')
    }
}

