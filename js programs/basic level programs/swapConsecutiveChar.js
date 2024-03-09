/* Write a JavaScript function swapConsecutiveCharacters that takes a string as input and rearranges the consecutive characters within the string in a swapped manner and returns a swapped string.
Example 1:
Input: "abcdef"
Output: "badcfe"
Example 2:
Input: "AlmaBetter"
Output: "lAameBttre" */



function swapConsecutiveCharacters(str) {
    // Write your code inside this function only.
    let arr = str.split("")
    let i = 0;
    for(let j = 1; j<arr.length; j+=2){
        if(arr[j]){
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
        i+=2
    }
    return arr.join("")

}

console.log(swapConsecutiveCharacters("abcdefg"));

