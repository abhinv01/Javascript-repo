//given is a sentence, arrange alphabets in each word alphabetically.

let str = "What you get by achieving your goals is not as important as what you become by achieving your goals"
str = str.toLocaleLowerCase();

let newArr =  str.split(" ");

let sortString = (stringg) => {
    return stringg.split("").sort().join("");
};
sortedArr = []
for (let i = 0; i < newArr.length; i++) {
    sortedArr.push(sortString(newArr[i]))
}


const createObj = (array1,array2) => {
    let newobj = {}
    array1.forEach((element,index,arr)=> {
        if (newobj[element]) {
            newobj[`${element}${index}`] = array2[index]
        }
        else{
        newobj[element] = array2[index]}
    });
    return newobj;
}
console.log(newArr)
console.log(createObj(newArr,sortedArr))
