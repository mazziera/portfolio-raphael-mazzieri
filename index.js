const slideImagens = document.querySelectorAll('.projeto');
const setaVoltar = document.getElementById("seta-esquerda");
const setaAvancar = document.getElementById("seta-direita");

let imagemAtual = 0;

setaAvancar.addEventListener("click", () => {
    // Avança para a próxima imagem
    avancarParaProximaImagem();
});

setaVoltar.addEventListener("click", () => {
    // Volta para a imagem anterior
    voltarParaImagemAnterior();
});

const esconderImagemAtual = () => {
    // Esconde a imagem atual quando troca de imagem, mostrando apenas uma imagem.
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
    // Esconde a imagem atual
    esconderImagemAtual();
    // Calcula o índice da imagem anterior

    imagemAtual = (imagemAtual - 1 + slideImagens.length) % slideImagens.length; // volta para o último elemento quando chega ao primeiro
    
    slideImagens[imagemAtual].classList.remove("esconder");
};
