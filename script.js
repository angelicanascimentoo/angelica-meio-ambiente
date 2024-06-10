const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você costuma reciclar seu lixo?",
        alternativas: [
            "Sim",
            "Não"
        ]
    },
    {
        enunciado: "Quais são as principais ameaças á biodiversidade global?",
        alternativas: [
            "O desmatamento, exploração excessiva de recursos, presença de espécies invasoras e a contaminação ambiental",
            "As principais ameaças á biodiversidade global são a melhoria das condições de vida humana e o aumento da área de reservas naturais"
        ]
    },
    {
        enunciado: "Quais são os principais gases do efeito estufa e suas fontes?",
        alternativas: [
            "O dióxido de carbono (CO2), o metano e o óxido nitroso",
            "Oxigênio, o hidrogênio e o hélio"
        ]
    }, 
    {
        enunciado: "Quais são os principais impactos do plástico no meio ambiente?",
        alternativas: [
            "Ajuda a fertilizar o solo, melhora a qualidade do ar e proporciona habitats seguros para várias espécies de animais aquáticos",
            "Proliferam-se os lixões a céu aberto, contaminando a água dos rios e lençóis freáticos"
        ]
    },
    {
        enunciado: "Como a poluição sonora afeta os seres humanos e a vida selvagem?",
        alternativas: [
            "O ruído pode pertubar os padrões de reprodução, aleitamento e, inclusive, contribuir para a extinção de algumas espécies",
            "A poluição sonora não afeta a vida selvagem nem dos seres humanos, muitos animais se adaptam e até prosperam em ambientes barulhentos, e os seres humanos não tem nenhum impacto negativo na saúde"
        ]
    },
];

let atual = 0;
let perguntaAtual;

function mostraPergunta() {
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
}

mostraPergunta();