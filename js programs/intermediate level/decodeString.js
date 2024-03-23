/* Decode String
Medium
+10 APs
unsolved
Given an encoded string, return its decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

You may assume that the input string is always valid; there are no extra white spaces, square brackets are well-formed, etc. Furthermore, you may assume that the original data does not contain any digits and that digits are only for those repeat numbers, k. For example, there will not be input like 3a or 2[4].

The test cases are generated so that the length of the output will never exceed 105.

Example 1:
Input:
"3[a]2[bc]"

Output:
aaabcbc

Example 2:
Input:
"3[a2[c]]"

Output:
accaccacc

Constraints:
- `1 <= s.length <= 30`
- `s` consists of lowercase English letters, digits, and square brackets `'[]'`.
- `s` is guaranteed to be **a valid** input.
- All the integers in `s` are in the range `[1, 300]`. */



var decodeString = function(s) {
	// Your code goes here
    let str = s
    let regex = /\d*\[[a-z]*[A-Z]*\]/
    let val,multiplier,length,numAndBrackets;
    // console.log(regex.exec(s));
   
    // console.log(val[0].length);
        while(regex.test(str)){
            
            val = regex.exec(str)
            multiplier = parseInt(val[0])
            length = val[0].length
            numAndBrackets = /[0-9]*[\[\]]/g

            val[0] = val[0].replace(numAndBrackets,"")
            repeatedArr = new Array(multiplier).fill(val[0]).join("")
            // console.log(repeatedArr);
            str = str.split("")
            str.splice(val["index"],length,repeatedArr)
            str = str.join("")
            // console.log(str);
        }
        return str     
    // console.log(repeatedArr,"val",val[0]);

};

let str = "3[a]2[bc]"

console.log(decodeString(str));


var countSegments = function(s) {
    // console.log(s.trim().split("").length,s.trim().split(" "));
    // if (s.trim().split("").length >= 1) {
    //      let newArr = [];
    //      console.log(s.trim().split(" ").filter(e => {
    //          if(e.trim().length > 0){
    //              newArr.push(e)
    //          }
    //      }))
    //      return newArr.length
    //  } else if(s.trim().split(" ").length >= 0){
    //      return 0
    //  }

    let newArr = []
    s = s.trim()
    if(s.split("").length >= 1){
        s.split(" ").forEach(element => {
            // console.log(element);
            element.trim().length > 0 ? newArr.push(element) : null
        });
        // console.log(newArr);
        return newArr.length
    }
    else return 0;
    

 };

 console.log(countSegments("Hello, my name is John"));