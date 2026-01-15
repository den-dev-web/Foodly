export const products = [
  {
    id: "pizza_vegan",
    category: "pizza",
    name: "Пицца Веганская",
    description:
      "Диетическая пицца с изысканным овощным вкусом! Соус на томатной основе, помидоры, шампиньоны, лук маринованный, кукуруза, перец болгарский, брокколи, кабачок.",
    price: 230,
    variants: [
      { id: "30", label: "30 см", price: 230 },
      { id: "40", label: "40 см", price: 330 },
    ],
    image: "./assets/images/vegan_pizza.jpg",
    images: {
      avif: "./assets/images/vegan_pizza.avif",
      webp: "./assets/images/vegan_pizza.webp",
      jpg: "./assets/images/vegan_pizza.jpg",
    },
  },
  {
    id: "pizza_americana",
    category: "pizza",
    name: "Пицца Американа",
    description:
      "Пицца на сливочной основе, с курочкой гриль, миксом сыров, беконом, соленными огурцами, маринованым луком, украшенная соусом Чеддер и зеленым луком.",
    price: 315,
    variants: [
      { id: "30", label: "30 см", price: 315 },
      { id: "40", label: "40 см", price: 415 },
    ],
    image: "./assets/images/pizza_americana.jpg",
    images: {
      avif: "./assets/images/pizza_americana.avif",
      webp: "./assets/images/pizza_americana.webp",
      jpg: "./assets/images/pizza_americana.jpg",
    },
  },
  {
    id: "pizza_village",
    category: "pizza",
    name: "Пицца Деревенская",
    description:
      "Оригинальная пицца на чесночном соусе с добавлением бекона, ветчины, шампиньонов и помидоров. Украшена зеленым луком.",
    price: 315,
    image: "./assets/images/village_pizza.jpg",
    images: {
      avif: "./assets/images/village_pizza.avif",
      webp: "./assets/images/village_pizza.webp",
      jpg: "./assets/images/village_pizza.jpg",
    },
    variants: [
      { id: "30", label: "30 см", price: 315 },
      { id: "40", label: "40 см", price: 415 },
    ],
  },
  {
    id: "pizza_mexicano",
    category: "pizza",
    name: "Пицца Мексиканская",
    description:
      "Пицца на остром соусе, с куриным филе, охотничьими колбасками, миксом сыров, луком марс, кукурузой, болгарским перцем. Украшена томатами, перцем чили и петрушкой",
    price: 335,
    image: "./assets/images/mexicano_pizza.jpg",
    images: {
      avif: "./assets/images/mexicano_pizza.avif",
      webp: "./assets/images/mexicano_pizza.webp",
      jpg: "./assets/images/mexicano_pizza.jpg",
    },
    variants: [
      { id: "30", label: "30 см", price: 335 },
      { id: "40", label: "40 см", price: 435 },
    ],
  },
  {
    id: "pizza_new_york",
    category: "pizza",
    name: "Пицца Нью-йорк",
    description: "Пицца соус, сыр, охотничьи колбаски, картошка фри.",
    price: 335,
    image: "./assets/images/new_york_pizza.jpg",
    images: {
      avif: "./assets/images/new_york_pizza.avif",
      webp: "./assets/images/new_york_pizza.webp",
      jpg: "./assets/images/new_york_pizza.jpg",
    },
    variants: [
      { id: "30", label: "30 см", price: 335 },
      { id: "40", label: "40 см", price: 435 },
    ],
  },
  {
    id: "pizza_meat",
    category: "pizza",
    name: "Пицца мясная",
    description:
      "Пицца на сливочном соусе с добавлением нежного сыра, куриного филе гриль, ветчины, салями, охотничьих колбасок и пикантных-солёных огурцов на половину пиццы, петрушка",
    price: 335,
    image: "./assets/images/meat_pizza.jpg",
    images: {
      avif: "./assets/images/meat_pizza.avif",
      webp: "./assets/images/meat_pizza.webp",
      jpg: "./assets/images/meat_pizza.jpg",
    },
    variants: [
      { id: "30", label: "30 см", price: 335 },
      { id: "40", label: "40 см", price: 435 },
    ],
  },
  {
    id: "pizza_cossack",
    category: "pizza",
    name: "Пицца козацкая",
    description:
      "Пицца на чесночном соусе, с курицей-гриль, миксом сыров, беконом, салями, охотничьими колбасками, шампиньонами и маслинами.",
    price: 335,
    image: "./assets/images/cossack_pizza.jpg",
    images: {
      avif: "./assets/images/cossack_pizza.avif",
      webp: "./assets/images/cossack_pizza.webp",
      jpg: "./assets/images/cossack_pizza.jpg",
    },
    variants: [
      { id: "30", label: "30 см", price: 335 },
      { id: "40", label: "40 см", price: 435 },
    ],
  },
  {
    id: "sushi_philadelphia_classic",
    category: "sushi",
    name: "Филадельфия Классическая",
    description:
      "Серия самых популярных роллов, со сливочным сыром, огурцом, накрытый свежим Норвежским лососем, задекорирован японским майонезом.",
    price: 285,
    image: "./assets/images/philadelphia_classic_sushi.jpg",
    images: {
      avif: "./assets/images/philadelphia_classic_sushi.avif",
      webp: "./assets/images/philadelphia_classic_sushi.webp",
      jpg: "./assets/images/philadelphia_classic_sushi.jpg",
    },
    variants: [],
  },
  {
    id: "sushi_philadelphia_smoked_salmon",
    category: "sushi",
    name: "Филадельфия Копченый Лосось",
    description:
      "Серия самых популярных роллов, со сливочным сыром, икрой тобико, огурцом, накрытый копченым Норвежским лососем.",
    price: 335,
    image: "./assets/images/philadelphia_smoked_salmon_sushi.jpg",
    images: {
      avif: "./assets/images/philadelphia_smoked_salmon_sushi.avif",
      webp: "./assets/images/philadelphia_smoked_salmon_sushi.webp",
      jpg: "./assets/images/philadelphia_smoked_salmon_sushi.jpg",
    },
    variants: [],
  },
  {
    id: "sushi_green_dragon",
    category: "sushi",
    name: "Зеленый дракон",
    description:
      "Фирменный ролл с угрем, тамаго, сливочным сыром, огурцом, авокадо, икрой, политый соусом унаги и жаренным кунжутом",
    price: 445,
    image: "./assets/images/green_dragon_sushi.jpg",
    images: {
      avif: "./assets/images/green_dragon_sushi.avif",
      webp: "./assets/images/green_dragon_sushi.webp",
      jpg: "./assets/images/green_dragon_sushi.jpg",
    },
    variants: [],
  },
  {
    id: "sushi_chess",
    category: "sushi",
    name: "Шахматы",
    description:
      "Ролл с копченым лососем, сливочным и твердым сырами, моцареллой, огурцом, красной и чёрной икрой.",
    price: 295,
    image: "./assets/images/chess_sushi.jpg",
    images: {
      avif: "./assets/images/chess_sushi.avif",
      webp: "./assets/images/chess_sushi.webp",
      jpg: "./assets/images/chess_sushi.jpg",
    },
    variants: [],
  },
  {
    id: "burgers_hamburger",
    category: "burgers",
    name: "Гамбургер",
    description:
      "Бургер с котлетой из отборной говядины, маринованные огурцы, маринованный лук, салат, ароматный помидорный соус, сладкая горчица и хрустящая булочка.",
    price: 155,
    image: "./assets/images/hamburger.jpg",
    images: {
      avif: "./assets/images/hamburger.avif",
      webp: "./assets/images/hamburger.webp",
      jpg: "./assets/images/hamburger.jpg",
    },
    variants: [],
  },
  {
    id: "burgers_kinder_burger",
    category: "burgers",
    name: "Киндер Бургер",
    description:
      "Любимый бургер всех детей! Бургер с котлетой из отборной говядины, ломтиком нежного сыра, маринованные огурцы, ароматный помидорный соус и хрустящая булочка.",
    price: 145,
    image: "./assets/images/kinder_burger.jpg",
    images: {
      avif: "./assets/images/kinder_burger.avif",
      webp: "./assets/images/kinder_burger.webp",
      jpg: "./assets/images/kinder_burger.jpg",
    },
    variants: [],
  },
  {
    id: "burgers_cheeseburger",
    category: "burgers",
    name: "Чизбургер",
    description:
      "Бургер с котлетой из отборной говядины, ломтиком нежного сыра, маринованным огурцом, маринованным луком, салатом, ароматным помидорным соусом, сладкой горчицей и хрустящей булочкой.",
    price: 155,
    image: "./assets/images/cheeseburger.jpg",
    images: {
      avif: "./assets/images/cheeseburger.avif",
      webp: "./assets/images/cheeseburger.webp",
      jpg: "./assets/images/cheeseburger.jpg",
    },
    variants: [],
  },
  {
    id: "desserts_coconut-chocolate_cake",
    category: "desserts",
    name: "Кокосово-шоколадный торт",
    description:
      "Удивительное сочетание кокоса и шоколада в одном десерте. Подаётся с сахарной пудрой, шоколадным топпингом и десертной вишней.",
    price: 150,
    image: "./assets/images/coconut-chocolate_cake.jpg",
    images: {
      avif: "./assets/images/coconut-chocolate_cake.avif",
      webp: "./assets/images/coconut-chocolate_cake.webp",
      jpg: "./assets/images/coconut-chocolate_cake.jpg",
    },
    variants: [],
  },
  {
    id: "desserts_cheesecake",
    category: "desserts",
    name: "Чизкейк",
    description:
      "Нежнейшее лакомство! Белоснежный торт с восхитительным сливочно-сырным, воздушным вкусом! Вкусный, высокий, нежный и красивый. ",
    price: 165,
    image: "./assets/images/cheesecake.jpg",
    images: {
      avif: "./assets/images/cheesecake.avif",
      webp: "./assets/images/cheesecake.webp",
      jpg: "./assets/images/cheesecake.jpg",
    },
    variants: [],
  },
  {
    id: "desserts_",
    category: "desserts",
    name: "Шоколадный Брауни",
    description:
      "Настоящий американец - восхитительный шоколадный Брауни с шариком мороженого и богатым шоколадным вкусом! Наслаждение, которое хочется испытывать снова и снова...",
    price: 175,
    image: "./assets/images/chocolate_brownie.jpg",
    images: {
      avif: "./assets/images/chocolate_brownie.avif",
      webp: "./assets/images/chocolate_brownie.webp",
      jpg: "./assets/images/chocolate_brownie.jpg",
    },
    variants: [],
  },
  // ...
];
