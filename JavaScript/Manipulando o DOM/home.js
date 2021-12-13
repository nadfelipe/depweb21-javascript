// alert("Bem vindo ao nosso site com javascript externo!")

function clique_botao(){
    alert("O Botão foi apertado!");
}

function adicionar_frase(){
    document.getElementById("paragrafo1").innerHTML = "Minha frase que veio do javascript";
}

// function adicionar_frases(){
//     document.getElementsByClassName("paragrafo").innerHTML = "Clicaram no botão duas vezes!";
// }

function mudarParaVermelho(){
    document.getElementById("paragrafo2").style.color = "#ff0000";
}

function mudarParaVerde(){
    document.getElementById("paragrafo2").style.color = "#00ff00";
}

function mudarParaAzul(){
    document.getElementById("paragrafo2").style.color = "#0000ff";
}

function acenderLampada(){
    document.getElementById("lampada").classList.replace("apagada", "acesa");
}

function apagarLampada(){
    document.getElementById("lampada").classList.replace("acesa", "apagada")
}