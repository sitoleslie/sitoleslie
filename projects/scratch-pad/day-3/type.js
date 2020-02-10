// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: TYPE
 */

/** 
 * Given an input value, return true if the value is an Array, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Array? Can typeof
 * work?
 */
 
 // create an if statement 
 //input: check if the value is an Array
 //output: true
 // else statement for false 
function isArray(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value)){
        return true;
    }else {return false}
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if the value is an Object intended as a 
 * collection, false if otherwise.
 * 
 * TIP: In JavaScript, how can we decipher if a value is an Object, but not 
 * null, not an Array, not a Date - all of these will return 'object' if used 
 * with typeof.
 */
 
 
 // create if statement 
 // input if the value is an object 
 // input: does not equal null
 // input: does not equal array 
 // input not a date 
 // output: return true if it is a object
 // out: false if not
function isObject(value) {
    // YOUR CODE BELOW HERE //
  if  (typeof value === 'object' && value != null && Array.isArray(value) != true && value != Date() ){
      return true;
  }else {return false}
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input value, return true if is either an Array or an an Object 
 * intended as a collection, false if otherwise.
 * 
 * TIP: Similar to isObject, but we must return true if the value is an Array.
 */
 
 // create if, else statement
 // input: if the value is an array or an object 
 // output: return false if it is not an array or an object
 
function isCollection(value) {
    // YOUR CODE BELOW HERE //
    if (Array.isArray(value) || typeof value === 'object' && value != null && value != Date()){
    return true;
    } else {return false}
    
    
    // YOUR CODE ABOVE HERE //
}

/**
 * Given an input value, return the type of the value as a String
 * 
 * Types are one of: 
 *    - "string"
 *    - "array"
 *    - "object"
 *    - "undefined"
 *    - "number"
 *    - "boolean"
 *    - "null"
 *    - "function"
 *    - "date"
 * 
 * Examples:
 *    typeOf(134) -> "number"
 *    typeOf("javascript") -> "string"
 *    typeOf([1,2,3]) -> "array"
 */ 
 // want to return the value parameter as a typeof value string
 // create if, else if, else statement
 // if the value is the date, return it as date in strings 
 
 // input: check if the value is an array 
 // output: return array as a string
 
 // else if statement:
 // input: if the value is strictly null
 //output: return null as a string
 
 // if it is something else just return the typeof value
function typeOf(value) {
    // YOUR CODE BELOW HERE //
    if (value instanceof Date){
        return 'date'; 
    } else if (Array.isArray(value)){
        return 'array';
    }else if (value === null){
        return 'null';
    }else {
        return typeof value;
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.isArray = isArray;
    module.exports.isObject = isObject;
    module.exports.isCollection = isCollection;
    module.exports.typeOf = typeOf;
}
