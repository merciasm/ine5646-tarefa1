var items = [
  {
    title: "Margaret Heafield",
    image: "https://img.ibxk.com.br/2015/09/01/01151911891679.jpg?w=1040",
    content: "Tá vendo essa moça da foto? Pois é. Ela trabalhou como diretora de engenharia de software para a NASA. Basicamente, foi uma das responsáveis pelo Projeto Apollo, um dos mais importantes da agência espacial."
  },
  {
    title: "Nísia Floresta Augusta",
    image: "https://img.ibxk.com.br/2015/09/01/01152259965697.jpg?w=1040",
    content: "Nísia foi a primeira brasileira a lutar pela emancipação feminina. É considerada precursora do feminismo no país, sendo também reconhecida por seu empenho em alfabetizar meninas e mulheres. Nísia Floresta também foi uma das primeiras mulheres a publicar artigos em jornais brasileiros, além de ter sido a tradutora do manifesto feminista de Mary Wollstonecraft, “Direitos das Mulheres e Injustiças dos Homens”."
  },
  {
    title: "Amelia Earhart",
    image: "https://cdn.maioresemelhores.com/imagens/amelia-earhart-cke.jpg",
    content: "Um grande símbolo da aviação. Além de ter sido a primeira mulher a voar sozinha sobre o Oceano Atlântico, Amelia também foi a primeira a receber a Cruz de Voo Distinto, a condecoração militar atribuída a atos de heroísmo ou conquista extraordinária concedida a pilotos das Forças Aéreas dos EUA. A piloto desapareceu no Oceano Pacífico enquanto fazia um voo de volta ao mundo."
  }];

items.forEach(createNewItem);

function createNewItem(item, index) {
  const list = document.querySelector(".body-list")

  let container = document.createElement("DIV")
  container.className = "post-container"

  let title = document.createElement("H2")
  title.innerText = item.title
  title.className = "post-title"

  container.append(title)

  let text = document.createElement("P")
  text.innerText = item.content
  text.className = "post-text"

  container.append(text)

  let img = document.createElement("IMG")
  img.src = item.image
  img.className = "post-image"

  container.append(img)

  list.append(container)
  
}
