function ConverterMoeda(){
  const fatorConversaoMoeda = {realDolar:0.181818182, realLibra:0.131233596, realReal:1.00, dolarReal:5.5, dolarLibra:0.729927007, dolarDolar:1.0, libraReal:7.62, libraDolar:1.37, libraLibra:1.0};
  var valor = parseFloat(document.getElementById("inputValor").value);
  var valorConvertido = "";
  var tipoDeFator = document.getElementById("selectPaisOrigem").value + document.getElementById("selectPaisDestino").value;
  
  switch (tipoDeFator){
    case 'realDolar':
      valorConvertido = "U$" + (valor * fatorConversaoMoeda.realDolar).toFixed(2);
      break;
    case 'realLibra':
      valorConvertido = "£" + (valor * fatorConversaoMoeda.realLibra).toFixed(2);
      break;
    case 'realReal':
      valorConvertido = "R$ " + (valor * fatorConversaoMoeda.realReal).toFixed(2);
      break;
    case 'dolarReal':
      valorConvertido = "R$" + (valor * fatorConversaoMoeda.dolarReal).toFixed(2);
      break;
    case 'dolarLibra':
      valorConvertido = "£" + (valor * fatorConversaoMoeda.dolarLibra).toFixed(2);
      break;
    case 'dolarDolar':
      valorConvertido = "U$" + (valor * fatorConversaoMoeda.dolarDolar).toFixed(2);
      break;
    case 'libraReal':
      valorConvertido = "R$" + (valor * fatorConversaoMoeda.libraReal).toFixed(2);
      break;
    case 'libraDolar':
      valorConvertido = "U$" + (valor * fatorConversaoMoeda.libraDolar).toFixed(2);
      break;
    case 'libraLibra':
      valorConvertido = "£" + (valor * fatorConversaoMoeda.libraLibra).toFixed(2);
      break;
  }
  document.getElementById("labelREsultado").innerText = valorConvertido;
  return;
};

/*
var filterFloat = function (value) {
    if(/^(\-|\+)?([0-9]+(\.[0-9]+)?|Infinity)$/
      .test(value))
      return Number(value);
  return NaN;
}

var filterInt = function (value) {
  if(/^(\-|\+)?([0-9]+|Infinity)$/.test(value))
    return Number(value);
  return NaN;
}

var valorEmDolarTexto = prompt("Qual o Valor em dolar que você quer converter?")
var valorEmDolarNumero = parseFloat(valorEmDolarTexto)
var valorEmReal = valorEmDolarNumero * 5.50
var valorEmRealFixado = valorEmReal.toFixed(2)
alert("R$ " + valorEmRealFixado)
*/
// Revisão
// Variáveis var int - float - string
// alert = parseInt - parseFloat - prompt
// operações + somar * Multiplicar
// comentario final 
