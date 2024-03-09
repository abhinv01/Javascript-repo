/* Imagine you're working on a blog platform. Write a JavaScript function generateSlug that takes a title string and generates a URL-friendly slug by replacing spaces with hyphens and converting the text to lowercase.
Example 1:
Input: "Hello World"
Output: "hello-world.com"
Example 2:
Input: "AlmaBetter Web Dev"
Output: "almabetter-web-dev.com" */

function generateSlug(title) {
    // Write your code inside this function only.
    newStr =  "";
    for (const ele of title) {
        if(ele !== " ") newStr += ele
        else newStr += "-" 
    }
    return newStr;



}

console.log(generateSlug("javascript can be funny and serious"));