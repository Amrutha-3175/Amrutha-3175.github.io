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
    name: "Mango",
    price: 100,
    image: "https://upload.wikimedia.org/wikipedia/commons/9/90/Hapus_Mango.jpg"
  }
];

const container = document.getElementById("fruitContainer");
function renderFruits(){
    container.innerHTML="";
}
fruits.forEach(fruit => {
  container.innerHTML += `
      <div class="card">
        <img src="${fruit.image}" alt="${fruit.name}" />
        <div class="card-body">
          <h3 class="fruit-name">${fruit.name}</h3>
          <p class="price">Price: ₹${fruit.price}</p>
        </div>
      </div>
    `;
  });


document.getElementById("addFruitBtn").addEventListener("click", () => {
  const id = Number(document.getElementById("fruitId").value);
  const name = document.getElementById("fruitName").value.trim();
  const price = Number(document.getElementById("fruitPrice").value);
  const image = document.getElementById("fruitImage").value.trim();

  if (!id || !name || !price || !image) {
    alert("Please fill all the fields correctly.");
    return;
  }

  
  fruits.push({ id, name, price, image });

  
  document.getElementById("fruitId").value = "";
  document.getElementById("fruitName").value = "";
  document.getElementById("fruitPrice").value = "";
  document.getElementById("fruitImage").value = "";

  renderFruits();
});


renderFruits();

