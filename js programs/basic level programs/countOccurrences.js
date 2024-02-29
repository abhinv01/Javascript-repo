//there is a given a string and output should be an object counting occurences of each variable

let str = "It's not legendary, unless your friends are there to see it."
let objWithalpha = {}
for (let i = 0; i < str.length; i++) {
    if(objWithalpha[str[i]]){
        objWithalpha = {...objWithalpha,[str[i]]:objWithalpha[str[i]] + 1}
    }
    else{
        objWithalpha = {...objWithalpha,[str[i]]: 1}
    }
    
}
console.log(objWithalpha)
console.log(objWithalpha.z || 0)

//counting only vowels
let countVowels = {};
regex = /[aeiou]/gi;
vowels = "aeiou".split("")
for (let i = 0; i < str.length; i++) {
    if(vowels.includes(str[i])){
        // countVowels[str[i]] = (countVowels[str[i]] || 0) + 1 
        !countVowels[str[i]]  ? countVowels[str[i]] = 1 : countVowels[str[i]]+=1 
    }
}

console.log(countVowels);
max = 0;
alpha = ""
let maxobj = []
for (const key in countVowels) {
    console.log(key)
    if(countVowels[key] > max) {
        // maxobj.push({alpha:key,count:countVowels[key]})
        max = countVowels[key]
        alpha = key;
    }
}
maxobj.push({alpha:alpha,count:max})
console.log(maxobj)


