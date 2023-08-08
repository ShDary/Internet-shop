const items = [
  {
    title: "Автотрек",
    description: "Ваш ребенок будет счастлив!",
    tags: ["boy"],
    price: 500,
    img: "./img/avtotrek.jpg",
    rating: 4.4,
  },
  {
    title: "Игрушечный телефон",
    description: "Поможет в развитии интеллекта!",
    tags: ["boy", "girl"],
    price: 900,
    img: "./img/phone.jpg",
    rating: 5.0,
  },
  {
    title: "Игрушечная корзинка для пикника",
    description: "Займет вашего ребенка на долгое время!",
    tags: ["boy", "girl"],
    price: 300,
    img: "./img/picnic.jpg",
    rating: 5.0,
  },
  {
    title: "Качающаяся лошадка",
    description: "Подойдет для детей не старше 5 лет!",
    tags: ["boy", "girl"],
    price: 660,
    img: "./img/horse.jpg",
    rating: 4.7,
  },
  {
    title: "Пазл 'Собачий патруль' ",
    description: "Для любителей мультика Собачий патруль! Не сложный пазл.",
    tags: ["boy", "girl"],
    price: 400,
    img: "./img/pazzle.jpg",
    rating: 4.9,
  },
  {
    title: "Паравоз Три Кота",
    description: "Игрушка на батарейках со звуковыми эффектами!",
    tags: ["boy", "girl"],
    price: 200,
    img: "./img/train.jpg",
    rating: 3.2,
  },
  {
    title: "Мягкая игрушка Мишка",
    description: "Мишка - хороший плющевый друг для вашего ребенка! ",
    tags: ["boy", "girl"],
    price: 300,
    img: "./img/bear.jpeg",
    rating: 3.9,
  },
  {
    title: "Сумка с плюшевой собачкой",
    description: "Теперь вы можете не переживать за личные вещи!",
    tags: ["girl"],
    price: 500,
    img: "./img/bagDog.jpg",
    rating: 3.8,
  },
  {
    title: "Пожарная машина",
    description: "Идеальная игрушка для мальчиков!",
    tags: ["boy"],
    price: 1500,
    img: "./img/fireTrack.jpg",
    rating: 4.8,
  },
  {
    title: "Чемоданчик с косметикой",
    description: "Ваша дочка будет в восторге! Столько косметики даже у мамы нет!",
    tags: ["girl"],
    price: 800,
    img: "./img/makeup.jpg",
    rating: 3.2,
  },
  {
    title: "Пианино детское",
    description: "Маленькое пианино в виде кота. Подойдет для детей любого возраста!",
    tags: ["boy", "girl"],
    price: 3500,
    img: "./img/piano.jpg",
    rating: 3.7,
  },
  {
    title: "Трансформер",
    description: "Игрушка трансформер для мальчиков. Складывается в разные формы.",
    tags: ["boy"],
    price: 800,
    img: "./img/transformer.jpg",
    rating: 4.1,
  },
];

const shopItem = document.querySelector('#shop-items');
const nothingFound = document.querySelector('#nothing-found');
const itemTemplate = document.querySelector('#item-template');

function prepareShopItem(shopItem) {
  const { title, description, tags, img, price } = shopItem;
  const item = itemTemplate.content.cloneNode(true);

  item.querySelector('h1').textContent = title;
  item.querySelector('p').textContent = description;
  item.querySelector('img').src = img;
  item.querySelector('.price').textContent = ` ${price}Р `;

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
  nothingFound.textContent = '';
  shopItem.innerHTML = '';
  
  arr.forEach((item) => {
    shopItem.append(prepareShopItem(item));
  })
  
  if (!arr.length) {
    nothingFound.textContent = 'Ничего не найдено';
  }
}

renderItems(currentState);