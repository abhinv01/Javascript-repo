// this  file contains some basic programs to verify syntax and basic logic building



let arr = ["Apple","Mango","Banana"]
// console.log(arr.unshift("lemon"))
arr[0] = "k"
// console.log(arr)
arr = ["jackfruit","guava","Apple","Mango","Banana"]


console.log(arr.slice(-3))                                  //slice

let no = [1,2,3,4,5,5,3,4,9,7]
splic = no.splice(44,0,55,66)                               //splice
console.log(splic,no);

let sp = arr.splice(0,1)                                //splice
console.log(sp,arr)


let sorted = no.sort((a,b) => {if(a<b)return -1;else if(a<b) return 1 });    //arr.sort(callback)

console.log(sorted)


const secondArr = new Array(5)
console.log("  ",secondArr)

console.log((new Array(10)).length)                             //new Array()
console.log(Object.__proto__)                                   //prototype print

obj1 = {a:1,b:2,c:3};
let prot = Object.getPrototypeOf(obj1)                          //getPrototypeOf


console.log(Object.getOwnPropertyNames(prot))                    //getOwnproperty

//let a = parseInt(prompt("enter first number"))                   //prompt works in chrome not in node               


//fahrenheit = (celsius * 1.8) +32;
// celsius = (fahrenheit- 32)/1.8


//random number generator /otp generation
let randomNumber = ""
for (let index = 0; index < 4; index++) {
    let no = (Math.floor(Math.random() * 10)+0);
    console.log(no)
    randomNumber = randomNumber + no;
}
console.log("random number",randomNumber)


//odd-even
let oddEven = 5
if(oddEven%2 === 0) console.log(oddEven+" is even")
else console.log(oddEven+" is odd");

// using ternary
(oddEven%2 === 0) ? console.log(oddEven+" is even") : console.log(oddEven+" is odd")

//factorial using loop
let findFactOf = 4 
let factorial = 1;
// for (let index = findFactOf; index > 0; index--) {
//    factorial = factorial * index
// }
// console.log(`factorial of ${findFactOf} is ${factorial}`)


//factorial using recursion
function fact(n){
    if(n < 1) return factorial
    factorial = factorial * n
    n--
    fact(n)
}
fact(findFactOf)
console.log(`factorial of ${findFactOf} is ${factorial}`)

//sum of natural numbers using recursion
function sum(num){
    if(num < 1){
        return num
    }
    return num+sum(num-1)
}
console.log(sum(10))


//practice switch case
let x = 14;
let y = 2; 
let operation = "*"
switch (operation) {
    case "+":
        console.log(x+y)
        break;
    case "-":
        console.log(x-y)
        break;
    case "/":
        console.log(x/y)
        break;
    case "*":
        console.log(x*y)
        break;

    default:
        console.log("wrong operator")
        break;
}

//fibonacci series
finbonaci = [0,1]
for (let i = 0; i < 10; i++) {
    finbonaci.push(finbonaci[i]+finbonaci[i+1])
    
}
console.table(finbonaci)

// alternate method for fibonacci using 2 pointers
pointer1=0
pointer2=1
console.log(pointer1)
console.log(pointer2)
for (let i = 0; i < 10; i++) {
    temp = pointer1+pointer2;
    console.log(temp)
    pointer1 = pointer2;
    pointer2 = temp;
    
} 


//armstrong number
//find the digits of a number
// sepearate each number and sum of each (digit raise to number) taken from previous step
//if this sum equal to original number then it is armstrong
//eg 1634 = 1**4 + 6**4 + 3**4 + 4**4

/* to get digits of a number % it by 10 to get last digit and then divide by 10 and remove point by parseInt parseInt(59/10) ....use while loop until number becomes zero*/


/* to get first element of array in loop use arr[i] -> start pointer and for last arr[arr.length-1-i] -> end pointer */


