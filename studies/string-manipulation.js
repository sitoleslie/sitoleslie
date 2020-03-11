/* *
* STRING MANIPULATION: 
*0. Strings can be manupulated with operators and string method.
*1. Concatenation is used to join two or more strings and return a new string of the combination.
*2. The array Join() method will join the elements together and result in a string.
*/

// 1. The concat operator 
var string1 = 'yahoo'; 
var string2 = 'search engine'

console.log(string1 + ' ' + 'is such a great' + ' ' + string2)

// prints => yahoo is such a great search engine

// 2. Join ()
var houseItems = ["Toys", "Shoes", "Blankets"];
console.log(houseItems.join('.'));

// prints => Toys.Shoes.Blankets


// 3. Reassigning using operators:
// += -= *= /= %/


var insect = 'butter';
insect += 'fly';
console.log(insect); // => butterfly 
// the variable insect is being reassigned and concated at the same time 

// 4. Trim method: this method will remove any unnecessary whitespaces before or after a string
var str = "       Welcome!        ";
console.log(str.trim());

// prints => 'Welcome'

// 5. upperCase() or lowerCase()
// this can change a character in a string from lowercase to uppercase or vice versa

 // example of casing to uppercase

 let toLowerCase = 'hello';

 toLowerCase = toLowerCase.toUpperCase();

 console.log(toLowerCase); // => 'HELLO' 
 // all the chars in this string will not change to caps
 
 // example to casing to lowercase: 

 var toUpperCase = "LOWERCASE";

 toUpperCase = toUpperCase.toLowerCase();

 console.log(toUpperCase); // => 'lowercase'
 //  // all the chars in this string will not change to lower case 


// 6. replace method 
// you can change a specific value, and return a new string at the replacement of that specific value 

var replaceStr = 'I am working-out!';

replaceStr = replaceStr.replace('working-out','eating');

console.log(replaceStr);
 // print => I am working-out, eating got replaced
