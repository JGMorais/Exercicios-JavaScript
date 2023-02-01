function contar() {
    let ini = document.getElementById('txti')
    let fim = document.getElementById('txtf')
    let passo = document.getElementById('txtp')
    let res = document.getElementById('res')

    if (ini.value.length == 0 || fim.value.length == 0|| passo.value.length == 0) {
        window.alert('[ERRO] Faltam dados!')
    } else {
        res.innerHTML = 'Contando: '
         i = Number(ini.value)
         f = Number(fim.value)
         p = Number(passo.value)

        for( c = i; c <= f; c += p) {
            res.innerHTML += `${c}  &#128073 `
            
        }
    }res.innerHTML += '&#x26FF'
}