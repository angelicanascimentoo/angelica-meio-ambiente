const caixaPrincipal = document.querySelector(".caixa-principal");
const caixaPerguntas = document.querySelector(".caixa-perguntas");
const caixaAlternativas = document.querySelector(".caixa-alternativas");
const caixaResultado = document.querySelector(".caixa-resultado");
const textoResultado = document.querySelector(".texto-resultado");

const perguntas = [
    {
        enunciado: "Você costuma reciclar seu lixo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: "afirmacao"
            },
            {
                texto: "Não",
                afirmacao: "afirmacao"
            }
                 
        ]
    },
    {
        enunciado: "Quais são as principais ameaças á biodiversidade global?",
        alternativas: [ {
            texto: "O desmatamento, exploração excessiva de recursos, presença de espécies invasoras e a contaminação ambiental",
            afirmacao: "afirmacao"
        },
        {
            texto: "As principais ameaças á biodiversidade global são a melhoria das condições de vida humana e o aumento da área de reservas naturais",
            afirmacao: "afirmacao"
        } 
           
        ]
    },
    {
        enunciado: "Quais são os principais gases do efeito estufa e suas fontes?",
        alternativas: [
            {
                texto: "O dióxido de carbono (CO2), o metano e o óxido nitroso",
                afirmacao: "afirmacao"
            },
            {
                texto: "Oxigênio, o hidrogênio e o hélio",
                afirmacao: "afirmacao"
            }
            
        ]
    }, 
    {
        enunciado: "Quais são os principais impactos do plástico no meio ambiente?",
        alternativas: [
            {
                texto:  "Ajuda a fertilizar o solo, melhora a qualidade do ar e proporciona habitats seguros para várias espécies de animais aquáticos",
                afirmacao: "afirmacao"
            },
            {
                texto:  "Proliferam-se os lixões a céu aberto, contaminando a água dos rios e lençóis freáticos",
                afirmacao:"afirmacao"
            } 
           
        ]
    },
    {
        enunciado: "Como a poluição sonora afeta os seres humanos e a vida selvagem?",
        alternativas: [
            {
                texto: "O ruído pode pertubar os padrões de reprodução, aleitamento e, inclusive, contribuir para a extinção de algumas espécies",
                afirmacao:"afirmcao"
            },
            {
            texto: "A poluição sonora não afeta a vida selvagem nem dos seres humanos, muitos animais se adaptam e até prosperam em ambientes barulhentos, e os seres humanos não tem nenhum impacto negativo na saúde",
                afirmacao:"afirmacao"
            }   
            
        ]
    },
];


let atual = 0;
let perguntaAtual;
let historiaFinal = "";

function mostraPergunta() {
    if(atual >= perguntas.length){
        mostraResultado();
        return;
    }
    perguntaAtual = perguntas[atual];
    caixaPerguntas.textContent = perguntaAtual.enunciado;
    caixaAlternativas.textContent = "";
    mostraAlternativas();
}

function mostraAlternativas(){
    for(const alternativa of perguntaAtual.alternativas){
        const botaoAlternativas = document.createElement("button");
        botaoAlternativas.textContent = alternativa.texto;
        botaoAlternativas.addEventListener("click", () => respostaSelecionada(alternativa));
        caixaAlternativas.appendChild(botaoAlternativas);
    }
}

function respostaSelecionada(opcaoSeleconada){
    const afirmacoes = opcaoSeleconada.afirmacoes;
    historiaFinal += afirmacoes + " ";
    atual++;
    mostraPergunta();
}

function mostraResultado(){
    caixaPerguntas.textContent = "Em 2024...";
    textoResultado.textContent = historiaFinal;
    caixaAlternativas.textContent= "";
}

mostraPergunta();