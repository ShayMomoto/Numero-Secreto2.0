let titulo = document.querySelector(`h1`);
titulo.innerHTML = 'Hora do desafio';
// Exibir uma mensagem no console toda vez que clicar no botão "Console"
function verificarConsole(){
    console.log ('O botão foi clicado');
}
// Exibir um alert ao clicar no botão "alert"
function exibirAlert(){
    alert('Eu amo JS');
}
//Exibir um alert quando clicar no botão "prompt" perguntando um nome de cidade Brasileira.
function exibirPrompt(){
    let nomeDaCidade = prompt ('Digite o nome de uma cidade do Brasil que você gosta muito:');
    alert (`Estive em ${nomeDaCidade} e lembrei de você`);
}
//Exibir alerts perguntando dois numeros e fazendo a soma e exibindo logo em seguida o resultado.
function somaDoisNumeros(){
    let primeiroNumero = parseInt (prompt('Digite o primeiro numero'));
    let segundoNumero = parseInt (prompt('Digite o segundo Numero'));
    let resultado = primeiroNumero + segundoNumero;
    alert (`${primeiroNumero} + ${segundoNumero} = ${resultado}`);
}