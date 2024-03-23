/* Integer to Roman
Medium
+10 APs
unsolved
Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.


Symbol     Value

I                 1
V                5
X               10
L                50
C               100
D               500
M              1000
For example, 2 is written as II in Roman numeral, just two one's added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

I can be placed before V (5) and X (10) to make 4 and 9. X can be placed before L (50) and C (100) to make 40 and 90. C can be placed before D (500) and M (1000) to make 400 and 900. Given an integer, convert it to a roman numeral.

Example 1:
Input:
num = 3

Output:
"III"

Explanation:
3 is represented as 3 ones.

Example 2:
Input:
num = 58

Output:
"LVIII"

Explanation:
L = 50, V = 5, III = 3.
 */


var intToRoman = function(num) {
    // Your code goes here
    if(num < 1) return ""
    let romanNum = new Map()
    romanNum.set(1,"I")
    romanNum.set(4,"IV")
    romanNum.set(5,"V")
    romanNum.set(9,"IX")
    romanNum.set(10,"X")
    romanNum.set(40,"XL")
    romanNum.set(50,"L")
    romanNum.set(90,"XC")
    romanNum.set(100,"C")
    romanNum.set(400,"CD")
    romanNum.set(500,"D")
    romanNum.set(900,"DM")
    romanNum.set(1000,"M")

    let romanStr = ""
    let romArr = new Array(...romanNum.keys());
    for (let i = romArr.length-1; i>=0 ; i--) {
        while(num >= romArr[i]) {
            num -= romArr[i]
            romanStr += romanNum.get(romArr[i]) 

        }
        
    }
    return romanStr
};

console.log(intToRoman(58));


var de = function(num) {
    const map = { M: 1000, CM: 900, D: 500, CD: 400, C: 100, XC: 90, L: 50, XL: 40, X: 10, IX: 9, V: 5, IV: 4, I: 1 };
      let result = '';
      Object.entries(map).forEach(([letter, n]) => {
          result += letter.repeat(Math.floor(num / n));
          num %= n;
      });
      return result;
  };

  console.log(de(45));
  
  let rg = "aa"
  let regex = new RegExp(rg)
  console.log(
      regex 
  );