function findLongestWord(sentence) {
	// Write your code here
    const words = sentence.split(' ');
    let maxLength = 0;

    for (const element of words) {
        if(element.length > maxLength) maxLength = element.length
    }

    return maxLength;
}

console.log(findLongestWord("if(element.length > maxLength) maxLength = element.length"))