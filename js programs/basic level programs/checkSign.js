/* Check Sign
Write a JavaScript function checkSign that takes three numbers as input and returns a string representing the signs of the numbers.
If all three numbers are positive, return "+++"
If two numbers are positive and one is negative, return "++-"
If one number is positive and two are negative, return "+--"
If all three numbers are negative, return "---" */

/* 
Input: 2, 5, 7
Output: "+++"
Input: 8, -3, 4
Output: "++-" */


function checkSign(num1, num2, num3) {
    // Write your code inside this function only.
    let positive = 0,negative = 0;
    for (const key in arguments) {
        if(arguments[key] > 0) positive++;
        else negative++
    }
    let str = "+".repeat(positive) + "-".repeat(negative) 
    return str
}

console.log(checkSign(2,-3,4));
console.log(new Array(5).fill("*"));

