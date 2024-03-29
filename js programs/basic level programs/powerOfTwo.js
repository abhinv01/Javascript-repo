function isPowerOfTwo(n) {
    let arr = []
    for (let i = 0; i < 10; i++) {
        arr.push(Math.pow(2,i))
        
    }
    console.log(arr);
    console.log(Math.pow(2,0));
    console.log(arr.map(e => (e & (e-1))));
    return n > 0 && (n & (n - 1)) === 0;
} 

console.log(isPowerOfTwo(1));