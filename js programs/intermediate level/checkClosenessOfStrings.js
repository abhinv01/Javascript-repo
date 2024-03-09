// given two strings and check if one is just one edit away from being equal to another
//available edits are -> insert char, remove char, replace char
//eg keyboard is one edit away from being equal to keyboar,keyboards,keyboarT for this return true.
//kale
let str1 = "baka"
let str2 = "bake"

const checkInsert = (str1,str2) => {
    if(str1.lenght === str2.lenght+1 || str1.lenght+1 === str2.lenght){
        return true
    }
    else return false
}

const Almostequal = (str1,str2) => {
    // return false if equal
    if (str1 === str2) return false                       
    
    let obj1 = {}
    let obj2 = {}
    let differencesInStr = 0;
    for (const i of str1) {
        obj1[i] ? obj1[i]++ : obj1[i] = 1;
    }
    for (const i of str2) {
        obj2[i] ? obj2[i]++ : obj2[i] = 1;
    }
    console.dir(obj1)
    console.dir(obj2)

    for (const key in obj1){
        console.log("inside obj1")
        if(!obj2[key]) differencesInStr++
        if(obj1[key] === obj2[key]+1 || obj1[key]+1 === obj2[key]) differencesInStr++


        if(differencesInStr > 1) {console.log(differencesInStr);return false}
        
    }

    for (const key in obj2){
        console.log("inside obj2")
        if(!obj1[key]) differencesInStr++
        if(obj1[key] === obj2[key]+1 || obj1[key]+1 === obj2[key]) differencesInStr++


        if(differencesInStr > 1) {console.log(differencesInStr);return false}
        
    }
    console.log(differencesInStr)
    if(differencesInStr === 1) return true
    // if(checkInsert(str1,str2)) return true


}

/* test cases needs to be tested more */
console.log(Almostequal(str1,str2) ? `${str1} and ${str2} are just one edit away from being equal`: `${str1} and ${str2} are not one edit away from being equal`)