//using regex 
let str = "to get first element of array in loop use arr[i] -> start pointer and for last arr[arr.length-1-i] -> end pointer "
let regex = new RegExp("arr","gi")
newStr = str.replace("arr","hellNo")      //due to regex replace acts as replaceAll
console.log(newStr)



//string reversal
let str1 = "hey there"
console.log(str1.split("").reverse().join(""))

str2 = ""
for (let i = 0; i < str1.length; i++) {

    str2 = str2.concat(str1[str1.length-1-i])
    //alternate
    //str2 += str1[str.length-1-i]
    
}
console.log("reversed",str2)

//replace first character of string by capital
makeUpperCase = "theUnionOfState";
makeUpperCase.toU
doneUpper = makeUpperCase.replace(makeUpperCase.at(0),makeUpperCase.at(0).toUpperCase())
console.log(doneUpper)


//reversal of integer
let integ = -12
intToStr = integ.toString()
if (integ < 0)
console.log(-1 * parseInt(intToStr.split("").reverse().join("")))
else console.log( parseInt(intToStr.split("").reverse().join("")))



//replace all space with %20 using regex
let rege = new RegExp(/ /gi)
console.log(str.match(rege))


//max and min custom functions(reduce method)
let findMaxMin = [1,5,6,9,4,3,6,9,5]
let max = findMaxMin.reduce((acc,curr) => {if(acc>curr)
    return acc
    else return curr
} )
console.log("MAX ", max)

let min = findMaxMin.reduce((acc,curr) => {if(acc<curr)
    return acc
    else return curr
} )
console.log("MIN ", min)


//find missing numbers in a array within array after finding max and min

let findMissing = [1,5,6,9,4,3,6,9,5]
let minV = Math.min(...findMissing)
let maxV = Math.max(...findMissing)
let missingV = []
for (let i = minV; i < maxV; i++) {
    if (findMissing.indexOf(i) < 0) {
        missingV.push(i)
    }
    
}
console.log("missingValue",missingV);


//check vowels
findVowel = "Eello world you are in milky way"
indexOFVowel = []
findVowel = findVowel.toLowerCase()
for (let i = 0; i < findVowel.length; i++) {
    if(findVowel[i] === "a" || findVowel[i] === "e" ||findVowel[i] === "i"|| findVowel[i] === "o"|| findVowel[i] === "u")
    indexOFVowel.push(`${findVowel[i]} ${i}`)
}
console.log("vowel in string",indexOFVowel)


console.log([1,2,3].concat("str","asd"))



//setTimeOut
// setTimeout(() => {
//     console.log("the  boyz")
// },100)


//ternary with else if
checknumber = -5
let ternaryCheck = checknumber > 0 ? "Positive" : checknumber<0 ? "Negative" : "Zero"
console.log(ternaryCheck)



//iterable vs enumerable

let names = {on:"one",tw:"two"}
names.th = "three"

for (const iterator in names) {
    console.log(iterator)
}



function oddOrEvenSum(arr) {
    // Your code goes here
    let objj = {}
    let odd = 0;
    let even = 0;
    for(let i = 0; i<arr.length;i++){
      if(arr[i]%2 === 0){
          even+=arr[i]
      }
          else{
          odd+=arr[i]
      }
    }
    objj["oddSum"] = odd;
    objj["evenSum"] = even;
    console.log(objj) 
  }
  oddOrEvenSum([1,2,3,4,5])




function distributeGrades(scores) {
    // Your code goes here
    let marksObject = {A:0,B:0,C:0,D:0,F:0}
    for(let i = 0; i<scores.length;i++){
        if(scores[i]>=90) marksObject.A++
        else if(scores[i]>=80 && scores[i] <= 89) marksObject.B++
        else if(scores[i]>=70 && scores[i] <= 79) marksObject.C++
        else if(scores[i]>=60 && scores[i] <= 69) marksObject.D++
        else marksObject.F++
    }
    console.log(marksObject)
}


distributeGrades([76, 81, 60, 55, 88])  //expected op{ A: 0, B: 2, C: 1, D: 1, F: 1 }


