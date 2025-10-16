// var frutas = ["Abacate", "Abacaxi", "Banana", "Caju", "Manga", "Uva", "Kiwi", "Melância", "Pera", "maçã"];

// // length -> conta a quantidade de itens do meu Array
// document.write(`A quantidade e frutas é: ${frutas.length}<hr>`);

// // Retornar o primeiro item do meu Array
// document.write(`Primeiro item do meu array: ${frutas[0]}<hr>`);

// // Acessar um item do meu array
// document.write(`Qualquer do meu array: ${frutas[1]}<hr>`);

// // Acessar o último item do meu array
// document.write(`Último item do meu array: ${frutas[frutas.length-1]} <hr>`);

// // Adicionar um item no inicio do array
// frutas.unshift("Pêssego");

// // Adicionar um item ao final do array
// frutas.push("Morango");

// // Remover um item no inicio do array
// frutas.shift();

// // Remover um item do final do array
// frutas.pop();

// // Remover itens apartir da posição até o final 
// frutas.splice(4, 3);

// // Ler um array
// frutas.forEach(function(item, indice, array){
//     document.write(`${item},<hr> ${indice}<hr>`)
// })

// Crie um array chamado carros co 10 itens com push, pop, unshift,
//  shift splice  com funções acima, faça as alterações para um percorra 
//  todo o array e retorne os valores atribuidos usando(FOREACH)

var carros = ["Fiat", "Volkswagen Polo", "Hyundai", "HB20", "Savero", "Toyota", "Corolla", "Chevrolet", "Mobi", "Renault"];


carros.push("Corolla");

carros.pop();

carros.unshift("Hyundai");

carros.shift();

carros.splice(4, 3);

carros.forEach(function(item, indice, array){
     document.write(`${item}, - ${indice} <br>`)

    });

