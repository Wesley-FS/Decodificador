

function criptografia() {

    // Captura o valor da caixa de texto
    let texto = document.getElementById("textoInput").value;
    let imagemProcurando = document.querySelector(".procurando");
    texto = texto.toLowerCase();    
    let campo = document.querySelector(".boxResult");
    let subTexto = document.querySelector(".subTexto");

    let mensagemCripto =  texto.replace(/e/g, "enter").replace(/i/g, "imes")
    .replace(/a/g, "ai").replace(/o/g, "ober").replace(/u/g, "ufat");


    campo.innerHTML = mensagemCripto;
    subTexto.remove();
    imagemProcurando.remove();

    

}


function decriptografia(){
    let texto = document.getElementById("textoInput").value;
    let imagemProcurando = document.querySelector(".procurando");
    let campo = document.querySelector(".boxResult");
    let subTexto = document.querySelector(".subTexto");
    
   
    let mensagemCripto =  texto.replace(/enter/g, "e").replace(/imes/g, "i")
    .replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    
    campo.innerHTML = mensagemCripto;
    subTexto.remove();
    imagemProcurando.remove();
    
    
}


function copiar(){
    let copiarTexto = document.querySelector(".boxResult").value;  

    navigator.clipboard.writeText(copiarTexto)

    alert('O texto foi copiado para a área de transferência!');

}