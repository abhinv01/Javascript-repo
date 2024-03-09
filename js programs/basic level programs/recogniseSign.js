/* Write a JavaScript function signOfProduct that takes an array of integers as input and returns the sign of the product of all the integers in the array.
The function should return one of the following values:
1 if the product is positive.
-1 if the product is negative.
0 if the product is zero.
Implement the function efficiently, without actually computing the product by using math principles */


function signOfProduct(nums) {
    // Write your code inside this function only.
    let neg = 0;
    let isZero = false
    for (const iterator of nums) {
        if (iterator < 0) neg++
        else if(iterator === 0) {
            isZero = true
            break;
        }
    }
    if(isZero) return 0
    else if(neg%2 !== 0) return -1
    else return 1

}

console.log(signOfProduct([2, -3, 0,-5, 4]));