function simpleCalculator(num1, num2, operator) {
    // Your code goes here
    switch (operator) {
        case '+':
       return num1 + num2;
        break;
        case '-':
        return num1 - num2;
        break;
        case '*':
        return num1 * num2;
        break;
        case '/':
        return num1 / num2;
        break;
        default:
        console.log('Invalid operator');
    }
}

console.log(simpleCalculator(5, 5,"*"))

console.log(typeof([123,1,2,4]+[321]));


//map//map
const myMap = new Map();

myMap.set('name', 'John');
myMap.set('age', 30);
console.log(myMap);

myMap.delete('age');
console.log(myMap);

myMap.clear();
console.log(myMap);


//merging object
function mergeObjects(obj1, obj2) {
    // Your code goes here
    // obj1 = JSON.parse(obj1)
    // obj2 = JSON.parse(obj2)
    return (Object.assign({},obj1,obj2))
  }

let afterMerg = mergeObjects({ "name": "John", "age": 30 },
{ "isStudent": true, "age": 25 })
console.log(afterMerg);

//finding value based on path given as string

function findNestedValue(obj, propertyPath) {
    // Your code goes here
    prop = propertyPath.split(".")
    
    let val =  prop.reduce((acc, curr) => acc ? acc[curr] : null, obj);
    return val ? val : null
    
  }

console.log(findNestedValue({"person":{"name": "John","age": 30,
        "address": {"city": "New York","country":"USA"}
    }
}, "person.address"))


function findSecondSmallest(numbers) {
    // Your code goes here
  //   numbers.sort((a,b) => a-b)
  //   return numbers[1]
  let min = Math.min(...numbers)
  console.log(min)
  while(numbers.includes(min)){
      let ind = numbers.indexOf(min)
      numbers.splice(ind,1)
  }
  return Math.min(...numbers)
  
  
  }
  console.log(findSecondSmallest([3,6,8,4,1]))



  function getUniqueNumbers(numbers) {
    // Your code goes here
    let obj = {}
    for(let ele of numbers){
      obj[ele] ? obj[ele]++ : obj[ele] = 1
    }
    console.log(obj)
  }
  getUniqueNumbers([1, 2, 3, 2, 4, 4, 5])

/* 
// Function with a callback
function fetchDataFromServer(callback) {
    // Simulating an asynchronous operation
    setTimeout(function() {
      const data = {
        name: "John",
        age: 30
      };
      callback(data); // Execute the callback function with the fetched data
    }, 1000);
  }
  console.log("after setTimeout")
  
  // Callback function to handle the fetched data
  function displayData(data) {
    console.log(`Name: ${data.name}, Age: ${data.age}`);
  }
  
  // Call the function with the callback
  fetchDataFromServer(displayData); */


  //chunk arr
  var chunk = function(arr, size) {
    //Your code goes here
   let newArr = []
   let chunk = []
   for(let ele of arr){
       if(chunk.length === size ){
            newArr.push(chunk)
            chunk = []
            chunk.push(ele)
       }
       else{
          chunk.push(ele)
       }
   }
   newArr.push(chunk)
   return newArr
}
console.log(chunk([1,2,3,4,5],6))



//joining objects
// let obj = {userName : "Abhinav",userEmail : "Abhinav@example",loggedIn : true,count : "5",}

// let obj2 = {A:1,B:2,__proto__:obj}
// console.log(obj2,obj2.userName);

// Object.setPrototypeOf(obj1,obj2)


//this in function
// (
// function(){
//     this.sest = "Sest" 
//     console.log(this)
// })()

//check for reduce
// let arr = [1,2,3,4]
// arr.reduce((acc,curr) => {
//   console.log("acc ",acc,"      curr ",curr);

// })


strVow = "aeiouu"
objVow = {a:1,i:2,e:1,o:1,u:2}
for (const char of strVow) {
    if(!objVow[char]){
        console.log("false")
    }
    objVow[char]--

}