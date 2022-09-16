/* Elabore uma função que recebe um número como parâmetro e retorne uma string com o símbolo "+" na
quantidade especificada no parâmetro.
*/

function simboloMais(valor) {
  let resultado = ''
  for (let i = 0; i < valor; i++) {
    resultado += '+'
  }
  return resultado
}

console.log(simboloMais(2))
console.log(simboloMais(5))

console.log("...................................")

function simboloMais(quantidade) {
  return '+'.repeat(quantidade)
}

console.log(simboloMais(3))
