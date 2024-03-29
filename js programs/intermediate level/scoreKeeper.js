/* Scorekeeper's Unconventional Challenge
In a peculiar baseball game, a dedicated scorekeeper faces an extraordinary challenge. They have a function called CallPoints that takes an array operation as an argument. The operation array contains a series of instructions where each entry can be an integer representing a new score, a '+' sign indicating the sum of the previous two scores, a 'D' to double the previous score, or a 'C' to invalidate the previous score. The scorekeeper uses the CallPoints function to compute the sum of all the scores on the record after performing all the operations. How will the scorekeeper utilize the CallPoints function to solve this extraordinary problem? 
How will the scorekeeper solve this extraordinary problem?
Example 1:
Input: ops = ["5","2","C","D","+"]
Output: 30
Explanation:
"5" - Add 5 to the record, record is now [5].
"2" - Add 2 to the record, record is now [5, 2].
"C" - Invalidate and remove the previous score, record is now [5].
"D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
"+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
The total sum is 5 + 10 + 15 = 30.

Example 2:
Input: ops = ["5","-2","4","C","D","9","+","+"]
Output: 27
Explanation:
"5" - Add 5 to the record, record is now [5].
"-2" - Add -2 to the record, record is now [5, -2].
"4" - Add 4 to the record, record is now [5, -2, 4].
"C" - Invalidate and remove the previous score, record is now [5, -2].
"D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
"9" - Add 9 to the record, record is now [5, -2, -4, 9].
"+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
"+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.

Example 3:
Input: ops = ["1","C"]
Output: 0
Explanation:
"1" - Add 1 to the record, record is now [1].
"C" - Invalidate and remove the previous score, record is now [].
Since the record is empty, the total sum is 0. */


//changed operation.length wherever necessary 
//in both for loops condition changed to length-1
var callPoints = function(operations) {
    let len = operations.length
    for (let i = 0; i <= len-1; i++) {
        if (operations[i] === "+") {
            sum = operations[i - 2] + operations[i - 1];
            operations[i] = sum;
        } else if (operations[i] === "D") {
            newD = operations[i - 1] * 2;
            operations[i] = newD;
        } else if (operations[i] === "C") {
            operations.splice(i - 1, 2);
            i = i - 2;
            len = operations.length
        } else {
            var integer = +operations[i];
            operations[i] = integer;
        }
    }
    // console.log(operations);
    // to calculate the totalSum only
    let totalSum = 0;
    for (let i = 0; i <= operations.length-1; i++) {
        totalSum += operations[i];
    }

    return totalSum;
};
let ops = ["5","2","C","D","+"]
console.log(callPoints(ops));