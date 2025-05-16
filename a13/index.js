const items = [
  { name: 'Apple', price: 50 },
  { name: 'Banana', price: 30 },
  { name: 'Orange', price: 80 }
];

// Create a new array with updated prices
const updatedItems = items.map(item => ({
  name: item.name,
  price: item.price + 5
}));

// Print updated items
updatedItems.forEach(item => {
  console.log(`Name: {item.name}, Price: {item.price}`);
});
