/* Crie uma função que receba um array de elementos e retorne um array somente com os números presentes no
array recebido como parâmetro.

*/

function paresDeIndicesPares(lista_Num) {
  let resultado = []

  for (let i = 0; i <= lista_Num.length; i += 2) {
    const numeroPar = lista_Num[i] % 2 === 0
    if (numeroPar) {
      resultado.push(lista_Num[i])
    }
  }

  return resultado
}

console.log(paresDeIndicesPares([1, 2, 3, 4]))
console.log(paresDeIndicesPares([10, 70, 22, 43]))
