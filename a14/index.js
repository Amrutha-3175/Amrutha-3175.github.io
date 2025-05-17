const items = [
  { name: 'Apple', price: 50, status:'pending' },
  { name: 'Banana', price: 30, status:'pending' },
  { name: 'Orange', price: 80, status:'pending' }
];
const updatedItems = items.map((item)=>({...item,price:item.price+5,status:'completed'}));
updatedItems.forEach(item => {
  console.log(`Name: ${item.name}, Price: ${item.price},Status: ${item.status}`);
});
