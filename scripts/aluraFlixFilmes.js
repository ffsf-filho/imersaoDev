var filmes = [
  {nome:"Star Wars: Episode IV - A New Hope",ano:1977,genero:"Action,Adventure,Fantasy",urlSite:"https://www.imdb.com/video/vi1317709849?ref_=tt_pv_vi_aiv_1",urlImg:"https://m.media-amazon.com/images/M/MV5BNzVlY2MwMjktM2E4OS00Y2Y3LWE3ZjctYzhkZGM3YzA1ZWM2XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UX182_CR0,0,182,268_AL_.jpg"}, 
  {nome:"Toy Story",ano:1995,genero:"Comedy,Drama",urlSite:"https://www.imdb.com/video/vi2052129305?ref_=nv_sr_srsg_1",urlImg:"https://m.media-amazon.com/images/M/MV5BMDU2ZWJlMjktMTRhMy00ZTA5LWEzNDgtYmNmZTEwZTViZWJkXkEyXkFqcGdeQXVyNDQ2OTk4MzI@._V1_UX182_CR0,0,182,268_AL_.jpg"}, 
  {nome:"Interstellar",ano:2014,genero:"Adventure,Drama,Sci-fi",urlSite:"https://www.imdb.com/video/vi1586278169?ref_=nv_sr_srsg_4",urlImg:"https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"Dead Poets Society",ano:1989,genero:"Comedy,Drama",urlSite:"https://www.imdb.com/video/vi724614169?ref_=tt_pv_vi_aiv_3",urlImg:"https://m.media-amazon.com/images/M/MV5BOGYwYWNjMzgtNGU4ZC00NWQ2LWEwZjUtMzE1Zjc3NjY3YTU1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"Good Will Hunting",ano:1997,genero:"Drama,Romance",urlSite:"https://www.imdb.com/video/vi1281211929/?ref_=hm_tpks_tr_vp_2_pd_tp1_cp",urlImg:"https://m.media-amazon.com/images/M/MV5BOTI0MzcxMTYtZDVkMy00NjY1LTgyMTYtZmUxN2M3NmQ2NWJhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"Monsters, Inc.",ano:2001,genero:"Animation,Adventure,Comedy",urlSite:"https://www.imdb.com/video/vi518890521/?ref_=hm_tpks_tr_vp_1_pd_tp1_cp",urlImg:"https://m.media-amazon.com/images/M/MV5BMTY1NTI0ODUyOF5BMl5BanBnXkFtZTgwNTEyNjQ0MDE@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"The Dark Knight",ano:2008,genero:"Action,Crime,Drama",urlSite:"https://www.imdb.com/video/vi324468761/?ref_=hm_tpks_tr_vp_1_pd_tp1_cp",urlImg:"https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"The Godfather",ano:1972,genero:"Crime,Drama",urlSite:"https://www.imdb.com/video/vi1348706585/?ref_=hm_tpks_tr_vp_18_pd_tp1_cp",urlImg:"https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_UY268_CR3,0,182,268_AL_.jpg"},
  {nome:"Zack Snyder's Justice League",ano:2021,genero:"Action,Adventure,Fantasy",urlSite:"https://www.imdb.com/video/vi2343551001/?ref_=hm_fanfav_tr_vp_1_pd_fp1",urlImg:"https://m.media-amazon.com/images/M/MV5BYjI3NDg0ZTEtMDEwYS00YWMyLThjYjktMTNlM2NmYjc1OGRiXkEyXkFqcGdeQXVyMTEyMjM2NDc2._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"Death Note",ano:2017,genero:"Action,Crime,Drama",urlSite:"https://www.imdb.com/video/vi3151411481?playlistId=tt1241317&ref_=tt_ov_vi",urlImg:"https://m.media-amazon.com/images/M/MV5BMTUwOTgzMTEyOF5BMl5BanBnXkFtZTgwNTk3MTM5MjI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"The irishman",ano:2019,genero:"Biography,Crime,Drama",urlSite:"https://www.imdb.com/video/vi2244525849?playlistId=tt1302006&ref_=tt_ov_vi",urlImg:"https://m.media-amazon.com/images/M/MV5BMGUyM2ZiZmUtMWY0OC00NTQ4LThkOGUtNjY2NjkzMDJiMWMwXkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_UY268_CR0,0,182,268_AL_.jpg"},
  {nome:"The Bone Collector",ano:1999,genero:"Crime,Drama,mystery",urlSite:"https://www.imdb.com/video/vi2626617625?playlistId=tt0145681&ref_=tt_ov_vi",urlImg:"https://m.media-amazon.com/images/M/MV5BOWQxN2ZmNDMtMzA2Ny00ZDJhLTlkNTgtMWMyZjljY2QzMzNhXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"The Green Mile",ano:1999,genero:"Crime,Drama,Fantasy",urlSite:"https://www.imdb.com/video/vi552796441?playlistId=tt0120689&ref_=tt_ov_vi", urlImg:"https://m.media-amazon.com/images/M/MV5BMTUxMzQyNjA5MF5BMl5BanBnXkFtZTYwOTU2NTY3._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"The Matrix",ano:1999,genero:"Action,Sci-fi",urlSite:"https://www.imdb.com/video/vi1032782617?playlistId=tt0133093&ref_=tt_ov_vi",urlImg:"https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_UX182_CR0,0,182,268_AL_.jpg"},
  {nome:"Hansel & Gretel: Witch Hunters",ano:2013,genero:"Action,fantasy,Horror",urlSite:"https://www.imdb.com/video/vi1709876249?playlistId=tt1428538&ref_=tt_ov_vi",urlImg:"https://m.media-amazon.com/images/M/MV5BMjA4MDQwODg2NV5BMl5BanBnXkFtZTcwNTc5ODc2OA@@._V1_UX182_CR0,0,182,268_AL_.jpg"}
];

var listaFilmes = document.getElementById("selectFilme");
var element = document.createElement("option");

element.innerText = "Todos os Filmes";
listaFilmes.append(element);

for (var i = 0; i < filmes.length; i++){
var item = document.createElement("option");
item.innerText = filmes[i].nome;
listaFilmes.append(item);
}

function CartaoFilme(){
var ids = document.getElementById("selectFilme").value;
var listaFilmes = document.querySelector('#container-filme');
var texto = listaFilmes.innerHTML;

if(ids == "Todos os Filmes"){
listaFilmes.innerHTML = "";    
}
if(texto.includes(ids) == false){
for (var id = 0; id < filmes.length; id++){
if(filmes[id].nome == ids || ids == "Todos os Filmes"){
var cartao ="<div class='cartao'>";
  cartao = cartao + "<a id='linkFilme' class='linkFilme' href='" + filmes[id].urlSite + "' target='_blank'>";
  cartao = cartao + "<div><label id='labelTitulo'>" + filmes[id].nome + "</label></div>";
  cartao = cartao + "<div><label id='labelCategoria'>" + filmes[id].ano + " - " + filmes[id].genero + "</label></div>";
  cartao = cartao + "<img id='imgFilme' class='imgFilme' src='" + filmes[id].urlImg + "'>";
  cartao = cartao + "</a>";
  cartao = cartao + "</div>";
DesenhaCartao(cartao);
};
};
} else {
alert("O Filme:\n" + ids + "\nJá esta Listado.")
}
};

function DesenhaCartao(cartao){
var listaFilmes = document.querySelector('#container-filme');
var elemento = cartao;
listaFilmes.innerHTML = listaFilmes.innerHTML + elemento;  
}