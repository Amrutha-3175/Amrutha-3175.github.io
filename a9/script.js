const fruits = [
  {
    name: "Apple",
    price: 120,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/15/Red_Apple.jpg"
  },
  {
    name: "Banana",
    price: 40,
    image: "https://upload.wikimedia.org/wikipedia/commons/8/8a/Banana-Single.jpg"
  },
  {
    name: "Orange",
    price: 60,
    image: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Orange-Fruit-Pieces.jpg"
  },
  {
    name: "Grapes",
    price: 80,
    image: "https://upload.wikimedia.org/wikipedia/commons/1/19/Table_grapes_on_white.jpg"
  },
  {
    name: "Mango",
    price: 100,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
  }
];

const container = document.getElementById("fruitContainer");

fruits.forEach(fruit => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${fruit.image}" alt="${fruit.name}">
    <div class="card-body">
      <div class="fruit-name">${fruit.name}</div>
      <div class="price">₹${fruit.price}</div>
    </div>
  `;

  container.appendChild(card);
});
