function calcularMedia(){
    const elementoRetorno = document.getElementById("resultado");
    const campo1 = document.getElementById("nota1");
    const campo2 = document.getElementById("nota2");
    const campo3 = document.getElementById("nota3");

    if(campo1.value == ''){
        //SE O VALUE DO CAMPO1 FOR VAZIO
        elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 1!"
        campo1.focus()
    }else{
        //SE O VALUE DO CAMPO1 TIVER ALGUMA COISA   
        if(campo2.value == ''){
            //SE O VALUE DO CAMPO2 FOR VAZIO
            elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 2!"
            campo2.focus()
        }else{
            //SE O VALUE DO CAMPO2 TIVER ALGUMA COISA  
            if(campo3.value == ''){
                //SE O VALUE DO CAMPO3 FOR VAZIO
                elementoRetorno.innerHTML = "Não foi inserido nenhum valor na nota 3!"
                campo3.focus()
            }else{
                //SE TODOS TIVEREM PREENCHIDOS
                elementoRetorno.innerHTML = ""

                let valorInput1 = Number(campo1.value)
                let valorInput2 = Number(campo2.value)
                let valorInput3 = Number(campo3.value)

                let media = ((valorInput1 + valorInput2 + valorInput3)/3).toFixed(1)

                // media.toFixed(1)
                
                document.querySelector("#resultado").innerHTML = `O resultado da média das notas é ${media}`
                
                classificarAluno(media)
            }
        }
    }
    
    //o tipo que vem do input é string
    //se a string do input for vazia o Number() transforma pra 0


    //se o aluno tiver a media maior ou igual a 6 ele ta aprovado

    //se o aluno tiver a media menor que 3 ele ta reprovado

    //se ele não tiver a nota maior ou igual a 6 OU a nota menor que 3 ele ta de rec

}

function classificarAluno(notaMedia){
    const elementoSituacao = document.getElementById("situacao")

    if(notaMedia >= 6){
        //SE O ALUNO TIVER A NOTA MAIOR OU IGUAL A 6
        elementoSituacao.innerHTML = "O aluno foi Aprovado!"
    }else{
        //SE O ALUNO TIVER A NOTA MENOR DO QUE 6
        if(notaMedia < 3){
            //SE O ALUNO TIVER A NOTA MENOR DO QUE 3
            elementoSituacao.innerHTML = "O aluno foi Reprovado!"
        }else{
            //SE O ALUNO TIVER A NOTA MAIOR DO QUE
            elementoSituacao.innerHTML = "O aluno está de Recuperação!"
        }
    }

    // if(condicao1){
    //     //condicao1 for verdadeira
    // }else if(condicao2){
    //     //condicao1 for falsa e a condicao2 for verdadeira
    // }else{
    //     //condicao1 for falsa e a condicao2 for falsa
    // }

    // if(condicao1){
    //     //condicao1 for verdadeira
    // }else{
    //     //condicao1 for falsa
    //     if(condicao2){
    //         //condicao 1 for falsa e a condicao2 for verdadeira
    //     }else{
    //         //condicao1 for falsa e a condicao2 for falsa
    //     }
    // }
}












//primeira coisa - o que queremos fazer/onde queremos chegar
//segunda coisa - o que/como vou chegar no meu resultado
//  1° selecionar o elemento atraves da DOM
//      1.1 fala que vai usar o DOM (document.)
//      1.2 depende do tipo do seletor
//          1.2.1 SE VAI PELO ID: getElementById("idDoElemento")
//          1.2.2 SE QUER PEGAR A LISTA DE ELEMENTOS PELA CLASSE: getElementsByClassName("nomeDaClasse")[indice*]
//          1.2.3 SE QUER PEGAR A LISTA DE ELEMENTOS PELO NOME DA TAG: getElementsByTagName("tag")[indice]
//          1.2.4 SE QUER PEGAR O PRIMEIRO ELEMENTO PELO ID, PELA CLASSE OU PELA TAG: querySelector("#idDoELemento"), querySelector(".nomeDaClasse") ou querySelector("tag")
//  2° depende do que irá fazer
//      2.1 inserir um HTML - .innerHTML
//      2.2 mexer no estilo(CSS) - .style
//      2.3 deixar o elemento em foco (input selecionado) - .focus()
//  3° atribuir um valor (usando o = ) para aquilo que você selecionou
//
//LEMBRETE - indice* começa a partir do 0, portanto CUIDADO!
//LEMBRETE 2 - com o querySelector nós selecionamos as coisas como se fosse no CSS