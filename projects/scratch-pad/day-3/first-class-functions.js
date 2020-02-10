// #!/usr/bin/env node

'use strict';

/**
 * IN CLASS EXERCISE: FIRST CLASS FUNCTIONS
 */

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is greater than the 
 * base.
 */
 
// create a function inside the given function
// create if else statement:
// input: value is greater than base
//output: return the function 
// you want the value to be true 


function createGreaterThanFilter(base) {
    // YOUR CODE BELOW HERE //
   return function createGreaterThanValue(value){
        if (value > base){
         return true;
        }else {return false}
   };      
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an input base to test against, which could be a String or Number, 
 * return a Function that tests whether a given value is less than the 
 * base.
 */
 
 
 // return a function
 // create the function that will test the value is less than base
 // if statement to test if value is less than base
 // output: true if value is less than base
 //else statement to return false 
function createLessThanFilter(base) {
    // YOUR CODE BELOW HERE //
    return function createLessThanValue(value){
        if (value < base){
            return true;
        }else {
            return false; 
        }
    }
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a startsWith character, which will be a single character, return a 
 * Function that tests whether a given String starts with the startsWith 
 * character.
 */
 
 // 1. return a function
 // 2. create function that will test the given string 
 // create an if statement to test if string startsWithChar 
 // output: true 
 
// create else statement if startsWithChar =! string 
function createStartsWithFilter(startsWith) {
    // YOUR CODE BELOW HERE //
    return function testStartOfString(string){
     if (string[0].toLowerCase() == startsWith.toLowerCase()){
            return true; 
        }
        else {return false}
    }; 
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given a endsWith character, which will be a single character, return a 
 * Function that tests whether a given String ends with the endsWith 
 * character.
 */
 // return a function
 // name the function with the action 
 // create an if statement comparing the two parameters 
 // accessing the last character 
function createEndsWithFilter(endsWith) {
    // YOUR CODE BELOW HERE //
     return function testStartOfString(string){
     if (string[string.length-1].toLowerCase() == endsWith.toLowerCase()){
            return true; 
        }
        else {return false}
    }; 
    
    
    
    
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to modify a String, 
 * return an Array of the Strings, modified.
 * 
 * TIP: You need to loop over the Strings, right? We need to pass each String to 
 * the modify Function, but we need to collect the results into some collection.
 */
 
  
 
function modifyStrings(strings, modify) {
    // YOUR CODE BELOW HERE //
console.log(strings);
console.log(modify);

// strings is going to be an array 

// modify is going to be a function


// output: return an array of modified strings 

// create a storage array to hold our modify arrays 

let resultArr = [];

// implement a for loop to gain access to every string 
for (let i = 0; i <= strings.length-1; i++){
    resultArr.push(modify(strings[i])); 
}

// return the modify array
return resultArr; 
    
    // YOUR CODE ABOVE HERE //
}

/** 
 * Given an Array of Strings and a Function designed to test the String in some 
 * way and return a Boolean on whether it passed, return true if ALL Strings pass the test.
 * 
 * Imagine you had a list of names, and you wanted to test they all 
 * begin with "C", or they are all exclaimations that end with "!".
 * 
 * TIP: You need to loop over the Strings, right? And pass them to the test?
 */
 
 // string is going to be an array 
 // test is going to be a function 
 
 // output: return boolean if it is true that the string passes the test
function allStringsPass(strings, test) {
    // YOUR CODE BELOW HERE //
 // create a an array to hold the strings
 var arr2 = [];
 // need to create a for loop to gain access to the strings
 // create an if statement that will test the index of the strings 
 // set it true
 // push your object array
 
 for (var i = 0; i <= strings.length-1; i++){
     if(test(strings[i]) === true){
     arr2.push(i);
} 
}

// create another if statement to test if your strings are ALL true to your array length
// if it is not all true return false
    if (strings.length > arr2.length){
    return false;
    }else {return true}
    
    // YOUR CODE ABOVE HERE //
}

// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
    (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.createGreaterThanFilter = createGreaterThanFilter;
    module.exports.createLessThanFilter = createLessThanFilter;
    module.exports.createStartsWithFilter = createStartsWithFilter;
    module.exports.createEndsWithFilter = createEndsWithFilter;
    module.exports.modifyStrings = modifyStrings;
    module.exports.allStringsPass = allStringsPass;   
}