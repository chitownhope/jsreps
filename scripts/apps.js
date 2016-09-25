// Write a function lengths that accepts a single parameter as an argument, namely an array of strings. 
// The function should return an array of numbers. Each number in the array should be the length of the 
// corresponding string. To get you started, you'll need to loop through each string in the array and get the 
// length of each one. Those lengths should be stored in a different array that you will return.
// Remember that when building a function, you want to use declare a function with a name that accepts 
// arguments. So for building our function called lengths that accepts an array of strings, it might look 
// something like:
// lengths(words)  # => [5, 4, 2, 2, 4]

console.log('hello!!')
var list = ['hello', 'what', 'is', 'up', 'dude'];

function sizeOfWords(list){
	var newArray = [];
	for(var i = 0; i < list.length;i++){
		newArray.push(list[i].length);

	}
	return newArray;
};

sizeOfWords(list)


/*1.Write a Javascript function called transmogrifier 

2.This function should accept three arguments, which you can assume will be numbers. 	

3.Your function should return the "transmogrified" result

4.The transmogrified result of three numbers is the product (numbers multiplied together) of the first two numbers, raised to the power (exponentially) of the third number.
For example, the transmogrified result of 5, 3, and 2 is (5 times 3) to the power of 2 is 225.
=====> (5*3)  Math.pow(5*3, 2);
5.Use your function to find the following answers.:
**transmogrifier(5, 4, 3)
**transmogrifier(13, 12, 5)
**transmogrifier(42, 13, 7)*/

var firstNumber;
var secondNumber;
var thirdNumber;

function transmogrifier(firstNumber,secondNumber,thirdNumber){
	
	return Math.pow(firstNumber*secondNumber,thirdNumber);
};
transmogrifier(4,9,6)


/*1.Write a function called toonify
2. that takes two parameters, accent and sentence.
3. If accent is the string "daffy", return a modified version of sentence with all "s" replaced with "th".

4.If the accent is "elmer", replace all "r" with "w".

5.Feel free to add your own accents as well!
If the accent is not recognized, just return the sentence as-is.
====> should look like this:toonify("daffy", "so you smell like sausage")
#=> "tho you thmell like thauthage"
*/
var accent;
var sentence = "what are you looking at, rascally rabbits!";

function toonify(accent){
	var newAccent;
	if (accent == "elmer"){
	return newAccent=sentence.replace(/r/g,"w");
}else if
	 (accent == "daffy"){
	return newAccent=sentence.replace(/s/g,"th");

};
};
toonify()


/*1.Write a function wordReverse 
2.that accepts a single argument, a string. 
3.The method should return a string with the order of the words reversed. Don't worry about punctuation. 
4.You'll need to use String.split() to create an array of words (splitting them with a space or " ". 
5.Then you'll need to reverse the order of that array using array.reverse(). 
6.Finally, you'll loop through them to create a new string).
References:
MDN: String.split()
MDN: Array.reverse()
wordReverse("Now I know what a TV dinner feels like")
# => "like feels dinner TV a what know I Now"
*/

var enterASentence='can i do this';

function wordReverse(enterASentence) {
	var splitSentence = enterASentence.split(space);
	return splitSentence;
var space='';
};

wordReverse()

//example below:
var str = 'asdfghjkl';
var strReverse = str.split('').reverse().join(''); // 'lkjhgfdsa'

//cant finish this one right now--saturday night:10:23

/*Write a function letterReverse that accepts a single argument, a string. The function should maintain the order of words in the string but reverse the letters in each word. Don't worry about punctuation. This will be very similar to round 4 except you won't need to split them with a space.
References:
MDN: String.split()
MDN: Array.reverse()
letterReverse("Now I know what a TV dinner feels like")
# => "woN I wonk tahw a VT rennid sleef ekil"
letterReverse("Put Hans back on the line")
# => "tuP snaH kcab no eht enil"*/

sentenceInput="Still not sure about these functions.";

function letterReverse(sentenceInput){
	var theSentence= sentenceInput.reverse();
	return theSentence;

};








