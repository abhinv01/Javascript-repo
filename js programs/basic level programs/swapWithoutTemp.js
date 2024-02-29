// swap two nos without using temp
let x = 55;
let y = 10
console.log(`value of x is ${x}, value of y is ${y} before swapping`)

//using array destructure
const arr = new Array(x,y);
[y,x] = arr;
console.log(`value of x is ${x}, value of y is ${y}  (1st swap)` )

//using arithmatic operation
x = x+y;  //x = 65
y = x-y;   //y = 55
x = x-y     //x = 10
console.log(`value of x is ${x}, value of y is ${y}  (2nd swap)` )

// using temp
let temp = x;
x = y;
y = temp;
console.log(`value of x is ${x}, value of y is ${y} (3rd swap)`);
