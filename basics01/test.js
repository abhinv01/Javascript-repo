console.log(typeof "Nirlon")

// "use strict"; treats all js code as a newer version as per newer standards
// Node and deno is used to compile js code outside browser
// documentation on MDN by mozilla or tc39.es by ecmascript

/* Datatypes (primitive)
    Number, String , Boolean, Null , undefined , Symbol, NaN, BigInt
    typeof (null, array, object) is object*/

/*pre and post increment 
    let a = ++9 -> a = 10
    let a = 9++ -> a = 10 */

/* operations
    "1"+2 -> "12"
    1+"2" -> "12"
    1+2+"3" -> "33" */

/* comparing diff data types
    null > 0 -> false 
    null == 0 -> false
    null >= 0 -> true

    undefined == 0 false
    undefined > 0 false
    undefined < 0 false

    NaN == 0 false
    NaN > 0 false
    NaN < 0 false
    */

/* Typeof object, array and null is object
 */

/* string operations */
let str = new String("144hz adaptive sync Ryzen 8 cores")
console.log(str.split(" ",3))

// const car = Symbol(56)
// console.log(typeof toString(car))

// console.log(Math.floor(Math.random() * 6 + 1))




// Date

/* let myDate = new Date()
console.log(Date.now());
console.log(myDate.toLocaleDateString());

let newDate = new Date(2024,0,36)
console.log(newDate.toLocaleString('en-In', {timeStyle:"long",dateStyle:"full" }));
console.log(Date.now());

 */


// Array

/* let a = [1,5,6,9,8,8]
console.log([...a,...[5,5,5,5,5]])


console.log(Array.from(a)) */


//Object

// const a = Symbol("hello")
// let myObj = {[a]:1,
// "b":2,"c":3,1:{"asa":22,"nk":33}}

// o = Object.create({})                      //singleton obj
// console.log(myObj?.["1"]?.asa);

// let tinderUser = { 'key 1': 1, 'key 2': 2, 'key 3': 3, 'key 4': 4, 'key 5': 5, "hey":6 }
// const numbers = [1,2,3,4,5]
// let ana = "hey"
// const { ['key 1']:le } = tinderUser   //object destructuring with space in keys of dynamicaly accessing key
// console.log(le);



//Json has both keys and values in string format, values which have number are not string 


//IIFE, Immediately executing functions

// (() => {
//     // some initiation code
//     let firstVariable = 4;
//     let secondVariable = 5;
//     console.log(`first variable ${firstVariable} and second variable ${secondVariable}`);
//   })();


// (function() { 
//     console.log("Unnamed IIFE"); 
// })();

// (function chai(chai){
//     console.log("Named IIFE with parameter as " + chai)
// })("yewale");




// +++++++++++code execution in JS++++++++
/* 3 steps
1.Global execution
2.memory  phase (assign memory to variables but not assign values to variables and add reference for function in memory)
3.execution phase (execute by assigning values to variable and executing function as well by considering it separate block and executing function first (by adding it to stack execute it and then removing it) and then execute global execution */



// operators
/* if(true) {console.log("hello"); 
console.log("hello"); 
console.log("hello"); 
console.log("hello") } */

/* let day = "onday"

switch(day){
    case "Monday":{
        console.log("Monday");
        break;
    }
    case "tuesday":{
        console.log("tuesday");
        break;
    }
    case "wedne":{
        console.log("wednesday");
        break;
    }
    default:{
        console.log("code");
    }
} */
 
/* nullish coalescing operator
console.log(false??5) 
// ignores null and undefined value and prefers other value whichever is specified
 */


//for loop with break and continue

/* for (let index = 0; index <= 20; index++) {
    if (index%5==0) {
        console.log("ignored" + index)
        continue  //will directly jump to next iteration without executing remaining code
    }

    if (index > 15) {
        break;      //come out of loop
    }
    const element = index;
    console.log(element);
} */



/* // ------------map--------------
// it is key value pair data structure with unique keys and maintains order of insertion
//use for of to iterate
const map = new Map()
map.set("IN","India")
map.set("USA","America")
map.set("FR","France")


// for (const [i,j] of map) {
//     console.log(j)
// } */


// -----------foreach

/* const printVal = function(val){
    console.log(val)
}

let arr1 = ["js","java","py","ruby","rust"]
arr1.forEach(printVal)



const car = [
    {type:"Fiat", model:"500", color:"white"},
    {type:"maruti", model:"500", color:"white"},
    {type:"tata", model:"500", color:"white"},
    {type:"kia", model:"500", color:"white"}
];

car.forEach((val)=>{                                          //forEach for arrays
    for (const key in val) {                                 //use forin with object, it gives keys
        console.log(val[key])
    }
}) */

/* 
// -----------filter, map , reduce
const nums = [1,2,3,4,5,6,7]
const filterArr = nums.filter((val)=>{
     val%2 === 0
}) 
console.log(filterArr);

const mappedArray = nums.map((val)=>{
    return val % 2 ===0
}) 
console.log("mapping ",mappedArray);

const addition = nums.reduce((acc,curr)=>acc+curr,0)
console.log(addition);


const fruits = [ 'Banana', 'Orange', 'Apple', 'Orange', 'Pear', 'Banana']
const occurrences = fruits.reduce((acc, currFruit) => {
    console.log([currFruit])
    return {...acc, [currFruit]: (acc[currFruit] || 0) + 1 }
}, {})
console.log(occurrences); */



/* // ----------chaining
let updatedArray = nums.map(num => num*10).map(num1 => num1 + 15).filter(num3 => num3 > 50)      //first map will give numbers multiplied by 10, then 2nd map have num1 as paramenter and it will iterate over array received from previous map and 3rd filter will apply on array received from 2nd map
console.log(updatedArray) */

// console.log(("a".localeCompare("z")))         //A has lower order than Z, a has lower order than A, a has higher order than H
// console.log("h" < "A");

const D = new Date();
let newArr = [];
newArr.push((D.toLocaleString()))
newArr.push((D.toLocaleDateString()))
newArr.push((D.toLocaleTimeString()))
newArr.push((D.toDateString()))
newArr.push((D.toTimeString()))
// console.dir(newArr)

// console.log([1,2].concat(newArr))


// object merging
let ob1 = {a:1}
let ob2 = {b:2}
let keyy = "b"
Object.assign(ob1,ob2)   //deep copy into ob1 ie ob1 = ob1+ob2
ob2.b = 55
// console.log(ob1,ob2)
// console.log(ob2[keyy]);


/* 
const employees = {
    engineers: {
        first: {
            id: 1,
            name: "John Doe",
            occupation: "Back-end Engineer"
        },
        second: {
            id: 2,
            name: "Jane Doe",
            occupation: "Front-end Engineer",
            address:{city:"pune",pin:444}
        },
    }
};
let ci = "city" 
const {engineers:{first}} = employees                    //object destructuring on nested objects
const {engineers:{second:{address:{[ci]:ct}}}} = employees  ;                  //object destructuring on nested objects
({engineers} = employees)                               //object destructuring without declaring object
console.log(first,ct,engineers);
  */


// ----------------IIFE
/* (function ImmediateInvoke(){
    console.log("invoked named")
})();

(()=> console.dir("invoked Arrow"))(); */



// -----------------set                                        //it is a collection with unique elements
const s = new Set("hello")
console.log(s);
for (const iterator of s) {
    console.log("for of "+iterator)
}

for (const key in s) {
    console.log("for in ",key);         //this will not work as there is no index/key in sets, only order of insertion is maintained
        
}
                                        //to map,reduce,filter convert set back to array by [...s] 
console.log(s.keys())
console.log(s.values())
