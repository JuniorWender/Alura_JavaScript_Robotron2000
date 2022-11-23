const controle = document.querySelectorAll('[data-controle]');
const estatisticas = document.querySelectorAll('[data-estatistica]')
const pecas = {
    "Arms": {
        "Strength": 29,
        "Power": 35,
        "Energy": -21,
        "Speed": -5
    },

    "Shield": {
        "Strength": 41,
        "Power": 20,
        "Energy": 0,
        "Speed": -20
    },
    "Core":{
        "Strength": 0,
        "Power": 7,
        "Energy": 48,
        "Speed": -24
    },
    "Legs":{
        "Strength": 27,
        "Power": 21,
        "Energy": -32,
        "Speed": 42
    },
    "Rockets":{
        "Strength": 0,
        "Power": 28,
        "Energy": 0,
        "Speed": -2
    }
}

controle.forEach( element =>{
    element.addEventListener("click", event =>{
        manipulaDados(event.target.dataset.controle, event.target.parentNode);
        atualizaEstatisticas(event.target.dataset.peca);
    })
})

document.querySelector("#robotron").addEventListener("click", () =>{
    alert('Robotron Operante');
});

function manipulaDados(operacao, controle){
    const peca = controle.querySelector('[data-contador]')

    if(operacao === "+"){
        if(peca.value < 10)
            peca.value = parseInt(peca.value) + 1;
    }
    else{
        if(peca.value > 0 )
            peca.value = parseInt(peca.value) - 1;
    }
}

function atualizaEstatisticas(peca) {
    estatisticas.forEach( element => {
        element.textContent = parseInt(element.textContent) + pecas[peca][element.dataset.estatistica];
    })
}
