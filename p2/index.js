const products=[
    {id:1, name:"T-shirt", price:200},
    {id:2, name:"Jeans", price:300},
    {id;3, name:"Shirt", price:500},

];
const showProducts=() =>{
    const root = document.getElementById("root");
    root.innerHTML = "<h2>Available Goods are</h2>";
    products.forEach(product =>{
        const productDiv = document.getElementById("div");
         productDiv.className = "product";
    productDiv.innerHTML = `
      <h3>${product.name}</h3>
      <p>Price: $${product.price}</p>
      <button onclick="addToCart(${product.id})">Add to Cart</button>
    `;
    root.appendChild(productDiv);
  });
};

const addToCart = (productId) => {
  const product = products.find(p => p.id === productId);
  alert(`${product.name} added to cart!`);
};
    
