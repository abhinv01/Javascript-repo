//print largest prime among diagonal element of 2d array


var diagonalPrime = function(nums) {
    function checkPrime(num){
        if(num<=1) return false
        for (let i = 2; i < num ; i++) {
            if(num%i===0) {
                return false
            }
        }
        return true
    }

    let largestPrime =  Number.MIN_VALUE, isPrime;
    
    // Your code goes here
    for (let i = 0,j=0; i < nums.length; i++,j++) {
            isPrime =  checkPrime(nums[i][j])
            if(isPrime){
                if(nums[i][j] > largestPrime){
                    largestPrime = nums[i][j]
                }
            }                    
        
    }
    for (let i = 0,j = nums.length-1; i < nums.length; i++,j--) {
        isPrime =  checkPrime(nums[i][j])
        
        if(isPrime){
            if(nums[i][j] > largestPrime){
                largestPrime = nums[i][j]
            }
        }   

    }
    return largestPrime
        
}

let arr =  [[1,2,3],[5,17,7],[9,11,10]]
