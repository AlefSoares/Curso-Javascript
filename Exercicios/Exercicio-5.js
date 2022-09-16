/*Crie uma função que receba dois números e retorne se o primeiro é maior ou igual ao segundo. Deverá diferenciar
números de strings. */

function maiorOuIgual(n1, n2) {
  if (n1 >= n2) {
    return true
  } else if (n1 === Number && n2 === Number) {
    return true
  } else {
    return false
  }
}

console.log(maiorOuIgual(0, 5))
