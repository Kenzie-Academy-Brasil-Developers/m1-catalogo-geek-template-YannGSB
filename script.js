const productsArray = [
  // Produto 1
  {
    image: "./assets/img/paintings/quadro-c3po.jpg",
    name: "Robot",
    price: "R$250,00",
    type: "Paintings",
  },
  // Produto 2
  {
    image: "./assets/img/actions/dragonball-action-figure.jpg",
    name: "Goku Super Saiyajin",
    price: "R$500,00",
    type: "Action Figures",
  },
  // Produto 3
  {
    image: "./assets/img/paintings/quadro-controle.jpg",
    name: "Controle Playstation",
    price: "R$99,00",
    type: "Paintings",
  },
  // Produto 4
  {
    image: "./assets/img/paintings/quadro-mario.jpg",
    name: "Mario",
    price: "R$275,00",
    type: "Paintings",
  },
  // Produto 5
  {
    image: "./assets/img/paintings/quadro-pacman.jpg",
    name: "PacMan",
    price: "R$160,00",
    type: "Paintings",
  },
  // Produto 6
  {
    image: "./assets/img/paintings/quadro-relogio.jpg",
    name: "Smart Watch",
    price: "R$120,00",
    type: "Paintings",
  },
  // Produto 7
  {
    image: "./assets/img/actions/godzilla-action-figure.jpg",
    name: "Godzilla",
    price: "R$700,00",
    type: "Action Figures",
  },
  // Produto 8
  {
    image: "./assets/img/actions/groot-action-figure.jpg",
    name: "Groot",
    price: "R$950,00",
    type: "Action Figures",
  },
  // Produto 9
  {
    image: "./assets/img/actions/ironman-action-figure.jpg",
    name: "Homem de Ferro",
    price: "R$1030,00",
    type: "Action Figures",
  },
  // Produto 10
  {
    image: "./assets/img/actions/starwars-action-figure.jpg",
    name: "Sr Yoda",
    price: "R$870,00",
    type: "Action Figures",
  },
  // Produto 11
  {
    image: "./assets/img/actions/wolverine-action-figure.jpg",
    name: "Wolverine",
    price: "R$510,00",
    type: "Action Figures",
  },
];

let actionFiguresArray = [];
let paintingsArray = [];

function separateItems(productsArray) {
  for (let i = 0; i < productsArray.length; i++) {
    const item = productsArray[i];
    if (item.type == "Action Figures") {
      actionFiguresArray.push(item);
    } else if (item.type == "Paintings") {
      paintingsArray.push(item);
    }
  }
}

separateItems(productsArray);

function createCards(productsArray) {
  const item = productsArray;
  const li = document.createElement("li");
  const image = document.createElement("img");
  const imageContainer = document.createElement("div");
  const name = document.createElement("h3");
  const price = document.createElement("p");
  const textContainer = document.createElement("div");

  li.classList.add("card");
  image.src = item.image;
  name.classList.add("card-name");
  name.innerText = item.name;
  price.classList.add("card-price");
  price.innerText = item.price;
  textContainer.classList.add("textContainer");
  imageContainer.classList.add("imageContainer");
  imageContainer.append(image);
  textContainer.append(name, price);
  li.append(imageContainer, textContainer);

  return li;
}

function renderProducts(productArr, containerSelector) {
  const container = document.querySelector(containerSelector);
  for (let i = 0; i < productArr.length; i++) {
    let arr = productArr[i];
    let card = createCards(arr);
    container.appendChild(card);
  }
}

renderProducts(actionFiguresArray, ".actionfigure-list");
renderProducts(paintingsArray, ".painting-list");