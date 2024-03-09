//find second highest in array without using sort

console.log((function (params) {
    if(params.length < 2) return "Elements less than 2"
    else{
        let smallest = Infinity , secondSmallest = Infinity;
        for (let i = 0; i < params.length; i++) {
            if(params[i] < smallest){
                secondSmallest = smallest;
                smallest = params[i]
            }
            else if(params[i] < secondSmallest && params[i] > smallest){
                secondSmallest = params[i]
            }
            
        }
        return [secondSmallest,smallest]
    }

})([5,4,6,9,8,7,1,3,6]))

function longestSubstringWithoutRepeatingChars(str) {
    let longest = '';
    for (let i = 0; i < str.length; i++) {
      let substring = '';
      for (let j = i; j < str.length; j++) {
        if (substring.includes(str[j])) {
          break;
        }
        substring += str[j];
      }
      if (substring.length > longest.length) {
        longest = substring;
      }
    }
    return longest;
  }
  
  console.log(longestSubstringWithoutRepeatingChars("abcdbcbb"));




  