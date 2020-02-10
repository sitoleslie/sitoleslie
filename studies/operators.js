/*
*OPERATORS:
* 0. It is a symbol used as in act of an operation.
*
*/


 
// Assignment operators
// This operator assigns a value to a variable
// = , += , -= , *= , /= , %=


var laptop = 'Apple'
console.log(laptop)
// prints => Apple

// The variable laptop is assigned to Apple 

// Arithmetic operators 
// This is a mathematical operator. 
// + , - , * , / , % , ++ , --

var sum = 5 * 5;
console.log(sum)

// prints => 25

/* Comparison operators
// This is a logical operator that will result in difference or equality for values and variables. 
== equal to (loosely equal)
=== strictly equal
!=	not equal	
!==	not equal value 
>	greater than	
<	less than	
>=	greater than or equal to	
<=	less than or equal to	
*/
console.log('2' === 2);

// Prints => false


/* Logical operators
 This operator will result in a boolean values. It will determine the logic behind the condition. 
&& and 
|| or 
!

*/

// Unary operators (!, typeOf, -)

// typeof will return the variable's data type

var string = 'This is a string'
typeof string; 

// print => string 

// Logical Not ! 
// It will change a boolean value and return it to it's opposite value 

!true 

// prints => false 

// Unary negative
// It will return a non-number data type to a negative.

-true

// prints => -1 


// Ternary operator (a ? b : c)
// condtion ? value if true : value if false 
// It is just like an if, else statement but a shorter way. 

var a = 5, b = 4, c; 
c = (a < b) ? a : b;

// prints => 4

