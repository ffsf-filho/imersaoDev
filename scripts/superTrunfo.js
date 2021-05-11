var carta1 = {
  nome:"Seiya de Pégaso",
  atributos: {
    ataque: 80,
    defesa: 70,
    magia: 75   
  },
  imagem:"https://i.pinimg.com/originals/ae/1e/9c/ae1e9c483569908f4fb4f3a0ce6a25ce.jpg"
};

var carta2 = {
  nome:"Shiryu de Dragão",
  atributos: {
    ataque: 75,
    defesa: 80,
    magia: 70   
  },
  imagem:"https://s.aficionados.com.br/imagens/shiryu.jpg"
};

var carta3 = {
  nome:"Ikki de Fênix",
  atributos: {
    ataque: 75,
    defesa: 70,
    magia: 80    
  },
  imagem:"https://wallpapercave.com/wp/wp2149278.jpg"
};

var carta4 = {
  nome:"Goku Instinto Superior",
  atributos: {
    ataque: 70,
    defesa: 80,
    magia: 75   
  },
  imagem:"https://animesonline.com.br/wp-content/uploads/2020/11/wallpaper-goku-instinto-superior.jpg"
};

var carta5 = {
  nome:"Vegeta Super Saiyajin 4",
  atributos: {
    ataque: 80,
    defesa: 70,
    magia: 75    
  },
  imagem:"https://i.pinimg.com/originals/c5/6b/2c/c56b2cd1c33acf1bc9ed66e118bb8d9e.jpg"
};

var carta6 = {
  nome:"Freeza dourado",
  atributos: {
    ataque: 75,
    defesa: 70,
    magia: 80 
  },
  imagem:"https://i.pinimg.com/236x/fb/52/5d/fb525d5880fc143d0c06623f3135a018.jpg"
};

var carta7 = {
  nome:"MewTwo",
  atributos: {
    ataque: 70,
    defesa: 75,
    magia: 80   
  },
  imagem:"https://i.pinimg.com/originals/a4/84/11/a48411f8285b33954f9c57ed7b0d330b.jpg"
};

var carta8 = {
  nome:"Machamp",
  atributos: {
    ataque: 80,
    defesa: 75,
    magia: 70   
  },
  imagem:"https://www.powerpyx.com/wp-content/uploads/pokemon-sword-shield-machamp.jpg"
};

var carta9 = {
  nome:"Alakazam",
  atributos: {
    ataque: 75,
    defesa: 70,
    magia: 80   
  },
  imagem:"https://attackofthefanboy.com/wp-content/uploads/2016/08/Pokemon-Go-Alakazam.jpg"
};

var carta10 = {
  nome:"Escanor",
  atributos: {
    ataque: 80,
    defesa: 70,
    magia: 75   
  },
  imagem:"https://i.pinimg.com/736x/12/99/73/1299731f83f09811e383061d48aed8f6.jpg"
};

var carta11 = {
  nome:"Meliodas",
  atributos: {
    ataque: 80,
    defesa: 75,
    magia: 70   
  },
  imagem:"https://i.pinimg.com/564x/85/d2/ff/85d2ff5fa7184d6f4af6b353d4835523.jpg"
};

var carta12 = {
  nome:"Zeldris",
  atributos: {
    ataque: 75,
    defesa: 70,
    magia: 80    
  },
  imagem:"https://assets.puzzlefactory.pl/puzzle/340/221/original.jpg"
};

var carta13 = {
  nome:"Jóia do Infinito",
  atributos: {
    ataque: 100,
    defesa: 100,
    magia: 100    
  },
  imagem:"https://segredosdomundo.r7.com/wp-content/uploads/2020/05/manopla-do-infinito-o-que-e-como-feita-e-curiosidades.jpg"
};

var carta14 = {
  nome:"Exclamação de Athena",
  atributos: {
    ataque: 100,
    defesa: 100,
    magia: 100    
  },
  imagem:"https://pm1.narvii.com/6414/a0da30285bec43d1fdd6e6efda45d13a0f27d120_hq.jpg"
};

var carta15 = {
  nome:"Carta Coringa",
  atributos: {
    ataque: 0,
    defesa: 0,
    magia: 0    
  },
  imagem:"https://1.bp.blogspot.com/-ZImAPDg0EDI/XZX64azpQFI/AAAAAAAAUU8/YPmkqcGZLfYvdT6kAjrRWCh-zjchfb3CwCLcBGAsYHQ/s640/WhatsApp%2BImage%2B2019-10-03%2Bat%2B10.42.11.jpeg"
};

