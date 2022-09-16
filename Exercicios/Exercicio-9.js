/*
Crie uma função que receba uma array e retorne o primeiro e o último elemento desse array como um novo array:
 */

function primeiroUltimo(listaRec) {
  const primeiro = listaRec[0]
  const ultimo = listaRec[listaRec.length - 1]

  return [primeiro, ultimo]
}

console.log(primeiroUltimo(['Maçã', 'Banana', 'Laranja']))
console.log(primeiroUltimo([
  'janeiro',
  'Fevereiro',
  'Março',
  'Abril',
  'Maio',
  'Junho',
  'Julho',
  'Agosto',
  'Setembro',
  'Outubro',
  'Novembro',
  'Dezembro'
]))
