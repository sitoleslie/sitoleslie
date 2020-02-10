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

// 5. Object
// A complex data type that is a collection of key/key value pairs.

// Objects are created with {} and separated with commas 
var university = {
    name: 'UNO',
    typeofSchool: 'college',
    city: 'New Orleans'
};  

// The object above has 3 properties: name, typeOfSchool, and city. 

console.log(university);
// prints => { name: 'UNO', typeofSchool: 'college', city: 'New Orleans' }


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
// Nothing

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

// 12. Primitive values are passed to a function BY COPY, they are copied by value.


var x = 1;
var y = 2;
var a = x;
var b = y;

console.log(x, y, a, b);

// prints => 1 2 1 2

// The variable x and a = 1. Then, b and y = 2. The values were copies, although they're two different variables. 

// Reference
// The complex data type, Object is copied by reference. 

var object1 = [5];
var object1Copy = object1; 

console.log(object1Copy); 

// prints => [5]

