/* 

Elabore uma função que recebe dois parâmetros: o primeiro é um array de números e o segundo é um número
que especifica uma quantidade de dígitos. Essa função deverá retornar somente aqueles números do array que
têm a quantidade de dígitos indicada pelo segundo parâmetro.

*/

function filtrarPorQuantidadeDeDigitos(listaNumeros, qteDesejada) {
  let resultado = []

  for (numero of listaNumeros) {
    const qteDigitos = String(numero).length

    if (qteDigitos === qteDesejada) {
      resultado.push(numero)
    }    
  }
  return resultado
}

console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 2))
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1))
