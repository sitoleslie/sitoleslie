// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: LOOPS
 */

/** 
 * Given an input Array, loop forward over the Array and print its values 
 * using console.log().
 */
 
 
 // create for loop
 // input: array
 // with indexes
 // output: prints all the values 
function printArrayValues(array) {
  // YOUR CODE BELOW HERE //
  for (var i = 0; i < array.length; i++){
    console.log(array[i]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Array, loop backwards over the Array and print its values 
 * using console.log().
 */
 
 
 // create for loop
 // input: array 
 // output: console.log will print all the values
 // constraints: in reverse so I will need to use decrement 
 // how do you start at the end of array?
 //length-1 
function printArrayValuesInReverse(array) {
  // YOUR CODE BELOW HERE //
  for (var i = array.length-1; i > -1; i--){
    console.log(array[i]);
  }
  
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return an Array containing the Object keys.
 */
 
 // output: return the array with object keys
 
function getObjectKeys(object) {
  // YOUR CODE BELOW HERE //
 var arr = [];
 // arr.push();
 for (var key in object){
   arr.push(key);
 }
  
  return arr
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its keys 
 * using console.log().
 */
 
 // create an for in loop 
 // input: object 
 // output: print all it's keys
 
function printObjectKeys(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){
    console.log(key);
    
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}


/** 
 * Given an input Object, return an Array containing the Object's values.
 */
 
// create an array in your function
// create in for in loop 
// push in your arr inside the loop
// return the object's values 
function getObjectValues(object) {
  // YOUR CODE BELOW HERE //
  var arr1 = [];
  for (var key in object){
    arr1.push(object[key])
    
  }
return arr1;

  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, loop over the Object and print its values 
 * using console.log().
 */
 
 // create an for in loop
 // prints the values 
function printObjectValues(object) {
  // YOUR CODE BELOW HERE //
  for (var key in object){
    console.log(object[key]);
  }
  
  
  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, return the length of its key/value pairs
 */
function getObjectLength(object) {
  // YOUR CODE BELOW HERE //
for (var key in object){
   return Object.entries(object).length; 
}

  
  // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input Object, how might we loop over the Object IN REVERSE and 
 * print its values using console.log()?
 */
 
 
 // CLASS NOTES
 // create a storage array to hold all object values 
 // to gain access to each value in an object use: object.entries or a for-in loop
 
 
 //push each value to our storage array 
 // reverse our array with a for-loop and print each element 
 
 
 
 
// create a var named array
// then make the object into an array with the array containing the given values 
// object.values
// create a for loop
// start: want to reverse so .length-1
//end: at 0 so i > -1
// decrement
// console.log the values 
function printObjectValuesInReverse(object) {
  // YOUR CODE BELOW HERE //
var array = Object.values(object); 
for (var i = array.length-1; i > -1; i--){
    console.log(array[i]);
}
  
  /*
  var arrayofValues = [];
  for (var key in object){
      arrayofValues.push(object[key]);
  }
  // console.log(arrayOfValues);
  
  for (var i = array.OfValues.length-1; i >= 0; i--)
  {console.log(arrayOfValues[i]);
      
  }
  
  
  
  
  */
  
  
  // YOUR CODE ABOVE HERE //
}





// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.printArrayValues = printArrayValues;
    module.exports.printArrayValuesInReverse = printArrayValuesInReverse;
    module.exports.printObjectValues = printObjectValues;
    module.exports.getObjectValues = getObjectValues;
    module.exports.getObjectKeys = getObjectKeys;
    module.exports.printObjectKeys = printObjectKeys;
    module.exports.getObjectLength = getObjectLength;
    module.exports.printObjectValuesInReverse = printObjectValuesInReverse;
}
