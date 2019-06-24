// PART 1
// 1. 	interpolation vs concatenation, give ex of each

// Interpolation allows you to create a string using strings and
// variables. 
// ex:
const adj = 'fun'
console.log(`What a ${adj} day`)

// Concatenation allows us to add strings together
// ex:
const name = 'Stacey'
console.log("Hi, my name is " + name + "!")

// 2. 	D.R.Y. meaning and benefits, tools we have to write DRY code

//		Don't Repeat Yourself
//		loops, functions, variables

// 3. 	Difference between declaring a variable
//		and assigning a value to a variable:

//		Declaring a variable is creating a variable using let or const.
//		Assigning a value to a variable is done with the = sign.

//		What is defining a variable?

//		Assigning a value.

// 4. 	when to use const vs let

//		always default to const, never use var. Use let in a loop or if
//		/else conditional.

// 5. 	what is a parent directory?

// 		a directory that includes files or folders		

// 6.	how to get more info about a unix command w/out internet 
//		connection

//		manual page command "man" + " command"

// 7. 	tab completion, what and why

//		once you have typed a word/name in terminal or a text editor window,
//		you can type the first letter or first few letters and hit tab to 
//		autofill the rest of the name. Saves time and minimizes spelling errors
//		in code. 
//PART 2
const a = 4;
const b = 53;
const c = 57;
const d = 16;
const e = 'Kevin';

// 	1. 	a < b
//	2.	c > d
//	3.	'Name' === 'Name'
//	4.	a + b = c
// 	5.	a * a = d
//	6.	e = 'Kevin'
//	7. 48 == '48'

console.log (a < b);
console.log (c > d);
console.log ('Name' === 'Name');
console.log (a + b === c);
console.log (a * a === d);
console.log (e == 'Kevin');
console.log (48 == '48');

//PART 3: While loops!
//	1. Infinite loop?
//	while (true){
//	  console.log('Do not run this loop');
//  }

// 	Infinite

//	2. Infinite loop?
//	const runProgram = true;
//	while (runProgram) {
//		console.log('Do not run this loop');
//		runProgram = false;
//	}

//	NOT an infinite loop. The runProgram is assigned the value
//	of false, which ends the loop.

//	3. Reading code
//	Add a comment before each line of code explaining the line below.
//	Comment the output you expect to see.

//	letters and i are declared and assigned an initial value of 
// 	A and 0, respectively.
let letters = "A";
let i = 0;
//	in each loop iteration, while i is less than 20 
while (i < 20) {
//	letters will increase its string with an "A"
	letters += "A";
//	i will increase by 1
	i++;
}
// console will show "AAAAAAAAAAAAAAAAAAAA"
console.log(letters);
// output was same as guess

//PART 4: Loops!
//	1. 	Both for loops and while loops repeat code. But what are the 
//		differences? What are the similarities?

//	Both repeat code with conditionals. The while loop is usually 
//	used when you need to repeat soemthing until a given condition is 
//	not true. The for loop is usually used when you need to iterate a
//	given number of times.

//	2. Write a for loop that will console.log() the numbers 0 to 999.

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 
			17, 18, 19, 20];
for (i = 0; i < array.length; i ++) {
	console.log(array[i]);
}

//	3.	An example for loop that prints a message 100 times:
//  for (let i = 0; i < 100; i++) {
//  	console.log('Without you, today\'s emotions are the scurf of yesterday\'s');
//  }
//	The first part of the control statement is:
	
//	initialization

//	The second part of the control statement is:

//	condition

//	The third part of the control statement is:

//	final expression

//	4. Using a postfix operator i-- instead of i++, write a for 
//	loop that iterates in reverse: console.log() a countdown from 
//	999 to 0.

	for (let i = 999; i >= 0; i--){
		console.log(i);
 	}

//	5.	Write a for loop that uses interpolation to print a message
//	to the console that includes the current value of i.
//	The loop should run from 1 to 10.

for (let i = 1; i < 11; i++){
	console.log(`The value of i is: ${i} of 10`);
}





