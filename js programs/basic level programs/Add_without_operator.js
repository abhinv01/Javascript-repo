// given 2 nos and print addition without using "+" without 

let x = 5
let y = 6

//using bitwise
/* a&b to calculate carry,a^b to get sum and store in a, left shift carry and store in num2 and start again till left shift makes no 0, */
function addWithoutOperator(num1,num2){
    if (num2) {
        return addWithoutOperator(num1 ^ num2, (num1 & num2) << 1)
    } else {
        return num1
    }
};



//using Array
function addUsingArray(num1,num2){
    const firstArr = new Array(num1).fill(true);             //replacing all elements in array by true
    const secondArr = new Array(num2).fill(true);
    return [...firstArr,...secondArr].length
}


console.log(addUsingArray(x,y))
console.log(addWithoutOperator(x,y))
