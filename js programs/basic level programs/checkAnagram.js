//given are 2 strings, check if they are anagram of each other i.e whether characters in both string are same but arranged differently
//eg listen = silent, sakshi != kashish //as "h" is extra in latter

const str1 = "Sakshi";
const str2 = "kashis";

const isAnagram = (str1,str2) => {
    str1 = str1.toLowerCase()
    str2 = str2.toLowerCase()
    
    let obj1 = {};
    let obj2 = {};
    if (str1 === str2) return true
    else if (str1.length !== str2.length) return false
    else{
        for (let i = 0;i<str1.length;i++){
            console.log(str1[i])
            console.log(obj1[str1[i]])
            !obj1[str1[i]] ? obj1[str1[i]] = 1 : obj1[str1[i]]++  
            !obj2[str2[i]] ? obj2[str2[i]] = 1 : obj2[str2[i]]++  
        }
        console.log(obj1,obj2)
        for (const key in obj1) {
            if(obj1[key] !== obj2[key]) return false
        }
        
        return true
    }
}

console.log(isAnagram(str1,str2) && `Yes ${str1} and ${str2} are anagram`)