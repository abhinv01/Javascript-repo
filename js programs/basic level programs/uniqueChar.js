//check if every character in string is unique
const isUnique = (str) => {
    let obj = {}
    console.log(str);

    for (let i of str) {
        (!obj[i] ? obj[i] = 1 : obj[i]++);
    }

    return obj
}
let s = "qwertyuiopasdghjkl";
let countObj = isUnique(s);

console.log((Object.values(countObj)).every(v => v === 1) && "Every char is unique")