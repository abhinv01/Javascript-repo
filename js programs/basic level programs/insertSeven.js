/*
You are given a string consisting of characters, including spaces. Your task is to insert the character "7" immediately after every set of 6 characters from the start of the string, while ignoring spaces. The spaces should be skipped while counting the characters.
Write a JavaScript function insert7 that takes a string as input and returns the modified string after performing the required insertion.
Example 1:
Input: "Hello World and Universe!"
Output: "Hello W7orld an7d Unive7rse!"
Example 2:
Input: "Full Stack Web Development"
Output: "Full St7ack Web7 Develo7pment" 
*/

function insert7(inputString) {
    // Write your code inside this function only.
    let str = "",counter = 0;
    for (let i = 0; i < inputString.length; i++) {
        if(/\s/g.test(inputString[i])) {
            str+=inputString[i]
            continue    
        }
        if(counter === 5){
            str += `${inputString[i]}7`
            counter = 0
        }
        else{
            str+=inputString[i]
            counter++
        }

            
    }
    return str;

}
console.log(insert7("Hello World and Universe!"));


