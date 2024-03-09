function naiveStringMatch(mainString, pattern) {
    const n = mainString.length;
    const m = pattern.length;
    const occurrences = [];
    
  
    // console.log(reg.test("^"))
    for (let i = 0; i <= n - m; i++) {
      let j;
      for (j = 0; j < m; j++) {
        if (mainString[i + j] !== pattern[j]) {
          break;
        }
      }
  
      if (j === m) {
        occurrences.push(i);
      }
    }
  
    return occurrences;
  }


  console.log(naiveStringMatch("ABCDEFGHIJKLMCDE","CDE"))

  
  
function patternMatching(str, pattern) {
    // Your code goes here
  let regex = new RegExp(`${pattern}`)
  return regex.test(str)
}
let str = "abcdefg", pattern = "cde"


console.log(patternMatching(str,pattern))