const items = [
  {
    title: "Автотрек",
    description: "Ваш ребенок будет счастлив!",
    tags: ["boy"],
    price: 125,
    img: "./img/avtotrek.jpg",
    rating: 4.4,
  },
  {
    title: "Игрушечный телефон",
    description: "Поможет в развитии интеллекта!",
    tags: ["boy", "girl"],
    price: 48,
    img: "./img/phone.jpg",
    rating: 5.0,
  },
  {
    title: "Игрушечная корзинка для пикника",
    description: "Займет вашего ребенка на долгое время!",
    tags: ["boy", "girl"],
    price: 140,
    img: "./img/picnic.jpg",
    rating: 5.0,
  },
  {
    title: "Качающаяся лошадка",
    description: "Подойдет для детей не старше 5 лет!",
    tags: ["boy", "girl"],
    price: 180,
    img: "./img/horse.jpg",
    rating: 4.7,
  },
  {
    title: "Пазл 'Собачий патруль' ",
    description: "Для любителей мультика Собачий патруль! Не сложный пазл.",
    tags: ["boy", "girl"],
    price: 15,
    img: "./img/pazzle.jpg",
    rating: 4.9,
  },
  {
    title: "Паровоз Три Кота",
    description: "Игрушка на батарейках со звуковыми эффектами!",
    tags: ["boy", "girl"],
    price: 34,
    img: "./img/train.jpg",
    rating: 3.2,
  },
  {
    title: "Мягкая игрушка Мишка",
    description: "Мишка - хороший плющевый друг для вашего ребенка! ",
    tags: ["boy", "girl"],
    price: 46,
    img: "./img/bear.jpeg",
    rating: 3.9,
  },
  {
    title: "Сумка с плюшевой собачкой",
    description: "Теперь вы можете не переживать за личные вещи!",
    tags: ["girl"],
    price: 100,
    img: "./img/bagDog.jpg",
    rating: 3.8,
  },
  {
    title: "Пожарная машина",
    description: "Идеальная игрушка для мальчиков!",
    tags: ["boy"],
    price: 50,
    img: "./img/fireTrack.jpg",
    rating: 4.8,
  },
  {
    title: "Детская косметика",
    description: "Ваша дочка будет в восторге! Столько косметики даже у мамы нет!",
    tags: ["girl"],
    price: 85,
    img: "./img/makeup.jpg",
    rating: 2.2,
  },
  {
    title: "Пианино детское",
    description: "Маленькое пианино в виде кота. Подойдет для детей любого возраста!",
    tags: ["boy", "girl"],
    price: 50,
    img: "./img/piano.jpg",
    rating: 3.7,
  },
  {
    title: "Трансформер",
    description: "Игрушка трансформер для мальчиков. Складывается в разные формы.",
    tags: ["boy"],
    price: 80,
    img: "./img/transformer.jpg",
    rating: 3.1,
  },
];

const shopItem = document.querySelector('#shop-items');
const nothingFound = document.querySelector('#nothing-found');
const itemTemplate = document.querySelector('#item-template');

function prepareShopItem(shopItem) {
  const { title, description, tags, img, price, rating} = shopItem;
  const item = itemTemplate.content.cloneNode(true);

  item.querySelector('h1').textContent = title;
  item.querySelector('p').textContent = description;
  item.querySelector('img').src = img;
  item.querySelector('.price').textContent = ` ${price}Р `;

  const containerRating = item.querySelector(".rating");
  for (let i = 0; i < rating; i++) {
    const star = document.createElement("i");
    star.classList.add("fa", "fa-star");
    containerRating.append(star);
  }

  const tagsHolder = item.querySelector('.tags');

  tags.forEach((tag) => {
    const element = document.createElement('span');
    element.textContent = tag;
    element.classList.add('tag');
    tagsHolder.append(element);
  });

  return item;
}

let currentState = [...items];

function renderItems(arr) {
  nothingFound.textContent = "";
  shopItem.innerHTML = "";
  arr.forEach((item) => {
    shopItem.append(prepareShopItem(item));
  });
  
  if (!arr.length) {
    nothingFound.textContent = "Ничего не найдено";
  }
}

renderItems(currentState.sort((a, b) => sortByAlphabet(a, b)));

function sortByAlphabet(a, b) {
  if (a.title > b.title) {
    return 1;
  }
  if (a.title < b.title) {
    return -1;
  }
  return 0;
}

const sortControl = document.querySelector("#sort");

sortControl.addEventListener("change", (event) => {
  const selectedOption = event.target.value;
  switch (selectedOption) {
    case "expensive": {
      currentState.sort((a, b) => b.price - a.price);
      break;
    }
    case "cheap": {
      currentState.sort((a, b) => a.price - b.price);
      break;
    }
    case "rating": {
      currentState.sort((a, b) => b.rating - a.rating);
      break;
    }
  }
  renderItems(currentState);
})

const searchInput = document.querySelector("#search-input");
const searchButton = document.querySelector("#search-btn");

function applySearch() {
  const searchString = searchInput.value.trim().toLowerCase();

  currentState = items.filter((el) =>
  el.title.toLowerCase().includes(searchString)
  );
  currentState.sort((a, b) => sortByAlphabet(a, b));
  sortControl.selectedIndex = 0;
  renderItems(currentState);
}

searchButton.addEventListener("click", applySearch);
searchInput.addEventListener("search", applySearch);