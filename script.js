const formNumeros = document.querySelector('#form-numeros')

function comparaNumeros(num1, num2) {
    if(num1 > num2) {
        return false
    } else { 
        return true
    }
}

formNumeros.addEventListener('submit', function(e){
    e.preventDefault()

    const campoNumero1 = document.querySelector('#input-numero-1')
    const campoNumero2 = document.querySelector('#input-numero-2')
    const campoMensagem = document.querySelector('.div-mensagem')
    let resultado = comparaNumeros(campoNumero1.value, campoNumero2.value)

    if(resultado){
        campoMensagem.classList.remove('error')
        campoMensagem.classList.add('success')
        campoMensagem.innerHTML = `<p>Formulário válido</p>`
        campoNumero1.value = ""
        campoNumero2.value = ""
    } else {
        campoMensagem.classList.remove('sucess')
        campoMensagem.classList.add('error')
        campoMensagem.innerHTML = `<p>Formulário inválido</p>`
    }
})