/*let textoCopiado = document.getElementById("texto");

navigator.clipboard.writeText(textoCopiado.value);*/

/*
As "chaves" de criptografia que utilizaremos são:
A letra "a" é convertida para "ai"
A letra "e" é convertida para "enter"
A letra "i" é convertida para "imes"
A letra "o" é convertida para "ober"
A letra "u" é convertida para "ufat"
*/
  

/*
-se  eu estiver em (1), palavra eh um texto puro
-novaPalavra eh um texto criptografado

-se eu estiver em (2), palavra eh um texto criptografado
-novaPalavra eh um texto descriptografado
*/
let palavra = "victor";
let texto = 

//---(1) criptografando
function Criptografa (palavra){
    let novaPalavra = [];
    for(let i=0; i < palavra.length; i++){
        if(palavra[i] == 'a'){
            novaPalavra.push("ai");
            continue;
        }
        else if(palavra[i] == 'e'){
            novaPalavra.push("enter");
            continue;
        }
        else if(palavra[i] == 'i'){
            novaPalavra.push("imes");
            continue;
        }
        else if(palavra[i] == 'o'){
            novaPalavra.push("ober");
            continue;
        }
        else if(palavra[i] == 'u'){
            novaPalavra.push("ufat");
            continue;
        }
        novaPalavra.push(palavra[i]);
    }
    let novaPalavraConcatenada = "";
    for(let i = 0; i < novaPalavra.length; i++){
        novaPalavraConcatenada += novaPalavra[i];
    }   
    return novaPalavraConcatenada;
}



//---(2) descriptografando
/*
se a letra for a, eu itero 2 vezes e confirmo se eh uma msg criptografada

se a letra for e eu itero 5 vezes

se a letra for i, eu itero 4 vezes, e assim vai

dai se realmente for um codigo criptografado, eu pusho pra uma nova string a letra correspondente
*/

let estaCriptografado = 0;
let trecho = "";
for(let i=0; i < palavra.length; i++){

    if(palavra[i] == 'a'){
        trecho = "a";
        //busco o codigo correspondente logo a frente da vogal
        //(i + "codigo".length) significa (posicao atual + "o quanto devo andar")
        //começo em i+1 pq eu ja sei que oq ta em i é o 'a'
        for(let j = i+1;
            j < i + "ai".length;
            j++){
            //verificando se o trecho em questao esta criptografado
            trecho += palavra[j];
        }
    }
}

//tenho que pegar o texto, separar por palavras, e cada palavra chamar a função correspondente


