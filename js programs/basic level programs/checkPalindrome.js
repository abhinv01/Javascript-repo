let str = "babaaab"
let halfLength = Math.floor(str.length/2);
let isPalindrome = true;

// using str.at
// for (let i = 0; i < halfLength-1; i++) {
//     let alpha1 = str.at(i);
//     let alpha2 = str.at(-(i+1))
//     if(alpha1 !== alpha2 ){
//         isPalindrome = false
//         break;
//     }
// }


// using str.slice
/* let firstPart = str.slice(0,halfLength);
let secondPart = str.slice((halfLength + 1))

if(firstPart === secondPart.split("").reverse().join("")) isPalindrome=true
else isPalindrome = false
 */

// using Array
let newArr = str.split('');
let i = 0;
let j = newArr.length-1;

while(i!==j){
    if(newArr[i] !== newArr[j]){
        isPalindrome = false
        break;
    }
    i++;
    j--;

}


isPalindrome ? console.log(`${str} is palindrome`) : console.log(`${str} is not a palindrome`);



function iisPalindrome(str) {
    // Write your code here

    const cleanedStr = str.replace(/\W+/g,"").toLowerCase()
    console.log(cleanedStr)
    const reversedStr = cleanedStr.split("").reverse().join("");
    return cleanedStr === reversedStr;
}
console.log(iisPalindrome("Madam madam"))

