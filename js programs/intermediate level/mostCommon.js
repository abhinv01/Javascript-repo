/* Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

The words in paragraph are case-insensitive and the answer should be returned in lowercase.

Example 1:


Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", 
banned = ["hit"]
Output: "ball"
Explanation:
"hit" occurs 3 times, but it is a banned word.
"ball" occurs twice (and no other word does), 
so it is the most frequent non-banned word in the paragraph.
Note that words in the paragraph are not case sensitive,
that punctuation is ignored (even if adjacent to words, such as "ball,"),
and that "hit" isn't the answer even though it occurs more because it is banned.
Example 2:


Input: paragraph = "a.", banned = []
Output: "a"
 
*/


var mostCommonWord = function(paragraph, banned) {
    // Your code goes here
    const puntuationRegex = /[!"#$%&'()*+,\-./:;<=>?@[\\\]^_`{|}~]/g;
    paragraph = paragraph.replace(puntuationRegex,"").toLowerCase()
    // console.log(paragraph)

    let paraArray = paragraph.split(" ")
    
    let counterMap = paraArray.reduce((acc,curr)=>{
        acc[curr] ? acc[curr]++ : acc[curr] = 1
        return acc
    },{})
    // console.log(counterMap);
    let highest = Number.MIN_SAFE_INTEGER;
    let secondHighest = Number.MIN_SAFE_INTEGER;

    for (let num of Object.values(counterMap)) {
        if (num > highest) {
            secondHighest = highest;
            highest = num;
        } else if (num > secondHighest && num < highest) {
            secondHighest = num;
        }
    }
    // console.log(counterMap);
    let secondHighestKey;
    for (const key in counterMap) {
        
        if(counterMap[key] === secondHighest) secondHighestKey = key;
        if(counterMap[key] === highest && !banned.includes(key)) return key
    }
    return secondHighestKey;

};

console.log(mostCommonWord("Bob hit a ball, the hit BALL flew far after it was hit.",["hit"] ));