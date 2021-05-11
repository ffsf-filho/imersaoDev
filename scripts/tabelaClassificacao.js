//Criação de objetos
var paulo = {nome:"Paulo",vitorias:0,empates:0,derrotas:0,pontos:0, genero:"M"};
var rafa = {nome:"Rafa",vitorias:0,empates:0,derrotas:0,pontos:0,genero:"F"};

rafa.pontos = calculaPontos(rafa);
paulo.pontos = calculaPontos(paulo);

//Cria a função para cálcular a pontuação
function calculaPontos(jogador){
  var pontos = (jogador.vitorias * 3) + jogador.empates;
  return pontos;
};

var jogadores = [rafa, paulo];

function exibirJogadoresNaTela(jogadores){
  var html = "";
  for (var i = 0; i < jogadores.length; i++) {
    html += montarRowBodyTable(jogadores[i], i);
  };
  var tabelaJogadores = document.querySelector('#tabelaJogadores');
  tabelaJogadores.innerHTML = html;
};

function montarRowBodyTable(jogadores, i){
  var genero = "";

  if(jogadores.genero == "M"){
    genero = "tdM"
  } else {
    genero = "tdF"
  }
    
  var rowBody="<tr>"
    rowBody += `<td class="${genero}">${jogadores.nome}</td>`;
    rowBody += `<td class="tdI"><img src="https://www.flaticon.com/svg/vstatic/svg/753/753228.svg?token=exp=1617117870~hmac=e3c627c6152c36ab778f3c54a22eeb94" width="30px" height="30px"/></td>`;
    rowBody += `<td>${jogadores.vitorias}</td>`;
    rowBody += `<td>${jogadores.empates}</td>`;
    rowBody += `<td>${jogadores.derrotas}</td>`;
    rowBody += `<td>${jogadores.pontos}</td>`;
    rowBody += `<td><button onClick='adicionarVitoria(${i})'><img src="https://png.pngtree.com/png-clipart/20190705/original/pngtree-vector-trophy-icon-png-image_4184666.jpg" width="30px" height="30pxS"></button></td>`;
    rowBody += `<td><button onClick='adicionarEmpate(${i})'><img src="https://image.shutterstock.com/image-vector/making-decisions-icon-indecision-questions-600w-1931850884.jpg" width="30px" height="30pxS"></button></td>`;
    rowBody += `<td><button onClick="adicionarDerrota(${i})"><img src="https://cdn0.iconfinder.com/data/icons/geek-4/24/Game_Over_sign_video_game-512.png" width="30px" height="30pxS"></button></td>`;   
    rowBody += "</tr>";
  
  return rowBody;
};

function adicionarVitoria(i){
  var jogador = jogadores[i];
  jogador.vitorias++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
};

function adicionarEmpate(i){
  var jogador = jogadores[i];
  jogador.empates++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
};

function adicionarDerrota(i){
  var jogador = jogadores[i];
  jogador.derrotas++;
  jogador.pontos = calculaPontos(jogador);
  exibirJogadoresNaTela(jogadores);
};

function marcarJogada(id){
  var jogador = "";
  var playerX = document.querySelector("#inputX");
  var playerO = document.querySelector("#inputO");
  var valorX = playerX.checked;
  
  if(valorX){
    jogador = "X";
    playerO.checked = true;
  } else {
    jogador = "O";
    playerX.checked = true;
  };
  
  var jogada = document.querySelector(`#${id}`);
  var elemento = `<p id="${jogador}">${jogador}</p>`;
  jogada.setAttribute('jogador',jogador);
  jogada.innerHTML = elemento;
  verificarVitoria(jogador);
};

function verificarVitoria(jogador){
  var a1 = document.querySelector("#a1").getAttribute("jogador");
  var a2 = document.querySelector("#a2").getAttribute("jogador");
  var a3 = document.querySelector("#a3").getAttribute("jogador");
  var b1 = document.querySelector("#b1").getAttribute("jogador");
  var b2 = document.querySelector("#b2").getAttribute("jogador");
  var b3 = document.querySelector("#b3").getAttribute("jogador");
  var c1 = document.querySelector("#c1").getAttribute("jogador");
  var c2 = document.querySelector("#c2").getAttribute("jogador");
  var c3 = document.querySelector("#c3").getAttribute("jogador");
  
  if ((a1 == jogador && a2 == jogador && a3 == jogador) || 
      (a1 == jogador && b2 == jogador && c3 == jogador) || 
      (a1 == jogador && b1 == jogador && c1 == jogador) || 
      (a2 == jogador && b2 == jogador && c2 == jogador) || 
      (a3 == jogador && b3 == jogador && c3 == jogador) || 
      (a3 == jogador && b2 == jogador && c1 == jogador) || 
      (b1 == jogador && b2 == jogador && b3 == jogador) || 
      (c1 == jogador && c2 == jogador && c3 == jogador)
    ){
    
    alert(`Parabens !! O jogador: ' ${jogador} ' ganhou.`);
  }  else if (a1 != "" && a2 != "" && a3 != "" && 
              b1 != "" && b2 != "" && b3 != "" && 
              c1 != "" && c2 != "" && c3 != ""
  ){
    alert("O jogo empatou !!!");
  };
};

function novoJogador(){
  var nome = prompt("Digite o nome: ");
  var genero = prompt("Digite (M)-Masculino | (F)-Femino: ");
  var jogador = {nome:nome,vitorias:0,empates:0,derrotas:0,pontos:0, genero:genero};
  var i = jogadores.length;
  jogadores[i] = jogador;
  var html = "";
      html += montarRowBodyTable(jogador, i);
  var tabelaJogadores = document.querySelector('#tabelaJogadores');
  tabelaJogadores.innerHTML = tabelaJogadores.innerHTML + html;
};

function limparJogo(){
  var a1 = document.querySelector("#a1");
      a1.setAttribute('jogador',"");
      a1.innerHTML = "";
  var a2 = document.querySelector("#a2");
      a2.setAttribute('jogador',"");
      a2.innerHTML = "";  
  var a3 = document.querySelector("#a3");
      a3.setAttribute('jogador',"");
      a3.innerHTML = "";  
  var b1 = document.querySelector("#b1");
      b1.setAttribute('jogador',"");
      b1.innerHTML = "";
  var b2 = document.querySelector("#b2");
      b2.setAttribute('jogador',"");
      b2.innerHTML = "";  
  var b3 = document.querySelector("#b3");
      b3.setAttribute('jogador',"");
      b3.innerHTML = "";  
  var c1 = document.querySelector("#c1");
      c1.setAttribute('jogador',"");
      c1.innerHTML = "";  
  var c2 = document.querySelector("#c2");
      c2.setAttribute('jogador',"");
      c2.innerHTML = "";    
  var c3 = document.querySelector("#c3");  
      c3.setAttribute('jogador',"");
      c3.innerHTML = "";  
  document.querySelector("#inputX").checked = true;
}

exibirJogadoresNaTela(jogadores);