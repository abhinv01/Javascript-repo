//check if palindrome

function palindrome(str){
    if(str[0] !== str[str.length-1]) return false
    else if(str.length <= 0) return true

    //slicing first and last letter out of string and checking first and last letter
    return palindrome(str.slice(1,str.length-1))
}

console.log(palindrome("baab"));