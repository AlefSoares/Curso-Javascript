/* 

Crie uma função que recebe um array de números e retorna o segundo maior número presente nesse array.

*/

function segundoMaior(numeros) {
  const numerosOrdenados = numeros.sort((numeroA, numeroB) => numeroB - numeroA)
  const segundoMaior = numerosOrdenados[1]

  return segundoMaior
}
