
/* let promiseOne = new Promise(function(resolve,reject){
    setTimeout(()=> {
        let err = false
        if(!err){
            console.log("Async task")
            resolve({a:1})
        }
        else{
            reject("ERR : Error thrown by promise")
        }
    },1000)
})

promiseOne.then((response)=>{
    console.log("Promise consumed",response)
}).catch(() => console.log("err")) */


//using chaining of then while consuming
/* 
let promiseTwo = new Promise(function(resolve,reject){
 
       
            console.log("Async task")
            let data = fetch("https://official-joke-api.appspot.com/random_joke")
            if (data){ resolve(data)}
            else reject("ERR : Error thrown by promise")
         
})

promiseTwo.then((response)=>{
    return response.json()
}).then((res) => console.log(res))
.catch((e) => console.log(e)) */


//Async Await

/* async function apiCall(){
    let name = "mohammed"
    try {
        let res = await fetch(`https://api.nationalize.io?name=${name}`)
        res = await res.json()
        console.dir(res)
    } catch (error) {
        console.log(error)
    }
   
}
apiCall() */


//using just then and catch for frontend use

/* fetch(`https://api.nationalize.io?name=sami`)
.then((res)=> res.json() )
.then(rs => console.log(rs))
.catch(err => console.log(err))
.finally(() => console.log("Run anyway"))
 



const readFileAsync = () => {
  return new Promise((resolve, reject) => {
    // Asynchronous operation to read a file
    // If successful, call resolve() with the result
    // If there's an error, call reject() with the error message
  });
};

readFileAsync()
  .then((result) => {
    // Handle the successful completion of the async operation
    console.log("File ready: " + result);
  })
  .catch((error) => {
    // Handle errors during the async operation
    console.log("Error reading file: " + error);
  });



    const fetchAsyncData = async () => {
        try {
            const response = await fetch('https://official-joke-api.appspot.com/random_joke');
            const data = await response.json();
            return data;
        } catch (error) {
            console.log('Error fetching data:', );
            return error
        }
    };

const processData = async () => {
  const asyncData = await fetchAsyncData();
  // Process the fetched data
  console.log('Processed data:', asyncData);
};

processData();





const fetchData = async () => {
  try {
    const response = await fetch('https://api.example.com/data');
    const data = await response.json();
    // Process the data
    return data;
  } catch (error) {
    // Handle the error
    console.log('Error fetching data:', error);
    // Optionally, throw the error again to propagate it
    throw error;
  }
};

// Calling the async function
fetchData()
  .then((data) => {
    // Use the fetched data
    console.log('Data:', data);
  })
  .catch((error) => {
    // Handle any errors that occur during promise execution
    console.log('Error in promise chain:', error);
  });
*/



obj1 = {fname:"Abhinav",lname:"Babar",age:22}
Object.defineProperty(obj1,"address",{
    value: 'Pune',
    writable: false,
    enumerable: false,
    configurable: true
  })

  let d = Object.getOwnPropertyDescriptor(obj1,"address")


Object.defineProperty(obj1,"age",{
    get:function(){return "@noNeed"},
    set:function(value){this.age=value}
})

for (const i of Object.entries(obj1)) {
    console.log(i)
  
}

class User{
    constructor(email,password){
        this.email = email;
        this.password = password;
    }

    get password(){
        return `${this.password} maybenot`
    }
    set password(value){
        this._password = value
        console.log(this)
    }
    print(){
        console.log(this);
    }
}   


let Ana = new User("@gmail.com","qwerty")
Ana.print()


function Person(fname) {
    this.fname = fname
}
Person.prototype.greet = function(){
    console.log("Hello " + this.fname)
}
let per = new Person("Anakin");
// per.greet()

function Dog(){}
Dog.prototype = Object.create(Person.prototype);

Dog.prototype.bark = function(){
    console.log("bark")
}
const dog = new Dog()
dog.bark()
dog.greet.call(per)

function pt1() {};

const ob1 = Object.create(pt1.prototype);
console.log("    ",Object.getPrototypeOf(ob1) === pt1);


function myXOR(x, y)
{
  // Your code goes here
  let xbin = x.toString(2)
  let ybin = y.toString(2)
  let arrX = new Array(16)
  let arrY = new Array(16)
  
  for (let i = 0; i < xbin.length; i++) {
    arrX.push(parseInt(xbin[i]))
    arrX.shift()
    
  }
  for (let i = 0; i < ybin.length; i++) {
    arrY.push(parseInt(ybin[i]))
    arrY.shift()
  }
  arrX.fill(0,0,-(xbin.length))
  arrY.fill(0,0,-(ybin.length))

  answerArr = []
  for (let i = 0; i < arrX.length; i++) {
    if(arrX[i]===arrY[i]) answerArr.push(0)
    else answerArr.push(1)
  }

//   console.log(arrX,arrY,answerArr)
  return (parseInt(answerArr.join(""), 2))

}
myXOR(3,5)
let s = "a"
console.log( s.slice(-1)+s.slice(0,-1));
console.log(s.slice(1)+s.slice(0,1));


const regex = /DOG/y;
const str = 'I have a DOG DOG DOG DOG DOG DOG which is bigger than other dog';
let match = /dog/i.exec(str);
console.log(match);

match = regex.exec(str);

console.log(match);



  
let human = {
    name: "John",
    contact: {
        phone: "987-654-3210",
        email: "john123@xyz.com",
        address: {
            city: "Berlin",
            country: "Germany"
        }
    }
};


const myFunc1 = ({
    x,
    y,
    z
    }) => {
    console.log(x, y, z);
    };
    myFunc1(1, 2, 3);

    var arr = [1, 2, 3];
var result = arr.push(4);
console.log(result);

function foo(x) {
    let a = " how"
    return function(y) {
        return function(z){
            return x+y+z + a
        }
    }
  }
  let st = foo("hello")(" there")(" world");
  console.log(st)


function addCurry(a) {
    return function(b){
        return function(c){
            return a+b+c
        }
    }
}
console.log(addCurry(2)(3)(5)) 

let person = {name: "John", age: 30};
Object.defineProperty(person, "salary", {value: 5000, writable: false,enumerable:true});
Object.seal(person)
person.sala = 6000;
console.log(person);

/* 
var x = 1;
function myFunc() {
console.log(x);
}
var y = function() {
var x = 2;
myFunc();
console.log(x)
};
console.log(x)

y();
console.log(x) */

 console.log([1, 2, 3, 4].reduce((x, y) => console.log(x, "curr",y)))
 console.log(typeof +null);