var cartaMaquina;//Array que recebe a carta sorteada para máquina
var cartaJogador;//Array que recebe a carta sorteada para Jogador
var cartasConquistaMaquina=[];//Array que recebe a carta ganhada pela máquina na disputa com o jogador
var cartasConquistaJogador=[];//Array que recebe a carta ganhada pelo jogador na disputa com a máquina
var cartas=[];//Array que recebe todas as cartas para serem distribuídas 
var deckJogador= [];//Array que recebe as cartas para formar o deck do Jogador
var deckAuxiliar= [];//Array que recebe as cartas para formar o deck Auxliar
var deckMarquina= [];//Array que recebe as cartas para formar o deck da Máquina
var numeroPartidas= 0;//Recebe o número de partidas disputadas pelo jogador com um limite de 6 partidas
var pontosJogador= 0;//Variável que recebe o número de pontos ganhos do jogador
var pontosMaquinas = 0;//Variável que recebe o número de pontos ganhos pela máquina
var nomeDoJogador= "";//Variável que recebe o nome jogador que irá disputar com á máquina

startJogo();

function startJogo() {
  var pNomeJogador = document.querySelector('#pJogador');
  
  nomeDoJogador = prompt("Digite seu nome: ");
  
  if (nomeDoJogador.length == 0){
    nomeDoJogador = "Jogador ";
    pNomeJogador.innerText = nomeDoJogador + pontosJogador;
  } else {
    pNomeJogador.innerText = nomeDoJogador + " " + pontosJogador;
  }
    
  cartas = [carta1,carta2,carta3,carta4,carta5,carta6,carta7,carta8,carta9,carta10,carta11,carta12,carta13,carta14,carta15];//Atribui todas as cartas ao array básico de cartas
  var totalDeCartas = cartas.length; //pega o tal de cartas 
  
  for(var i = 0; i < totalDeCartas;i++){
    var numeroDaCarta = Math.floor((Math.random() * cartas.length));//seleciona o número da carta para atribuíção
    
    //percorre o array de cartas e faz a atribuição aos decks de cartas;
    if(i == 2 || i == 9 || i == 13){
      deckAuxiliar.push(cartas[numeroDaCarta]);  
    } else {
      if(i % 2 === 0 && deckJogador.length <6){
        //quando i for par e menor que o número maximo do array
        deckJogador.push(cartas[numeroDaCarta]);
      } else {
        //quando i for impar
        deckMarquina.push(cartas[numeroDaCarta]);
      };
    };
    
    //remove do deck de cartas a carta atribuída
    cartas.splice(numeroDaCarta, 1);
  };
  
  atualizaCartasDisponiveis(deckJogador, "cartasDisponivelJogador");
  atualizaCartasDisponiveis(deckMarquina, "cartasDisponivelMaquina");
};

function atualizaCartasDisponiveis(deck, labelJogador){
  var qtdeCartas = deck.length;
  var label = document.querySelector(`#${labelJogador}`);
  label.innerText = "Cartas disponível: " + qtdeCartas;
};

function sortearCarta(){
  //Limpa o resultado
  document.querySelector("#resultado").innerHTML = "";
  
  //Sortea aleatóriamente a carta da máquina para a disputa e remove a carta do deck
  var numeroCartaMaquina = Math.floor((Math.random() * deckMarquina.length));
  cartaMaquina = deckMarquina[numeroCartaMaquina];
  deckMarquina.splice(numeroCartaMaquina, 1);
  
  //Sortea aleatóriamente a carta do jogador para a disputa e remove a carta do deck
  var numeroCartaJogador = Math.floor((Math.random() * deckJogador.length));
  cartaJogador = deckJogador[numeroCartaJogador];
  deckJogador.splice(numeroCartaJogador, 1);
  
  document.querySelector("#btnSortear").disabled = true;//Desabilita o botão "Sortear carta"
  document.querySelector("#btnJogar").disabled = false;//habilita o botão jogar
  
  //Se a jogada for par exibe a carta do jogador, caso contrario exebie a carta da máquina
  if(numeroPartidas % 2 === 0){
    exibeCartaJogador();
  } else {
    exibeCartaMaquina();
  }
  
  atualizaCartasDisponiveis(deckJogador, "cartasDisponivelJogador");
  atualizaCartasDisponiveis(deckMarquina, "cartasDisponivelMaquina");
};

