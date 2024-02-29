//a string is given, if char repeat consequently then remove it and add number 
// eg aabbccdd = a2b2c2d2, aabbcd = a2b2cd

str = "aabbccdd"
let counter = 1
newstr = ""
for (let i = 0; i< str.length; i++) {
    if(str[i] === str[i+1]) counter++
    else{ newstr+=str[i]+counter;

    }
    
}/* Incomplete solve */