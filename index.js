const slideImagens = document.querySelectorAll('.projeto');
const setaVoltar = document.getElementById("seta-esquerda");
const setaAvancar = document.getElementById("seta-direita");

let imagemAtual = 0; // representa o indice atual da imagem do array de projetos

setaAvancar.addEventListener("click", () => {
    // Avança para a próxima imagem
    avancarParaProximaImagem();
});

setaVoltar.addEventListener("click", () => {
    // Volta para a imagem anterior
    voltarParaImagemAnterior();
});

const esconderImagemAtual = () => {
    // Baseado no indice do array, esconde a imagem atual quando troca de imagem, mostrando apenas uma imagem.
    slideImagens[imagemAtual].classList.add("esconder");
    slideImagens[imagemAtual].classList.remove("imagem-atual")
};

const avancarParaProximaImagem = () => {
    // função que esconde a imagem atual
    esconderImagemAtual();

    // Avança para a próxima imagem
    imagemAtual = (imagemAtual + 1) % slideImagens.length; // volta para o primeiro elemento quando chega ao último

    slideImagens[imagemAtual].classList.remove("esconder");
};

const voltarParaImagemAnterior = () => {
    // função que esconde a imagem atual
    esconderImagemAtual();

    // Calcula o índice da imagem anterior
    imagemAtual = (imagemAtual - 1 + slideImagens.length) % slideImagens.length; /* volta para o último elemento quando chega ao primeiro.
    O uso de slideImagens.length é para garantir que, mesmo se imagemAtual for 0, ao subtrair 1, ele não se torne -1, mas sim o índice anterior ao último elemento do array.*/
    
    slideImagens[imagemAtual].classList.remove("esconder");
};
