const items = [
  { name: 'Apple', price: 50,qty: 4,status:'pending' },
  { name: 'Banana', price: 30,qty: 12, status:'pending' },
  { name: 'Orange', price: 80,qty: 7, status:'pending' }
];
const updatedItems = items.map((item)=>({...item,price:item.price+5,qty:item.qty,total:newPrice*item.qty,status:'completed'}));
updatedItems.forEach(item => {
  console.log(`Name: ${item.name}, Price: ${item.price},Status: ${item.status},Total: ${item.total},Qty: ${item.qty}`);
});
