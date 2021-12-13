//  pegar os inputs (nome e mensagem) e guardar em constantes ✔
//  validar se o valor do nome não esta vazio ✔
//      se o valor não estiver vazio:
//          pegar os dois valores e montar uma frase ✔
//          jogar a frase na url (link) pro WhatsApp ✔
//          jogar a pessoa na url (link) que criamos ✔
//      se o valor estiver vazio:
//          coloca uma borda vermelha no input do nome
//          coloca o .focus() no input do nome
function enviarMensagem(){
    const inputNome = document.querySelector("#input_nome");
    const inputMensagem = document.querySelector("#input_mensagem");

    // se o valor não estiver vazio
    if(inputNome.value != ''){
        let frase = `Olá me chamo ${inputNome.value}, ${inputMensagem.value}`

        let urlWpp = `https://api.whatsapp.com/send?phone=5511961040907&text=${frase}`

        window.open(urlWpp)
    }
    // se o valor do nome estiver vazio
    else{
        inputNome.style.border = '2px solid #ff0000'
        inputNome.style.outline = 'none'
        inputNome.focus()
    }

}