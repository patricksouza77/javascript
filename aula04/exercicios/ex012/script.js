function calcular() {
    num = document.getElementById('n')
    tab = document.getElementById('seltab')
    if (num.value == 0) {
        alert('Pfv, digite um número válido')
    } else {
        tab.innerHTML = ''
        for(c=1;c<=10;c++) {
            item = document.createElement('option')
            item.text = `${Number(num.value)} x ${c} = ${Number(num.value) * c}`
            tab.appendChild(item)
        }
    }
} 
