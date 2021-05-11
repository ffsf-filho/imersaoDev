function Mensagem(msg){
  var opcao= confirm(msg);
  return opcao;
};

function GerarNumero(){
  var numero = Math.floor((Math.random() * 21));
  return numero;
};

function Jogar(){
  var numeroSecreto = parseInt(document.getElementById("oculto").value);
  var tentativas = parseInt(document.getElementById("labelChance1").innerText);
  var pontucao = parseInt(document.getElementById("labelPontuacao1").innerText);
  document.getElementById("labelChance1").innerText = (tentativas - 1);
  
  if(tentativas == 3){
    numeroSecreto= GerarNumero();
    document.getElementById("oculto").value = numeroSecreto;
  }

  var chute = parseInt(document.getElementById("inputJogo").value);
  if (numeroSecreto == chute){
    document.getElementById("labelPontuacao1").innerText = (pontucao * tentativas);
    alert("Parabens! Você certou.");
  } else if (chute > numeroSecreto){
    document.getElementById("labelPontuacao1").innerText = (pontucao - 1000);
    document.getElementById("textObs").innerText = "O número secreto é menor.\n";
  } else if (chute < numeroSecreto){ 
    document.getElementById("labelPontuacao1").innerText = (pontucao - 1000);
    document.getElementById("textObs").innerText = "O número secreto é maior.\n";
  };
    
  if (tentativas == 1) {
    var msgResposta = Mensagem("Suas tentativas acabram !!! \n Quer continuar jogando pressione 'OK'.");

    if (msgResposta){
      document.getElementById("labelChance1").innerText = 3;
    } else {
      document.getElementById("labelPontuacao1").innerText = 3000;
      document.getElementById("labelChance1").innerText = 3;
      document.getElementById("textObs").innerText = "Suas tentativas acabaram. O número secreto era " + numeroSecreto;
    };
  };
};