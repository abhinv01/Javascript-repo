
//print armstrong number within range
//find the digits of a number
// sepearate each number and sum of each (digit raise to number) taken from previous step
//if this sum equal to original number then it is armstrong
//eg 1634 = 1**4 + 6**4 + 3**4 + 4**4

/* to get digits of a number % it by 10 to get last digit and then divide by 10 and remove point by parseInt parseInt(59/10) ....use while loop until number becomes zero*/


let start = 1;
let end = 10000;
let armstrongList = []
console.time()
for (let i = start; i <= end; i++) {
    let arr = []
    let num = i
    let numberOfDigits = String(i).length
    while(num !== 0){
        arr.push(num%10)
        num = parseInt(num/10)
    }
    sum = arr.reduce((acc,current) => {
        return acc + current**numberOfDigits
    },0)
    // console.table(arr)
    // console.log(sum)

    if(sum === i) armstrongList.push(i)
}

console.log(armstrongList)
console.timeEnd()