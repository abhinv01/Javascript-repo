/* Write a JavaScript function fizzBuzz that takes a positive integer n as input and returns an array of strings.
Replace numbers divisible by 3 with "Fizz", numbers divisible by 4 with "Buzz", and numbers divisible by both 3 and 4 with "FizzBuzz". */

/* Input: 5
Output: ["1", "2", "Fizz", "Buzz", "5"]

Input: 12
Output: ["1", "2", "Fizz", "Buzz", "5", "Fizz", "7", "Buzz", "Fizz", "10", "11", "FizzBuzz"]
*/


function fizzBuzz(n) {
    const result = [];

    for (let i = 1; i <= n; i++) {
        let key;
       
        if (i % 3 === 0 && i % 4 === 0) {
            key = "FizzBuzz"
        } else if (i % 3 === 0) {
            key = "Fizz"
        } else if (i % 4 === 0) {
            key = "Buzz"
        } else {
            key = "default"
        }

        switch (key) {
            case "FizzBuzz":
                result.push("FizzBuzz")
                break;
            case "Fizz":
                result.push("Fizz")
                break;
            case "Buzz":
                result.push("Buzz")
                break;
        
            default:
                result.push(i.toString())
                break;
        }
    }

    return result;
}

console.log(fizzBuzz(5));

function reverseString(str) {
    // Write your code inside this function only.
    return str.split("").reverse().join("")

}
console.log(reverseString("JavaScript"));