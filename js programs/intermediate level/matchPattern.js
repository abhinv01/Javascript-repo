/* Write a JavaScript function to check if a given string matches a pattern of letters and numbers, represented by a string of "x" and "y" characters.

For example, if the pattern is "xyyx" and the input string is "abbc", the function should return true. If the input string is "abba", the function should return false.

Example 1:
Input:
pattern = "xyyx", input = "abbc"

Output:
false

Example 2:
Input:
pattern = "xyyx", input = "abba"

Output:
true */

function matchPattern(pattern, input) {
    if (pattern.length !== input.length) {
      return false;
    }
  
    const map = new Map();
  
    for (let i = 0; i < pattern.length; i++) {
      const p = pattern.charAt(i);
      const c = input.charAt(i);
  
      if (!map.has(p)) {
        if (map.has(c)) {
          return false;
        }
        map.set(p, c);
      } 
      else {
        if (map.get(p) !== c) {
          return false;
        }
      }
    }
  
    return true;
  }
let pattern = "xyyx", input = "abbc"
console.log(matchPattern(pattern,input))




//sliding window

function longestSubstringWithoutRepeatingChars(str) {
    let longest = '';
    let start = 0;
    let charMap = new Map();
    for (let end = 0; end < str.length; end++) {
      if (charMap.has(str[end])) {
        start = Math.max(start, charMap.get(str[end]) + 1);
      }
      charMap.set(str[end], end);
      let substring = str.slice(start, end + 1);
      if (substring.length > longest.length) {
        longest = substring;
      }
    }
    return longest;
  }
  
  console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));