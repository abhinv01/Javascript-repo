/* Find the longest common Prefix
Medium
+10 APs
unsolved
Write a JavaScript function to find the longest common prefix of an array of strings.

For example, if the input array is ["flower", "flow", "flight"], the function should return "fl".

Example 1:
Input:
strs = ["flower", "flow", "flight"]

Output:
"fl"

Example 2:
Input:
strs = ["dog", "racecar", "car"]

Output:
" " */


function findLongestCommonPrefix(strs) {
    // Your code goes here
    if (strs.length === 0) {
        return "";
      }
    let prefix = strs[0];

    for(let i = 1; i < strs.length;i++){
        while(strs[i].indexOf(prefix) !== 0){
            console.log("while")
            prefix = prefix.substring(0,prefix.length-1)
            if(prefix === "") return ""
        }
    }  
    return prefix
}

let strs = ["flower", "flow", "floght","flovour","floyash"]
console.log(findLongestCommonPrefix(strs));