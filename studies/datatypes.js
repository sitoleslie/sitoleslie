/* *
*DATATYPES:
*0. It very important to know about datatypes. There are different types of datatypes stores in variables.
*If there are no datatypes, J.S. cannot solve the problem. J.S. will read from left to right.
*
*/


// 1. Numbers
// Numbers are written with or without deciamls. 
// Also, are not written with strings. 

var p = 5;
var p = 5.6;

// 2. Strings
// Can create a word or sentence using characters. The text must be wrapped in '' or "". 

var firstName = 'Leslie' // single quotes
var lastName = "Guan" // double quotes 

// How do we access individual characters in a string:
// Characters are indexes from left to right. The first index will start at 0 and ending in .length-1 

// charAt() method will access a specific character in a string 
// syntax : string.charAt(index);


var charString = 'characters';

console.log(charString.charAt(1));

// prints => h 
// This will print 'h' because it is the second index. 



// How to access values in a string: 

var string = 'sentence';
console.log(string[0]); 

// prints => s
// using bracketnotation to access characters in a string starting at 0

var string2 = 'Hello';
console.log(string2[string2.length-1]); 


// prints => o 
// This will print the character 'o' by using .length-1 to access the last character 



// 3. Boolean:
// Booleans are true or false statements.

var d = 2;
var e = 2;
var f = 3;

// (x === e) 
// return true

// (f === e)
// returns false

/* NOTE: Boolean values are not strings! 
*/

// 4. Array 
// Array are complex data types that store a list of values known as a collection.

// Array is created with [] and separated with commas.
var arrList = [true, 'string', 8];

/* *NOTE: Arrays hold ALL datatypes.
*Also, it has indexes that start at [0] and ends with arrayName.length-1 
*/

// unshift: adds values at the beginning of the array

arrList.unshift('value');
console.log(arrList);

// prints => ['value', true, 'string', 8];

// push: adds values at the end of the array
arrList.push('hi');
console.log(arrList);

// prints => ['value', true, 'string', 8, 'hi'];

// shift- removes values at the beginning 
arrList.shift();
console.log(arrList);

// prints => [true, 'string', 8, 'hi'];

// pop- remove values at the end 

arrList.pop();
console.log(arrList);

// prints => [true, 'string', 8];



// Accessing values in an array by using bracket notation []: 
let arr = ['Hi']
console.log(arr[0]); // => 'Hi'

// Accessing the last value in an array by using bracket notation []:
let myArray = [1,2,3,4,'hi'];
console.log(myArray[myArray.length - 1]);  // => 'hi'

// 5. Object
// A complex data type that is a collection of key/key value pairs.
// Object values can be any datatypes
// Object keys are string datatypes


// Objects are created with {} and separated with commas 
var university = {
    name: 'UNO',
    typeofSchool: 'college',
    city: 'New Orleans'
};  

// The object above has 3 properties: name, typeOfSchool, and city. 

console.log(university);
// prints => { name: 'UNO', typeofSchool: 'college', city: 'New Orleans' }

// Accessing values in an object with dot notation or bracket notation:
let personObj = {
name: 'Leslie',
age: 25,
city: 'Nola',
pets: true 
}

console.log(personObj.name);
// prints => Leslie 
console.log(personObj['city']);
// prints => Nola 




// 6. Function
// A reusable block of code that will perform a specific job and execute that block of code.

function add (parameterOne, parameterTwo){
    // function body- code goes here
    return parameterOne + parameterTwo;
}

/*
*Function: this will let J.S. know it will be a function code
*FunctionName: relates to the action it is being performed inside the function body 
*Parameters: place holders 
*Function Body: {}
*/



// function call- call the function's name and argument ('values','values' )
add(1,2);

// return => 3

// 7. Undefined 
// A variable that does not have a value assigned.

var testScore; 
console.log(testScore);

// prints => undefined 

// 8. Null 
// It is an assignment value that is an absence of an object or no value
// It is used to get rid of a variable off it's assigned value by assigning it to 'null'

var person = {
    firstName:"Les", lastName:"Guan", age:24
};
person = null;  
// prints => null



// 9. NaN
// NaN means it is NOT-a-Number. 

'string' * 2 

// prints => NaN

// 10. Infinity and -Infinity 

// Infinity - It is a greater than any number. 
// This value behaves and follows the math rules. 

console.log(Infinity + 2)

// prints => Infinity 


console.log(Infinity / 0)

// prints => Infinity 

// - Infinity 
// This value will return a number that is too small. 

console.log(-5 / 0) 

// prints => -Infinity 

// 11. Primitive/ simple data types:
// This data type inclues: 'strings', number , boolean , null , and undefined. 

// Complex data types:
//Arrays and Object are complex data types because it has a it's own method unlike Simple data types.

// 12. Primitive values are copy by value to a new variable. 
// This is an example of simple data type because they are storied in variables. 


var x = 1;
var y = 'guan';

console.log(x, y);

// prints => 1 'guan'

var c = x;
var d = y;

console.log(x, y, c, d);



/**Copy by reference vs Copy by value; 
*0. Copy by reference applies to complex data types: arrays or objects. 
* It is not stored in the variable itself but the variable will copy by reference  
* 1. Copy by value applies to simple data types because it is stored in the variable itself.
* 
* 
* */

// Copy by reference: 
var object1 = [5];
var object1Copy = object1; 

console.log(object1Copy); 

// prints => [5]

// Copy by value:

let num1 = 5;

let num2 = num1; 
console.log(num2); 

// prints => 5 because the value in num1 will get copied to num2