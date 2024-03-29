/* Minimum Moves for Valid Parentheses
Lucy is a mathematics enthusiast who enjoys tackling intriguing problems. Recently, she encountered a fascinating challenge involving parentheses strings. The task at hand is to create a function called minAddToMakeValid that takes an argument s, representing a string of parentheses, and determines the minimum number of additions required to transform the given string into a valid parentheses string. 
A valid string adheres to the following three conditions:
It can be an empty string.
It can be expressed as a concatenation of two valid strings.
It can be represented as a valid string enclosed within parentheses.
Lucy is excited about this problem and is eager to come up with a solution. Can you assist Lucy in solving this puzzle? 

Example 1:
Input: s = "(()"
Output: 1
Explanation: To make the string "(()" valid, Lucy can add a closing parenthesis at the end, resulting in "(())"

Example 2:
Input: s = "())"
Output: 1
Explanation: Lucy needs to add an opening parenthesis at the beginning,
an opening parenthesis before the second closing parenthesis, and a closing parenthesis at the end.
This transforms the input string "())" into the valid string "(())"

Example 3:
Input: s = "()))(("
Output: 4
Explanation: In order to make the string "()))((" valid, Lucy can add an opening parenthesis at the beginning,
a closing parenthesis after the first two opening parentheses,
an opening parenthesis before the last two closing parentheses,
and a closing parenthesis at the end. This results in the valid string "((()))" */


var minAddToMakeValid = function(s) {
    let open = 0, close = 0;
    
    for(let c of s) {
        if(c === '(') open++;
        else if(open) close++;
        else open--;
    }
    return open + close;
};
let  s = ")))(("

console.log(minAddToMakeValid(s))