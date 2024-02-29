// given are 3 numbers, check if all of them have same last digit.

let a = 15,b = 35,c = 55;
debugger;
a = ((a.toString()).at(-1));
b = ((b.toString()).at(-1));
c = ((c.toString()).at(-1));
console.log(typeof a,typeof b,typeof c);
(a===b && b === c) ? console.log(true) : console.log(false)


// using % operator
a = 15,b = 35,c = 55;
(a%10 === b%10 && a%10 === c%10) ? console.log(true) : console.log(false)