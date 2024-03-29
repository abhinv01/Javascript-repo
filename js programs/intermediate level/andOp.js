/* Binaryville of Bitland
Once upon a time, in the land of Bitland, there was a village called Binaryville. The villagers of Binaryville were known for their exceptional skills in manipulating bits. One day, the village elder decided to organize a coding competition featuring the maxBitwise function with a functional argument arr to test the skills of the villagers in bit manipulation.
The competition began with a challenging problem: Using the maxBitwise function, given an array of integers, find a pair of numbers that have the maximum bitwise AND value among all possible pairs. The bitwise AND value of two numbers is obtained by performing the logical AND operation on the binary representations of the numbers.
Example 1:
Input: [2, 3, 4, 5, 6]
Output: 4
Explanation: The maximum bitwise AND value is 4 (binary: 100), obtained by ANDing 4 and 5.
Example 2:
Input (nums): [10, 12, 6, 8]
Output: 8

Explanation: The binary representations of these numbers are 1010, 1100, 0110, and 1000 respectively.
The pair (12, 8) has the maximum bitwise AND value, which is 1000 (8 in decimal).
*/


// Worst Case

function worstmaxBitwise(arr) {
    // Write your code inside this function only.
    let maxAnd = 0;
    for (let i = 0; i < arr.length - 1; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            const currentAnd = arr[i] & arr[j];
            if (currentAnd > maxAnd) {
                maxAnd = currentAnd;
            }
        }
    }
    return maxAnd;
}

// Best Case

function bestmaxBitwise(arr) {
    // Write your code inside this function only.
    let newArr = [...arr]
    newArr.sort((a,b) => b-a)
    return newArr[0] & newArr[1]
}

let nums =  [10, 12, 6, 8]
console.log(worstmaxBitwise(nums));
console.log(bestmaxBitwise(nums));
