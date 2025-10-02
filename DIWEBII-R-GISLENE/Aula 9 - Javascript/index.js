// console.log('Gislene Aparecida Oliveira Silva');
// console.log('Gislene "Aparecida" "Oliveira" Silva');
// console.log( ´Gislene "Aparecida" 'Oliveira' Silva´);
// console.log(123456789);

// console.log(´Meu nome é "Gislene", estou aprendendo javascript agora, e são exatamente 20:09, 'da noite');

// tipo de variaeis 
// // var - está em desuso
// let nome = "João";
// let nome1 = "Maria";
// let nome3 = "Eduardo";

// let data1 = 1984;
// let data2 = 2000;
// let data3 = 2012;
// let data4 = 2015;

// console.log(`${nome}, nasceu em ${data1} .`);
// console.log(`Em ${data2} , ${nome} conheceu ${nome1} .`);
// console.log(`${nome} casou-se com ${nome} em ${data3} .`);
// console.log(`${nome1} teve 1 filho com ${nome} em ${data4} .`);
// console.log(`o filho de ${nome} se chama  ${nome2} .`);



// tipos de dados
// string - são um conjunto de caracteres que formam palavras que formam textos
// number - valores numéricos / numeros inteiros ou pontos flutuantes com casas decimais.
// boolean - representação lógica - verdadeiro ou falso
// const valor = false; true or false
// BigInt - representa números inteiros com valores muito altos
// undefined - um valor na variável que não foi declaraddo 
// let valor;
// null = representa uma variável que não tem valor ou que foi exvasiada

// (Gislen Aparecida Oliveira Silva tem xx AnalyserNode,)
// (pesa 75kg, tem 4,65 de altura e seu)
// (IMC é de ...)
// (Gislen Aparecida nasceu em ----)

// const nome = 'Gislene Aparecida';
// const sobreNome = 'Oliveira Silva';
// const idade = xx;
// const peso = 75;
// const altura = 1.75;
// let imc;// peso / (altura *altura>)
// let dataNascimento;

// imc= peso / (altura * altura);
// console.log(imc);

// imc = peso / (altura * altura);
// console.log(imc);
// dataNascimento = 2025 - idade
// console.log(dataNascimento);

// console.log(`${nome} #{sobrenome} tem ${idade}  anos `);
// console.log(`e pesa ${peso} kg`);

// var nome_aluno = 'Gislene';
// var idade = 50;
// var curso = 'TI';

// document.write(`O aluno ${nome_aluno}, tem ${idade} anos e cursa a disciplina de ${curso}.`);

// // operações
// var numeroUm = 10;
// var numeroDois = 5;

// var resultadoAdicao = numeroUm + numeroDois;
// document.write(`O valor da operação é: ${soma} <br>`);

// var numeroUm = 20;
// var numeroDois = 15;

// var subtracao = numeroTres + numeroQuatro;
// document.write(`O valor da operação é: ${subtracao}<br>`);

// var numeroUm = 50;
// var numeroDois = 30;

// var multiplicacao = numeroCinco + numeroSeis;
// document.write(`O valor da operação é: ${multiplicacao} <br>`);

// var divisao = numeroUm + numeroDois;

// var resultadoAdicao = numeroUm + numeroDois;
// document.write(`O valor da operação é: ${divisao}`);

// var restoDivisao = numeroUm + numeroDois;
// doculment.write(`O valor da operação é: ${restoDivisao}`);

// oparações de Comparação
// == -> iaual a
// != -> diferente de
// < -> menor que
// > -> maior que 
// <= -> menor ou igual a que
// => -> maior ou igual a que

document.write("<h3> operador de comparação: igual a </h3>")
var valor1 = 9;
var valor2 = 8;

if(valor1 == valor2){
document.write(`${valor1} é igual a ${valor2}.`);
}else{
 document.write(`${valor1} é diferente a ${valor2}`);
}

document.write("<h3> operador de comparação: diferente de </h3>")
if(valor1 != valor2){
     document.write(`${valor1} é diferente de ${valor2}.`);
}else{
     document.write(`${valor1} é igual a ${valor2}`);
     
}
if(valor1 != valor2){
    document.write(`${valor1} é diferente de ${valor2}.`);
}else{
    document.write(`${valor1} é igual a ${valor2}`);
    
}

document.write("<h3> operador de comparação: menor que </h3>")
if(valor1 < valor2){
    document.write(`${valor1} é menor que ${valor2}.`);
}else{
    document.write(`${valor1} é maior que ${valor2}`);
    
}


document.write("<h3> operador de comparação: maior que  </h3>")
if(valor1 > valor2){
    document.write(`${valor1} é maior ou igual a que ${valor2}.`);
}else{
    document.write(`${valor1} é menor que ${valor2}`);
    
}


document.write("<h3> operador de comparação: menor ou igual a que  </h3>")
if(valor1 <= valor2){
    document.write(`${valor1} é menor ou igual a  ${valor2}.`);
}else{
    document.write(`${valor1} é maior que ${valor2}`);
    
}


document.write("<h3> operador de comparação: maior ou igual a que  </h3>")
if(valor1 >= valor2){
    document.write(`${valor1} é maior ou igual a ${valor2}.`);
}else{
    document.write(`${valor1} é menor que ${valor2}`);
    
}