function exibeCartaJogador() {
  //Recupera a div que contém o nome da carta e faz a atribuição do valor
  var divNomeCarta = document.querySelector('#nomeCartaJogador');
  divNomeCarta.innerHTML = `<p>${cartaJogador.nome}</p>`;
  
  //Recupera a div que contém a imagem da carta e faz a atribuição do valor
  var divImgCarta = document.querySelector('#imgCartaJogador');
  divImgCarta.style.backgroundImage = `url(${cartaJogador.imagem})`;
  
  //Recupera a div que contém os atributos da carta e faz a atribuição do valor
  var divAtributos = document.querySelector('#atributosJogador');
  var htmlAtributos ="";//Recebe o html dos atributos
  
  //percorre os atributos da carta
  for(var atributo in cartaJogador.atributos){
    htmlAtributos += `<label><input type="radio" name="atributoJogador" value="${atributo}">${atributo} ${cartaJogador.atributos[atributo]}</label>`;
  };

  divAtributos.innerHTML = htmlAtributos;//atribui na div o html dos atributos
};

function exibeCartaMaquina() {
  //Recupera a div que contém o nome da carta e faz a atribuição do valor
  var divNomeCarta = document.querySelector('#nomeCartaMaquina');
  divNomeCarta.innerHTML = `<p>${cartaMaquina.nome}</p>`;
  
  //Recupera a div que contém a imagem da carta e faz a atribuição do valor
  var divImgCarta = document.querySelector('#imgCartaMaquina');
  divImgCarta.style.backgroundImage = `url(${cartaMaquina.imagem})`;
  
  //Recupera a div que contém os atributos da carta e faz a atribuição do valor
  var divAtributos = document.querySelector('#atributosMaquina');
  var htmlAtributos ="";//Recebe o html dos atributos
  
  //percorre os atributos da carta
  for(var atributo in cartaMaquina.atributos){
    htmlAtributos += `<label><input type="radio" name="atributoMaquina" value="${atributo}">${atributo} ${cartaMaquina.atributos[atributo]}</label>`;
  };

  divAtributos.innerHTML = htmlAtributos;//atribui na div o html dos atributos  
};

function obtemAtributoSelecionado(){
  var idAtributo = "";
  
  if(numeroPartidas % 2 === 0){
    idAtributo = "atributoJogador";  
  } else {
    idAtributo = "atributoMaquina";
  };
  
  var radioAtributo = document.getElementsByName(idAtributo);
  
  for(var i = 0; i < radioAtributo.length; i++){
    if(radioAtributo[i].checked) {
      return radioAtributo[i].value;  
    };
  };
};

function jogar(){
  var divResultado = document.querySelector("#resultado");
  var htmlResultado = "";
  var atributoSelecionado = obtemAtributoSelecionado();
  
  if(cartaJogador.atributos[atributoSelecionado] > cartaMaquina.atributos[atributoSelecionado]){
    htmlResultado = `<p class="resultado-final">${nomeDoJogador} você venceu !!</p>`
    pontosJogador++;
    cartaConquistada("Jogador");
  } else if (cartaJogador.atributos[atributoSelecionado] < cartaMaquina.atributos[atributoSelecionado]) {
    htmlResultado = `<p class="resultado-final">Perdeu. A máquina venceu !!</p>`
    pontosMaquinas++;
    cartaConquistada("Maquina");
  } else {
    htmlResultado = `<p class="resultado-final">Vocês empataram !!</p>`
  };
  
  if(numeroPartidas % 2 === 0){
    exibeCartaMaquina();
  } else {
    exibeCartaJogador();
  }
  
  numeroPartidas++;
  divResultado.innerHTML = htmlResultado;
  listarConquistas(cartasConquistaJogador, "conquistasJogador");
  listarConquistas(cartasConquistaMaquina, "conquistasMaquina");
  document.getElementById('btnSortear').disabled = false
  document.getElementById('btnJogar').disabled = true
  atualizaPlacar();
};

function cartaConquistada(resultado){
  if (resultado == "Jogador"){
    cartasConquistaJogador.push(cartaMaquina.nome);
  } else if(resultado == "Maquina"){
    cartasConquistaMaquina.push(cartaJogador.nome);    
  }
};

function listarConquistas(deck, local){
  var divLocal = document.querySelector(`#${local}`);
  var html = "<ol>"
  
  for(var i = 0; i < deck.length; i++){
    html += `<li>${deck[i]}</li>`;
  }
  
  divLocal.innerHTML = html + "</ol>";
};

function atualizaPlacar(){
  var pJogador = document.querySelector('#pJogador');
  pJogador.innerText = `${nomeDoJogador} ${pontosJogador}`;
  
  var pMaquina = document.querySelector('#pMaquina');
  pMaquina.innerText = `${pontosMaquinas} Máquina`;
};