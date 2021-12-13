const divManipula = document.getElementById("manipula")

//Botão 2 - Muda o tamanho da fonte
function mudarTamanhoFonte(){
    //document.getElementById("manipula").style.fontSize = "30px";
    divManipula.style.fontSize = "30px";
}

//Botão 3 - Altera a cor da fonte
function mudarCorFonte(){
    //document.getElementById("manipula").style.color =  "#fff";
    divManipula.style.color = "#fff";
}

//Botão 4 - Altera a cor do fundo da div
function mudarCorFundo(){
    divManipula.style.backgroundColor = "#000";
}

//Botão 5 - Adiciona o estilo itálico para o texto
function adicionarItalico(){
    divManipula.style.fontStyle = "italic";
}

//Botão 6 - Deixa o texto em negrito
function mudarNegrito(){
    divManipula.style.fontWeight = "bold";
}

//Botão 7 - Adiciona uma borda
function incluirBorda(){
    divManipula.style.border = "3px solid #ff0000";
}

//Botão 8 - Tira a borda
function tirarBorda(){
    divManipula.style.border = "none";
    //divManipula.style.borderWidth = "0";
}

//Botão 9 - Esconde a div
function esconderDiv(){
    divManipula.style.display = "none";
}

//Botão 10 - Mostra a div
function mostrarDiv(){
    divManipula.style.display = "block";
}

//Botão 11 - Insere um texto HTML com o valor "NÃOOOOOOOOOO!" no segundo elemento com a classe "chamada"
//Primeira coisa - conseguimos acessar o tamanho da lista pelo length
//Segunda coisa - para achar o índice precisamos subtrair 1 (ex: se queremos o terceiro elemento, o índice dele seria [2])
function mudarSegundaChamada(){
    //Visualizamos o segundo elemento de índice 1 da classe chamada pelo console do navegador
    //console.log(document.getElementsByClassName("chamada")[1]);
    document.getElementsByClassName("chamada")[1].innerHTML = "NÃOOOOOOOOOO!";
}

//Botão 12 - Muda a cor do fundo no elemento com a classe "paragrafo"
function mudarCorFundoParagrafo(){
    // serve para enxergar a lista de elementos que possuem a classe "paragrafo" em todo nosso documento (body)
    //console.log(document.getElementsByClassName("paragrafo"))
    document.getElementsByClassName("paragrafo")[0].style.backgroundColor = "red";

    // serve pra enxergar a lista de elementos que possuem a classe "paragrafo" apenas dentro da div #manipula
    // console.log(divManipula.getElementsByClassName("paragrafo"))
    // divManipula.getElementsByClassName("paragrafo")[0].style.backgroundColor = "yellow";
}

//Botão 13 - Muda a cor do fundo de um único botão
function mudarCorBotaoUnico(){
    const elementosBotoes = document.getElementsByTagName("button");
    let numeroBotao = Math.round(Math.random()*(elementosBotoes.length - 1) + 1);
    
    //console.log(document.getElementsByTagName("button"))
    elementosBotoes[numeroBotao - 1].style.backgroundColor = "lightblue";
    //document.getElementsByTagName("button")[6].style.boxShadow = "46px 23px 50px #05FF00";
}

//Botão 14 - Muda a cor do fundo de todos os botões
function mudarCorBotoes() {
    const divBotoes = document.getElementById("botoes");
    var botoes = divBotoes.getElementsByTagName("button");

    // repetir (indice = 0; indice = 17; indice = indice + 1){
    //     botoes[indice].style.backgroundColor = 'red';
    // }

    var i; //indice do nosso for
    for (i = 0; i < botoes.length; i++){
        botoes[i].style.backgroundColor = "lightgreen";
    }
}

//Botão 15 - Conta quantos elementos possuem a classe "botoes" e adicionar um texto na div manipula com esse dado
function contarBotoes() {
    let qtndBotoes = document.getElementById("botoes").getElementsByTagName("button").length;

    divManipula.innerHTML = qtndBotoes;
    //alert(`a quantidade de botoes é ${qtndBotoes}!`);
}

//Botão 16 - Insere um texto HTML no elemento com a classe "paragrafo"
function inserirTexto(texto) {
    let textoInserido = texto;
    
    //document.getElementsByClassName("paragrafo")[0].innerHTML = textoInserido;
    document.querySelector(".paragrafo").innerHTML = textoInserido;
}

//Botão 17 - Muda a cor da página inteira
function mudarCorPagina() {
    document.querySelector("body").style.backgroundColor = "yellow";
}

//Botão 18 - Altera a imagem do pc da xuxa pro pc da alienware
function mudarImg(urlImg) {
    document.querySelector("img").src = urlImg;

    // var imagem = document.querySelector("img");
    // imagem.setAttribute("src", caminhoImg);
}

//Botão 19 - Acionar as outras funções
function acionarTudo(){
    mudarTamanhoFonte();
    mudarCorFonte();
    mudarCorFundo();
    adicionarItalico();
    mudarNegrito();
    incluirBorda();
    mudarSegundaChamada();
    mudarCorFundoParagrafo();
    mudarCorBotoes();
    contarBotoes();
    inserirTexto("TEXTO ADICIONADO DA FUNÇÃO NO BOTÃO 19");
    mudarCorPagina();
    mudarImg('./img/peixes.svg');
}