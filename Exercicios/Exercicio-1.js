/* Crie uma função que retorna a string "Olá, " concatenada com um argumento text (a ser passado para a função) e
com ponto de exclamação "!" no final.*/

function concatenar(texto) {
  // return 'Olá, ' + texto + '!'
  return `Olá, ${texto}!`
}

console.log(concatenar('Mundo'))
