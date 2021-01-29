class CobrasEscadas {

    constructor() {
        this.posicaoJogadores = [0, 0];
        this.jogadorAtual = this.sortearJogador();
        this.mensagemFimRodada = '';
        this.desvios =
        {
            2: 38,
            7: 14,
            8: 31,
            15: 26,
            16: 6,
            21: 42,
            28: 84,
            36: 44,
            46: 25,
            49: 11,
            51: 67,
            62: 19,
            64: 60,
            71: 91,
            74: 53,
            78: 98,
            87: 94,
            89: 68,
            92: 88,
            95: 75,
            99: 80
        };

        this.posicoesDesvio = Object.keys(this.desvios);
    }

    jogar(dado1, dado2) {
        this.mensagemFimRodada = '';
        const soma = dado1 + dado2;
        const atual = this.jogadorAtual

        let posJogador = this.posicaoJogadores[atual]
        posJogador += soma;

        if (posJogador === 100) {
            this.mensagemFimRodada = `O jogador ${atual + 1} chegou na posição 100 e venceu a partida`;
            return 1;
        }

        if (posJogador > 100) {
            const sobra = posJogador - 100;
            posJogador = 100 - sobra;
        }

        this.posicaoJogadores[atual] = posJogador;
        this.verificaDesvio(posJogador, atual);

    }

    verificaDesvio(posicaoOrigem, jogador) {

        if (this.posicoesDesvio.includes(posicaoOrigem.toString())) {
            const destino = this.desvios[posicaoOrigem];

            if (destino > posicaoOrigem)
                this.mensagemFimRodada = `Escada! Você pulou da posição ${posicaoOrigem} até a posição ${destino}`;
            else
                this.mensagemFimRodada = `Cobra!Que pena, você voltou da posição ${posicaoOrigem} para a posição ${destino}`;

            this.posicaoJogadores[jogador] = destino;
        }
    }
    rolarDado() {
        const min = 1;
        const max = 6;
        return Math.floor(Math.random() * (max - min + 1) + min);
    }

    sortearJogador() {
        const min = 0;
        const max = 1;
        this.jogadorAtual = Math.floor(Math.random() * (max - min + 1) + min);
    }

    trocarJogador() {
        if (this.jogadorAtual === 0)
            this.jogadorAtual = 1;
        else
            this.jogadorAtual = 0;
    }
}

/** Eventos de front end */

const buttonIniciar = document.querySelector('#iniciar');
const content = document.querySelector('.container');
const instrucao = document.querySelector('.instrucao');

const cobrasEscadas = new CobrasEscadas();
let dado1;
let dado2;

buttonIniciar.addEventListener('click', event => {
    criarJogadorDom(0);
    criarJogadorDom(1);
    criarButtonJogar();
    criarVezDom();
    criarDadosResultadoDom();
});


function criarJogadorDom(idJogador) {
    
    const jogador = document.createElement('p');
    const labelJogador = document.createElement('strong');

    labelJogador.innerText = 'Pontuação do Jogador ' + (idJogador + 1) + ': ';
    jogador.appendChild(labelJogador);

    const pontosDoJogador = document.createElement('span'); 

    pontosDoJogador.setAttribute('id', 'posicaoJogador' + idJogador);
    pontosDoJogador.innerText = '0';
    jogador.appendChild(pontosDoJogador);

    content.appendChild(jogador);
    instrucao.innerText = 'Clique em Jogar para rolar os dados'
    buttonIniciar.remove();
}

function criarButtonJogar() {
    const buttonJogar = document.querySelector('#jogar');

    buttonJogar.innerText = 'Jogar';
    buttonJogar.addEventListener('click', onClickJogar)
    content.appendChild(buttonJogar);
}

function onClickJogar(event) {
    event.preventDefault();
    dado1 = cobrasEscadas.rolarDado();
    dado2 = cobrasEscadas.rolarDado();
    const fimRodada = cobrasEscadas.jogar(dado1, dado2);

    mudarDadosResultado();
    mudarPosicaoJogadorDom(0);
    mudarPosicaoJogadorDom(1);
    if (fimRodada === 1) {
        alert(cobrasEscadas.mensagemFimRodada);
        document.location.reload();
    }

    if (cobrasEscadas.mensagemFimRodada) {
        exibirMensagem(cobrasEscadas.mensagemFimRodada)
    }
    if ((dado1 === dado2) && fimRodada !== 1)
        exibirMensagem(`O jogador ${cobrasEscadas.jogadorAtual + 1} tem uma nova jogada`)
    else cobrasEscadas.trocarJogador();
    mudarVezDom();
}

function criarVezDom() {
    cobrasEscadas.sortearJogador();
    const vezDom = document.createElement('p');

    vezDom.innerText = 'Vez do jogador ' + (cobrasEscadas.jogadorAtual + 1);
    vezDom.setAttribute('id', 'vez')
    vezDom.style.color = 'green';
    content.appendChild(vezDom);
}

function criarDadosResultadoDom() {
    const dadosResultado = document.createElement('p');

    dadosResultado.innerText = `Resultado: `;
    dadosResultado.setAttribute('id', 'dadosResultado')
    dadosResultado.style.color = 'blue';
    content.appendChild(dadosResultado);
}

function mudarDadosResultado() {
    const dadosResultado = document.querySelector('#dadosResultado');
    dadosResultado.innerText = `Resultado: ${dado1} + ${dado2} = ${dado1 + dado2}`
}

function mudarVezDom() {
    const vezDom = document.querySelector('#vez');
    vezDom.innerText = 'Vez do jogador ' + (cobrasEscadas.jogadorAtual + 1);
}

function mudarPosicaoJogadorDom(idJogador) {
    const posJogadorDom = document.querySelector('#posicaoJogador' + idJogador);
    posJogadorDom.innerText = cobrasEscadas.posicaoJogadores[idJogador];
}

function exibirMensagem(mensagem) {
    setTimeout(() => {
        alert(mensagem)
    }, 200)
}

