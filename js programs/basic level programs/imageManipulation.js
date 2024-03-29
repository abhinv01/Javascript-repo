/* Use MAX_Integer Value
 
Flipping an Image
There was a binary image represented by an n x n matrix. This image consisted of rows and columns, where each element of the matrix was either a 0 or a 1. The image, stored in the image variable, depicted a pattern or design, but it needed some transformation to enhance its visual impact using the flipAndInvertImage function.
The flipAndInvertImage function, when given the image as a functional argument, performed a series of operations on it. The first operation was to flip the image horizontally. This meant that each row of the image was reversed using the function, effectively creating a mirror image of the original.
For example, if the function received a row [1, 1, 0], applying the flipAndInvertImage function would result in [0, 1, 1]. This operation was applied functionally to every row of the matrix through the flipAndInvertImage function, transforming the entire image.
After the flipping operation, the next step performed by the flipAndInvertImage function was to invert the image. This involved replacing every 0 in the image with a 1, and every 1 with a 0 using the functional argument approach. This inversion step, executed by the flipAndInvertImage function, aimed to create a striking contrast within the image, enhancing its visual appeal.
Example 1:
Input: image = [[1,1,0],[1,0,1],[0,0,0]]
Output: [[1,0,0],[0,1,0],[1,1,1]]
Explanation: First reverse each row: [[0,1,1],[1,0,1],[0,0,0]].
Then, invert the image: [[1,0,0],[0,1,0],[1,1,1]]
Example 2:
Input: image = [[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]]
Output: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]]
Explanation: First reverse each row: [[0,0,1,1],[1,0,0,1],[1,1,1,0],[0,1,0,1]].
Then invert the image: [[1,1,0,0],[0,1,1,0],[0,0,0,1],[1,0,1,0]] */

function worstflipAndInvertImage(image) {
    // Write your code inside this function only.
    let newArr = []
    for (let i = 0; i < image.length; i++) {
        newArr[i] = image[i].slice().reverse()
    }
    for (let i = 0; i < newArr.length; i++) {
        for (let j = 0; j < newArr[i].length; j++) {
            newArr[i][j] = newArr[i][j] === 1 ? 0 : 1
            
        }
    }
    return newArr

}

// Best Case

function bestflipAndInvertImage(image) {
    // Write your code inside this function only.
    for (let i = 0; i < image.length; i++) {
        image[i] = image[i].reverse()
        for (let j = 0; j < image[i].length; j++) {
            image[i][j] = image[i][j] === 1 ? 0 : 1
            
        }
    }
    return image
}

let image = [[1,1,0],[1,0,1],[0,0,0]]
console.log(image);
console.time()
console.log(worstflipAndInvertImage(image));
console.timeEnd()
console.time()
console.log(bestflipAndInvertImage(image));
console.timeEnd()