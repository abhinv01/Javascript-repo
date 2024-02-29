// 1.check if given number is prime number
// 2.print all prime number uptill that number

let num = -10;
flag = 0;
for (let i = 2; i < num ; i++) {
    if(num%i===0) {
        // console.log(i%num)
        flag++; 
        break; 
    }
}
console.log(flag);
(flag===0 && num>2) ? console.log(`${num} is prime`) : console.log(`${num} is not a prime number`);
;

console.log("printing prime numbers")
//printing prime number
let primeArr = []
let notPrime = false;
for (let i = 2; i <= num; i++) {
    notPrime = false;
    // checking if i is prime by dividing it by all number uptill i.
    for (let j = 2; j < i; j++) {
        if(i%j === 0){
            notPrime = true;
            break;
        }    
    }
    notPrime ? null : primeArr.push(i)

}

console.log(`array of prime number uptill ${num} ${primeArr}`)