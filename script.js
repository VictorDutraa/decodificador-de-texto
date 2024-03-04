

/*
As "chaves" de criptografia que utilizaremos são:
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
  

/*
-se  eu estiver em (1), texto esta puro
-novoTexto esta criptografado

-se eu estiver em (2), texto esta criptografado
-novoTexto esta descriptografado
*/

function AlteraDisplayTexto (text){
    let saida = document.getElementsByClassName("output-box__text")[0];
    saida.innerHTML = text;
    let  telaVaziaInicial = document.getElementsByClassName("output-empty-box")[0];
    let telaTexto = document.getElementsByClassName("output-box")[0];

    if(text.length == 0){
        telaVaziaInicial.style.display = 'flex';
        telaTexto.style.display = 'none';
    }
    else{
        telaTexto.style.display = 'flex';
        telaVaziaInicial.style.display = 'none';
    }

    let botao = document.getElementsByClassName("output-box__copy-text-button")[0];

    botao.style.border = "1px solid black";
    
}

//---(1) criptografando -- no clique do botao criptografar
function CriptografaTexto (){
    let novoTexto = "";
    let texto = document.getElementById("texto").value;
    
    for(let i=0; i < texto.length; i++){
        
        if(texto[i] == 'a'){
            novoTexto += "ai";
        }
        else if(texto[i] == 'e'){
            novoTexto += "enter";
        }
        else if(texto[i] == 'i'){
            novoTexto += "imes"
        }
        else if(texto[i] == 'o'){
            novoTexto += "ober";
        }
        else if(texto[i] == 'u'){
            novoTexto += "ufat";
        }
        else {
            novoTexto += texto[i];
        }
    } 
    AlteraDisplayTexto(novoTexto);
}

//---(2) descriptografando -- no clique do botao descriptografar
/*

se a letra for a, eu itero 2 vezes e confirmo se eh uma msg criptografada

se a letra for e eu itero 5 vezes

se a letra for i, eu itero 4 vezes, e assim vai

dai se realmente for um codigo criptografado, eu pusho pra uma nova string a letra correspondente
*/
function DescriptografaTexto (){

    let trecho = "";
    let novoTexto = "";
    let texto = document.getElementById("texto");

    for(let i=0; i < texto.value.length; i++){

        trecho = "";
        if(texto.value[i] == 'a'){
            trecho = "a";
            /*
            -busco o codigo correspondente logo a frente da vogal
            -(i + "codigo".length) significa (posicao atual + "o quanto devo andar")
            -começo em i+1 pq eu ja sei que oq ta em i é o 'a'
            */

            for(let j = i+1;
                j < i + "ai".length;
                j++){
                //verificando se o trecho em questao esta criptografado
                trecho += texto.value[j];
            }
            if(trecho == "ai"){
                //pulo no for da palavra pro final do codigo
                i += "ai".length-1;
            }
            novoTexto += "a"
        }
        else if(texto.value[i] == 'e'){
            trecho = "e";
            for(let j = i+1;
                j < i + "enter".length;
                j++){
                trecho += texto.value[j];
            }
            if(trecho == "enter"){
                i += "enter".length-1;
            }
            novoTexto += "e";
        }
        else if(texto.value[i] == 'i'){
            trecho = "i";
            for(let j = i+1;
                j < i + "imes".length;
                j++){
                trecho += texto.value[j];
            }
            if(trecho == "imes"){
                i += "imes".length-1;
            }
            novoTexto += "i";
        }
        else if(texto.value[i] == 'o'){
            trecho = "o";
            for(let j = i+1;
                j < i + "ober".length;
                j++){
                trecho += texto.value[j];
            }
            if(trecho == "ober"){
                i += "ober".length-1;
            }
            novoTexto += "o";
        }
        else if(texto.value[i] == 'u'){
            trecho = "u";
            for(let j = i+1;
                j < i + "ufat".length;
                j++){
                trecho += texto.value[j];
            }
            if(trecho == "ufat"){
                i += "ufat".length-1;
            }
            novoTexto += "u";
        }
        else {
            novoTexto += texto.value[i];
        }
    }
    
    AlteraDisplayTexto(novoTexto);
}

function ControlC (){
    let textoCopiado = document.getElementsByClassName("output-box__text")[0]; 

    let botao = document.getElementsByClassName("output-box__copy-text-button")[0];

    botao.style.border = "1px solid green";
    navigator.clipboard.writeText(textoCopiado.innerText);
}

    let cripButton = document.getElementsByClassName("botoes__crip")[0];
    let descripButton = document.getElementsByClassName("botoes__descrip")[0];
    cripButton.addEventListener("click", CriptografaTexto);
    descripButton.addEventListener("click", DescriptografaTexto);

    let copyTextButton = document.getElementsByClassName("output-box__copy-text-button")[0];
    copyTextButton.addEventListener("click", ControlC);

