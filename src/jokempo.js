const $botãoPedra1 = document.querySelector(".botão-pedra-1");
const $botãoPapel1 = document.querySelector(".botão-papel-1");
const $botãoTesoura1 = document.querySelector(".botão-tesoura-1");

const $botãoPedra2 = document.querySelector(".botão-pedra-2");
const $botãoPapel2 = document.querySelector(".botão-papel-2");
const $botãoTesoura2 = document.querySelector(".botão-tesoura-2");

const $campo1 = document.querySelector(".campo-1");
const $campo2 = document.querySelector(".campo-2");
const $NomeVencedor = document.querySelector(".vencedor");
const $pontuaçãoJogador1 = document.querySelector(".pontuação-jogador-1");
const $pontuaçãoJogador2 = document.querySelector(".pontuação-jogador-2");
const $botãoIniciar = document.querySelector(".iniciar");
const $botãoResetar = document.querySelector(".resetar");

let jogador1 = 0;
let jogador2 = 0;
let movimentoJogador1 = "";
let movimentoJogador2 = "";
let vencedor = null;
let jogo = false;

const JogadorVencedor = () => {
  if (movimentoJogador1 == "pedra" && movimentoJogador2 == "tesoura") {
    vencedor = 1;
  } else if (movimentoJogador1 == "papel" && movimentoJogador2 == "pedra") {
    vencedor = 1;
  } else if (movimentoJogador1 == "tesoura" && movimentoJogador1 == "papel") {
    vencedor = 1;
  } else if (movimentoJogador2 == "papel" && movimentoJogador1 == "pedra") {
    vencedor = 2;
  } else if (movimentoJogador2 == "tesoura" && movimentoJogador1 == "papel") {
    vencedor = 2;
  } else if (movimentoJogador2 == "pedra" && movimentoJogador1 == "tesoura") {
    vencedor = 2;
  } else if (movimentoJogador1 == movimentoJogador2) {
    vencedor = 0;
  }
};

const imprimirNomeDoGanhador = (vencedor) => {
  if (vencedor == 1) {
    $NomeVencedor.textContent = "jogador 1 ganhou";
  } else if (vencedor == 2) {
    $NomeVencedor.textContent = "jogador 2 ganhou";
  } else {
    $NomeVencedor.textContent = "empate";
  }
};
const pontos = (vencedor) => {
  if (vencedor == 1) {
    jogador1 += 1;
  } else if (vencedor == 2) {
    jogador2 += 1;
  }
};

const imprimirPontos = (vencedor) => {
  if (vencedor == 1) {
    $pontuaçãoJogador1.innerHTML = jogador1;
  } else if (vencedor == 2) {
    $pontuaçãoJogador2.innerHTML = jogador2;
  }
};

const resetarCampo = () => {
  $campo1.innerHTML = "";
  $campo2.innerHTML = "";
};

const resetarVariaveis = () => {
  movimentoJogador1 = "";
  movimentoJogador2 = "";
  vencedor = null;
};

const resetarPlacar = () => {
  $pontuaçãoJogador1.innerHTML = "0";
  $pontuaçãoJogador2.innerHTML = "0";
};

const resetarPontos = () => {
  jogador1 = 0;
  jogador2 = 0;
};
const resetarNomeVencedor = () => {
  $NomeVencedor.innerHTML = "Vencedor";
};

const resetarTudo = () => {
  resetarCampo();
  resetarPlacar();
  resetarVariaveis();
  resetarPontos();
  resetarNomeVencedor();
};

$botãoPedra1.addEventListener("click", function () {
  if (jogo == false) return;
  $campo1.innerHTML = '<img src="./src/img/stone.png" class="imagem-jogada">';
  movimentoJogador1 = "pedra";
  JogadorVencedor();
  if (vencedor != null) {
    imprimirNomeDoGanhador(vencedor);
    pontos(vencedor);
    imprimirPontos(vencedor);
    setTimeout(resetarCampo, 1500);
    resetarVariaveis();
  }
});
$botãoPapel1.addEventListener("click", function () {
  if (jogo == false) return;
  $campo1.innerHTML = '<img src="./src/img/paper.png" class="imagem-jogada">';
  movimentoJogador1 = "papel";
  JogadorVencedor();
  if (vencedor != null) {
    imprimirNomeDoGanhador(vencedor);
    pontos(vencedor);
    imprimirPontos(vencedor);
    setTimeout(resetarCampo, 2000);
    resetarVariaveis();
  }
});
$botãoTesoura1.addEventListener("click", function () {
  if (jogo == false) return;
  $campo1.innerHTML =
    '<img src="./src/img/scissors.png" class="imagem-jogada">';
  movimentoJogador1 = "tesoura";
  JogadorVencedor();
  if (vencedor != null) {
    imprimirNomeDoGanhador(vencedor);
    pontos(vencedor);
    imprimirPontos(vencedor);
    setTimeout(resetarCampo, 2000);
    resetarVariaveis();
  }
});
$botãoPedra2.addEventListener("click", function () {
  if (jogo == false) return;
  $campo2.innerHTML = '<img src="./src/img/stone.png" class="imagem-jogada">';
  movimentoJogador2 = "pedra";
  JogadorVencedor();
  if (vencedor != null) {
    imprimirNomeDoGanhador(vencedor);
    pontos(vencedor);
    imprimirPontos(vencedor);
    setTimeout(resetarCampo, 2000);
    resetarVariaveis();
  }
});
$botãoPapel2.addEventListener("click", function () {
  if (jogo == false) return;
  $campo2.innerHTML = '<img src="./src/img/paper.png" class="imagem-jogada">';
  movimentoJogador2 = "papel";
  JogadorVencedor();
  if (vencedor != null) {
    imprimirNomeDoGanhador(vencedor);
    pontos(vencedor);
    imprimirPontos(vencedor);
    setTimeout(resetarCampo, 2000);
    resetarVariaveis();
  }
});
$botãoResetar.addEventListener("click", resetarTudo);

$botãoTesoura2.addEventListener("click", function () {
  if (jogo == false) return;
  $campo2.innerHTML =
    '<img src="./src/img/scissors.png" class="imagem-jogada">';
  movimentoJogador2 = "tesoura";
  JogadorVencedor();
  if (vencedor != null) {
    imprimirNomeDoGanhador(vencedor);
    pontos(vencedor);
    imprimirPontos(vencedor);
    setTimeout(resetarCampo, 2000);
    resetarVariaveis();
  }
});
$botãoIniciar.addEventListener("click", function () {
  if (jogo == false) {
    jogo = true;
    $botãoIniciar.innerHTML = "Parar";
    $botãoIniciar.classList.add("botão-ativo");
  } else if (jogo == true) {
    jogo = false;
    $botãoIniciar.innerHTML = "Iniciar";
    $botãoIniciar.classList.remove("botão-ativo");
  }
});
