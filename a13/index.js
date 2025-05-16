const items = [
  { name: 'Apple', price: 0.5 },
  { name: 'Banana', price: 0.3 },
  { name: 'Orange', price: 0.8 }
];

// Create a new array with updated prices
const updatedItems = items.map(item => ({
  name: item.name,
  price: item.price + 5
}));

// Print updated items
updatedItems.forEach(item => {
  console.log(`Name: ${item.name}, Price: $${item.price}`);
});
