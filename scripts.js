var primVal = parseInt(prompt("Digite o primeiro valor:"))

var segVal = parseInt(prompt("Digite o segundo valor:"))


var operacao = prompt('Escolha a operação. 1: Divisão, 2: Multiplicação, 3: Soma, 4: Subtração.')

if (operacao == 1) {
  var resultado = primVal / segVal
  document.write("<h2>" + primVal + " / " + segVal + " = " + resultado + "</h2>")
} else if (operacao == 2) {
  var resultado = primVal * segVal
  document.write("<h2>" + primVal + " X " + segVal + " = " + resultado + "</h2>")
} else if (operacao == 3) {
  var resultado = primVal + segVal
  document.write("<h2>" + primVal + " + " + segVal + " = " + resultado + "</h2>")
} else if (operacao == 4) {
  var resultado = primVal - segVal
  document.write("<h2>" + primVal + " - " + segVal + " = " + resultado + "</h2>")
} else {
  document.write("<h2>Opção Inválida</h2>")
}
