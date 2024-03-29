/* Example 1:
Input: s = "Hello World"
Output: 5
Explanation: The last word is "World" with a length of 5.
Example 2:
Input: s = " fly me to the moon "
Output: 4
Explanation: The last word is "moon" with a length of 4.
Example 3:
Input: s = "luffy is still joyboy"
Output: 6
Explanation: The last word is "joyboy" with a length of 6. */


// Worst Case

function lengthOfLastWord(s) {
    // Write your code inside this function only.
    let arr = s.split(" ")
    console.log(arr);
    
    if(arr[arr.length-1].length !== 0) return arr[arr.length-1].length 
    else return arr[arr.length-2].length 

}

// Best Case

function BlengthOfLastWord(s) {
    // Write your code inside this function only.
    let space = 0
    for (let i = s.length-1; i >= 0; i--) {
    if(i===s.length-1 && s[i] === " ") space++
    else if(s[i] === " ") return (s.length -i-1) -space 
    }

}
let s = "luffy is still joyboy "
console.log(lengthOfLastWord(s));
console.log(BlengthOfLastWord(s))