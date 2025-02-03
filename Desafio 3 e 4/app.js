//Desafio 3

//Crie uma função que calcule o índice de massa corporal (IMC) de uma pessoa, a partir de sua altura, em metros, e peso, em quilogramas, que serão recebidos como parâmetro:
function calculaIMC(altura, peso){
    let imc = peso / (alturaMetros * alturaMetros);
}

//Crie uma função que calcule o valor do fatorial de um número passado como parâmetro.

function calcularFatorial(numero) {
    if (numero === 0 || numero === 1) {
      return 1;
    }
  
    let fatorial = 1;
    for (let i = 2; i <= numero; i++) {
      fatorial *= i;
    }
  
    return fatorial;
  }
 
  let numero = 26;
  let resultado = calcularFatorial(numero);
  console.log(`O fatorial de ${numero} é ${resultado}`);

  //Crie uma função que converte um valor em dólar, passado como parâmetro, e retorna o valor equivalente em reais. Para isso, considere a cotação do dólar igual a R$ 4,80.
  function converterDolarParaReal(valorEmDolar){
    let cotacaoDolar = 4.80;
    let valorEmReal = valorEmDolar * cotacaoDolar;
    return valorEmReal.toFixed(2);
   }
 let valorEmDolar = 300;
 let valorEmReal = converterDolarParaReal(valorEmDolar);
 console.log(`${valorEmDolar} dólares equivalem a R$ ${valorEmReal}`);

//Crie uma função que mostre na tela a área e o perímetro de uma sala retangular, utilizando altura e largura que serão dadas como parâmetro.
function calcularAreaSalaRetangular(altura, largura){
    let area = altura * largura;
    let perimetro = 2 * (altura + largura);

    console.log(`Área da sala: ${area} metros quadrados`);
    console.log(`Perimetro sala: ${perimetro} metros`);

}

let altura = 5;
let largura = 7;
calcularAreaSalaRetangular(altura, largura);

//Crie uma função que mostre na tela a área e o perímetro de uma sala circular, utilizando seu raio que será fornecido como parâmetro. Considere Pi = 3,14.

function calcularSalaCircular (raio){
    let area = Math.PI * raio * raio;
    let perimetro = 2 * Math.PI * raio;

    console.log (`Área da sala circular: ${area.toFixed(2)} metros quadrados`);
    console.log (`Perimetros da sala circular: ${perimetros.toFixed(2)} metros`);
}
let raio = 8;
calcularSalaCircular(raio);

//Crie uma função que mostre na tela a tabuada de um número dado como parâmetro.
function mostrarTabuada(tabuada) {
    for (let i = 1; i <= 10; i++) {
        let resultado = tabuada * 1;
        console.log(`${tabuada} x ${i} = ${resultado}`);
    }
}
 let tabuada = 9;

 //Desafio 4

 //Crie uma lista vazia, com o nome listaGenerica.
 let listaGenerica = [];

 //Crie uma lista de linguagens de programação chamada linguagensDeProgramacao.

let linguagensDeProgramacao = ['Javascript', 'c', 'c++', 'Python'];

//Adicione à lista linguagensDeProgramacao os seguintes elementos: Java, Ruby e GoLang.
let linguagensDeProgramacao = ['Javascript', 'c', 'c++', 'Python'];
linguagensDeProgramacao.push('java', 'ruby', 'GoLang')

//Crie uma lista com 3 nomes e exiba no console apenas o primeiro elemento.
nome = ['Javascript', 'Python', 'Go'];
console.log(nome[0]);

//Crie uma lista com 3 nomes e exiba no console apenas o segundo elemento.
nome = ['Javascript', 'Python', 'Go'];
console.log(nome[1]);

//Crie uma lista com 3 nomes e exiba no console apenas o último elemento.
nome = ['Javascript', 'Python', 'Go'];
console.log(nome[3]);