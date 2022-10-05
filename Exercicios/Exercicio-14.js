/* 
Escreva uma função que receba um array de números e retornará a soma de todos os números desse array.

*/

function SomaNumerosDaLista(lista) {
  let soma = 0

  lista.forEach(element => {
    soma += element
  })

  return soma
}

console.log(SomaNumerosDaLista([10, 10, 10]))
console.log(SomaNumerosDaLista([15, 15, 15, 15]))
