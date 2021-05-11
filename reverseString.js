function reverseString (words)

{
	/* split() function with blank space makes
  the words into an array of single characters */
  
    let splitWords = words.split("")
    
/* reverse() function to reverse the individual
letter order of the array */
    
    let reverseWords = splitWords.reverse();

//rejoin the array as one

	let backWords = reverseWords.join("");
    
    //print the array/string
    console.log(backWords);
    return backWords;

}

reverseString("sup - my number is 123456789!");

module.exports = reverseString