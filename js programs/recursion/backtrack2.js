/* Letter Combinations of a Phone Number
Medium
+10 APs
unsolved
Michael found an old cell phone that only has numbers associated with letters. He wants to generate all possible letter combinations that can be formed by dialing a given sequence of digits. Write a function to help Michael find these combinations.



Example 1:
Input:
digits = "23"

Output:
["ad","ae","af","bd","be","bf","cd","ce","cf"]

Example 2:
Input:
digits = ""

Output:
[]

Example 3:
Input:
digits = "2"

Output:
["a","b","c"] */


var letterCombinations = function(digits) {
    // Your code goes here
    digits = digits.toString()
    let str = ""
    let obj = {"1":"abc","2":"def","3":"ghi","4":"jkl","5":"mno","6":"pqrs","7":"tuv","9":"wxyz"}
    // console.log(obj[2]);
    for (let i = 0; i < digits.length; i++) {
        str += obj[i+1]        
    }

    let result = [],temp = ""

    function recur(str,ind){
        if(ind === str.length){
            return temp.length === 2 ? result.push(temp) : null
        }
        temp += str[ind]
        recur(str,ind+1)
        temp = temp.slice(0, -1);
        recur(str,ind+1)
    }
    recur(str,0)
    return result
};

console.log(letterCombinations("23"));