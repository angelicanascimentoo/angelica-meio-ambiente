export const perguntas = [
    {
        enunciado: "Você costuma reciclar seu lixo?",
        alternativas: [
            {
                texto: "Sim",
                afirmacao: [
                "muito bem! continue reciclando seu lixo para ajudar o meio ambiente.",
                "incrivel! continue assim."
                ], 
                proxima: 1,                                                                                                                    
            },
            {
                texto: "Não",
                afirmacao: [
                 "Você deveria começar a reciclar seu lixo, para ajudar o meio ambiente.",
                 "opa opa opa, você deveria começar a reciclar seu lixo."
                ],
                proxima: 2,
            },
           
        ]
    },
    {
        enunciado: "Quais são as principais ameaças á biodiversidade global?",
        alternativas: [{
            texto: "O desmatamento, exploração excessiva de recursos, presença de espécies invasoras e a contaminação ambiental",
            afirmacao: [
           "O desmatamento e a exploração indiscriminada de recursos naturais são fatores que agravam a contaminação ambiental e favorecem a disseminação de espécies invasoras.",
           "muito bem! sua resposta está correta."
            ], 
            proxima: 7,
        },
        {
            texto: "As principais ameaças á biodiversidade global são a melhoria das condições de vida humana e o aumento da área de reservas naturais",
            afirmacao: [
            "As principais ameaças á biodiversidade global resultam das atividades humanas e da destruição de habitats naturais, que comprometem a sobrevivência de inúmeras espécies.",
            "Você deveria refletir sobre a sua resposta, pois está errada"
            ],
            proxima: 7,
        }

        ]
    },
    {
        enunciado: "Quais são os principais gases do efeito estufa e suas fontes?",
        alternativas: [
            {
                texto: "O dióxido de carbono (CO2), o metano e o óxido nitroso",
                afirmacao: [
                "O dióxido de carbono (Co2), o metano (CH4) e o óxido nitroso (N20) são gases de efeito estufa que contribuem significativamente para o aquecimento global.",
                "muito bem! você está certa."
                ],
                proxima: 7,
            },
            {
                texto: "Oxigênio, o hidrogênio e o hélio",
                afirmacao: [
                "O oxigênio, o hidrogênio e o hélio são elementos químicos fundamentais, cada um com propriedades únicas e importantes para diversos processos naturais e industriais",
                "ops! resposta errada."
                ],
                proxima: 7,
            }

        ]
    },
    {
        enunciado: "Quais são os principais impactos do plástico no meio ambiente?",
        alternativas: [
            {
                texto: "Ajuda a fertilizar o solo, melhora a qualidade do ar e proporciona habitats seguros para várias espécies de animais aquáticos",
                afirmacao: [
                "A restauraação de ecossistemas aquáticos ajuda a fertilizar o solo, melhora a qualidade do ar e proporciona habitats seguros para várias espécies de animais.",
                "poxa, você errou!"
                ],
                proxima: 7,
            },
            {
                texto: "Proliferam-se os lixões a céu aberto, contaminando a água dos rios e lençóis freáticos",
                afirmacao:[
                 "Os lixões a céu aberto proliferam, contaminando a água dos rios e lençóis freáticos.",
                 "Você é um gênio!"
                ],
                proxima:7,
            }

        ]
    },
    {
        enunciado: "Como a poluição sonora afeta os seres humanos e a vida selvagem?",
        alternativas: [
            {
                texto: "O ruído pode pertubar os padrões de reprodução, aleitamento e, inclusive, contribuir para a extinção de algumas espécies",
                afirmacao: [
                "o ruído pode afetar negativamente os padrões de reprodução e aleitamento, contribuindo até mesmo para a extinção de certas espécies",
                "muito bem! vocẽ está certíssimo parabéns"
                ],
            },
            {
                texto: "A poluição sonora não afeta a vida selvagem nem dos seres humanos, muitos animais se adaptam e até prosperam em ambientes barulhentos, e os seres humanos não tem nenhum impacto negativo na saúde",
                afirmacao: [
                "A poluição sonora afeta muito os animais e os seres humanos também",
                "vish, essa passou longe!"
                ],
            }

        ]
    },
];