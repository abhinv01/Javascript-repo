//calculate the total cart value from given array of objects using value and quantity

const cart1 = [
  { name: "Fruits", price: 10, quantity: 5 },
  { name: "Vegetables", price: 8, quantity: 3 },
  { name: "Dairy", price: 5, quantity: 2 },
  { name: "Snacks", price: 3, quantity: 10 },
];

  function calculateTotal(cart) {
    // Write your code here
    let total = 0;
    total = cart.reduce((acc,curr)=> {
        return (acc+ curr.price*curr.quantity)
    },0)
    return total;
}

console.log(calculateTotal(cart1))
