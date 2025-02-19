const btnEnviar = document.querySelector('#btn-enviar')

function comparaNumeros(num1, num2) {
    if(num1 > num2) {
        return false
    } else { 
        return true
    }
}

btnEnviar.addEventListener('click', function(e){
    e.preventDefault()

    const campoNumero1 = document.querySelector('#input-numero-1')
    const campoNumero2 = document.querySelector('#input-numero-2')
    const campoMensagem = document.querySelector('.div-mensagem')
    const resultado = comparaNumeros(campoNumero1.value, campoNumero2.value)

    if(resultado){
        campoMensagem.innerHTML += `<p>asd</p>`
    } else {
        campoMensagem.innerHTML += `<p>cvxvx</p>`
    }
})