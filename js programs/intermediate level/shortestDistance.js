/* Shortest Word Distance
Given an array of strings wordsDict and two distinct strings word1 and word2, which are both present in the array. Write a JavaScript function shortestDistance that returns the minimum distance between the positions of word1 and word2 within the list of words.
Example 1:
const wordsDict = ["practice", "makes", "perfect", "coding", "makes"];

Input: wordsDict, "coding", "makes"
Output: 1
Example 2:
const wordsDict = ["apple", "banana", "cherry", "apple", "date", "banana", "fig"];

Input: wordsDict, "apple", "fig"
Output: 3
Note:
Strings can be present more than once in the array. */

function shortestDistance(wordsDict, word1, word2) {
    // Write your code inside this function only.
    let arrWord1=[], arrWord2=[], min = undefined;
    for (const index in wordsDict) {
        if(wordsDict[index] === word1) arrWord1.push(index)
        else if(wordsDict[index] === word2) arrWord2.push(index)
    }   
    // console.log(arrWord1,arrWord2)
    let allowFirst = true;

    for(const i of arrWord1){
        for(const j of arrWord2){
            let distance = Math.abs(j-i);

            if(allowFirst){
                min = distance;
                allowFirst = !allowFirst
            }
            if(distance < min){
                min = distance
            }
        }
    }
    return min

}
const wordsDict =  ["practice", "makes", "perfect", "coding", "makes"]
console.log(shortestDistance(wordsDict,"coding","makes"));


