/* Escreva uma função que receba dois parâmetros. O primeiro parâmetro é o elemento que repetirá, enquanto que
o segundo será o número de vezes que haverá repetição. Um array será retornado.

 */

function repeticao(item, qtd) {
  let resultado = []
  for (let i = 0; i <= qtd; i++) {
    resultado.push(item)
  }
  return resultado
}

console.log(repeticao('Jesus', 5))
console.log(repeticao(8, 5))
