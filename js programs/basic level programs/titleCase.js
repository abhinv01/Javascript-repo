//write a program to make first letter in everyword uppercase

function titleCase(sentence) {
    // write your code here
const words = sentence.toLowerCase().split(' ');

let final = words.map((element, index)=>element[0].toUpperCase()+element.slice(1))

return final.join(' ');
}

console.log(titleCase("Be yourself; everyone else is already taken."));






function countOccurrences(str, char) {
    // Write your code here
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str[i]===char) count++
        
    }
    return count;
}

console.log(countOccurrences("HellLo world","l"))