function rev(str,currIndex) {
    if(str === "") return ""
    if(currIndex === str.length-1) return str
    else {
        str = str[str.length-1] + str.slice(0,str.length-1)
        // console.log(str);
        return rev(str,currIndex+1)
    }
}

console.log(rev("",0));