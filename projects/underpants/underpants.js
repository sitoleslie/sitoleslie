// This makes the arguments variable behave the way we want it to and a few
// other things. For more info:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Strict_mode
'use strict';

var _ = {};


/**
* START OF OUR LIBRARY!
* Implement each function below it's instructions
*/

/** _.identity
* Arguments:
*   1) Any value
* Objectives:
*   1) Returns <value> unchanged
* Examples:
*   _.identity(5) === 5
*   _.identity({a: "b"}) === {a: "b"}
*/

_.identity = function(value){
    return value; 
};


/** _.typeOf
* Arguments:
*   1) Any value
* Objectives:
*   1) Return the type of <value> as a string
*       Types are one of:
*          - "string"
*          - "array"
*          - "object"
*          - "undefined"
*          - "number"
*          - "boolean"
*          - "null"
*          - "function"
* Examples:
* _.typeOf(134) -> "number"
* _.typeOf("javascript") -> "string"
* _.typeOf([1,2,3]) -> "array"
*/


// create a control flow:
// if the value parameter is a date then return the date in string
// use the Array.isArray to check if the value is an array and return it in a string array
// if the value is null return it in a string
// otherwise, return the typeof value;

_.typeOf = function(value){
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
    
    
    
}






/** _.first
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the first element in <array>.
*   3) Otherwise, return the first <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.first("ponies", 1) -> []
*   _.first(["a", "b", "c"], "ponies") -> "a"
*   _.first(["a", "b", "c"], 1) -> "a"
*   _.first(["a", "b", "c"], 2) -> ["a", "b"]
*/

// create a function expression 
// this function will take in two parameters : array, number
//create control flow:
// first check if the array is not an array return []
// second check if a number is not given it will be undefined
// or if the type of number does not equal the number in string
// return the array by accessing the first element 

// if the number is negative set it less than 0 
// return the first number and the amount of items
// use the slice method to start at 0 and end at number parameter 


_.first = function(array,number){
    if (!Array.isArray(array) || number < 0){
        return []; 
    } else if (number === undefined || typeof(number) != 'number'){
        return array[0];
    }
        return array.slice(0, number); 
}





/** _.last
* Arguments:
*   1) An array
*   2) A number
* Objectives:
*   1) If <array> is not an array, return []
*   2) If <number> is not given or not a number, return just the last element in <array>.
*   3) Otherwise, return the last <number> items of <array>
* Edge Cases:
*   1) What if <number> is negative?
*   2) What if <number> is greater than <array>.length?
* Examples:
*   _.last("ponies", 2) -> []
*   _.last(["a", "b", "c"], "ponies") -> "c"
*   _.last(["a", "b", "c"], 1) -> "c"
*   _.last(["a", "b", "c"], 2) -> ["b", "c"]
*/

// create a function expression 
// this function will take in two parameters : array, number
//create control flow:
// first check if the array is not an array return []
// second check if a number is not given it will be undefined
// or if the type of number does not equal the number in string
// return the array by accessing the last element 

// if the number is negative set it less than 0 
// return the last number and the amount of items
// use the slice method to start at neg number and end at array's last element

_.last = function(array,number){
if (!Array.isArray(array) || number < 0) {
    return [];
}else if (number === undefined || typeof(number) != 'number'){
        return array[array.length-1];
}    return array.slice(-number, array.length); 

}





/** _.indexOf
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return the index of <array> that is the first occurrance of <value>
*   2) Return -1 if <value> is not in <array>
*   3) Do not use [].indexOf()!
* Edge Cases:
*   1) What if <array> has multiple occurances of val?
*   2) What if <val> isn't in <array>?
* Examples:
*   _.indexOf(["a","b","c"], "c") -> 2
*   _.indexOf(["a","b","c"], "d") -> -1
*/


// create a function expression
// this function will take on two arguements 
// create a for loop to check if each array index is equal to the value 
//then create an if statement to compare if the index of that array is strictly equal to the value 
// return -1 if it does not
_.indexOf = function (array, value) {
  if(Array.isArray){
       //returning the first occurance of the value
       return array.indexOf(value);
   }
};

/** _.contains
* Arguments:
*   1) An array
*   2) A value
* Objectives:
*   1) Return true if <array> contains <value>
*   2) Return false otherwise
*   3) You must use the ternary operator in your implementation.
* Edge Cases:
*   1) did you use === ?
*   2) what if no <value> is given?
* Examples:
*   _.contains([1,"two", 3.14], "two") -> true
*/


// create a function express
// create two arguments 

// loop through array to check if that value is in that array 

// constraints: use ternary operator 

    _.contains =  function (array, value) {
   // a value to hold our true or false value
   var trueOrFalse = 0;
    // loop through the array and check each index
    for (let i = 0; i < array.length; i++) {
        // if the given value matches the value at the index, change trueOrFalse to 1
        if (array[i] === value) { trueOrFalse = 1; }
    }
    // use a Turnay. If trueOrFalse is above zero it will read true and return true
    // If trueOrFalse is zero it will read false and return false
    return trueOrFalse ? true : false;
};




/** _.each
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) if <collection> is an array, call <function> once for each element
*      with the arguments:
*         the element, it's index, <collection>
*   2) if <collection> is an object, call <function> once for each property
*      with the arguments:
*         the property's value, it's key, <collection>
* Examples:
*   _.each(["a","b","c"], function(e,i,a){ console.log(e)});
*      -> should log "a" "b" "c" to the console
*/


// create a function expression
// it will take on two parameters: collection, fun2
// create a for loop to loop over the collection if it is an array
// you want to call the fun2 with three parameters: it's elements, index, and collection
// used return to close off the statement
// create an if statment to check if the collection is an object 
// create a for in loop to access your object 
// now call the fun2 with three arguments: it's values, keys, collection

_.each = function(collection,fun2){
    
    if (Array.isArray(collection)){
        for (var i = 0; i < collection.length; i++){
          fun2(collection[i], i, collection);
        } return;
    } if (typeof(collection) === 'object') {
        for (var key in collection){
            fun2(collection[key], key, collection);
        }
    }
    
    
    
    
};



/** _.unique
* Arguments:
*   1) An array
* Objectives:
*   1) Return a new array of all elements from <array> with duplicates removed
*   2) Use _.indexOf() from above
* Examples:
*   _.unique([1,2,2,4,5,6,5,2]) -> [1,2,4,5,6]
*/


// create a function expression
// it will take on an array as a parameter
// create a for loop that will acess the array
// create an if statement that will check if the _.indexOf the array is true, and _.indexOf of the new arr is not run again
// then push the array into arr
// now return the arr 


_.unique = function(array){
    var arr = [];
    for (var i = 0; i < array.length; i++){
      if (_.indexOf(array, array[i]) >= 0 && _.indexOf(arr,array[i]) === -1){
        arr.push(array[_.indexOf(array, array[i])]);
      }
    }
    return arr;

};
/** _.filter
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned true
* Edge Cases:
*   1) What if <function> returns something other than true or false?
* Examples:
*   _.filter([1,2,3,4,5], function(x){return x%2 === 0}) -> [2,4]
* Extra Credit:
*   use _.each in your implementation
*/
// create a function expression
// this function will take on two parameters : array and fun
// make a new array to hold in the new data
// create a for loop to loop through the array
// call fun and give it three parameters
// if it checks out true then push your array into your newArray
// finally, return your newArray

_.filter = function (array, fun) {
   
  let filterArr = [];

  for (var i = 0; i < array.length; i++) {
    
     if(fun(array[i], i, array)) {
          filterArr.push(array[i]);
      }
  }
     return filterArr;
}



/** _.reject
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) call <function> for each element in <array> passing the arguments:
*      the element, it's index, <array>
*   2) return a new array of elements for which calling <function> returned false
*   3) This is the logical inverse if _.filter(), you must use _.filter() in your implementation
* Examples:
*   _.reject([1,2,3,4,5], function(e){return e%2 === 0}) -> [1,3,5]
*/

_.reject = function (array, fun) {
    // Make an array of all the true returned elements from .filter()
    let trueElements = _.filter(array,fun);
    // Make an array of all the elements that will return false
    let falseElements = [];
    // Loop through the given array
    for (let i = 0; i < array.length; i++) {
        // check if each element that is in array is in trueElements
        if (!_.contains(trueElements, array[i])){
            // if false returns, then push that element into falseElements
            falseElements.push(array[i]);
        }
    }
        return falseElements;
};








/** _.partition
* Arguments:
*   1) An array
*   2) A function
* Objectives:
*   1) Call <function> for each element in <array> passing it the arguments:
*       element, key, <array>
*   2) Return an array that is made up of 2 sub arrays:
*       0) An array that contains all the values for which <function> returned something truthy
*       1) An array that contains all the values for which <function> returned something falsy
* Edge Cases:
*   1) This is going to return an array of arrays.
* Examples:
*   _.partition([1,2,3,4,5], function(element,index,arr){
*     return element % 2 === 0;
*   }); -> [[2,4],[1,3,5]]
}
*/
_.partition = function (array, fun) {
    // A new array to hold our two arrays
    let newArray = [];
    // Add the true array to newArray
    newArray.push(_.filter(array, fun));
    // Add the false array to newArray
    newArray.push(_.reject(array, fun));
    // Done, return the new array
    return newArray;
};





/** _.map
* Arguments:
*   1) A collection
*   2) a function
* Objectives:
*   1) call <function> for each element in <collection> passing the arguments:
*        if <collection> is an array:
*            the element, it's index, <collection>
*        if <collection> is an object:
*            the value, it's key, <collection>
*   2) save the return value of each <function> call in a new array
*   3) return the new array
* Examples:
*   _.map([1,2,3,4], function(e){return e * 2}) -> [2,4,6,8]
*/

// add a new array to hold our new array
// call our _.each function expression because it will complete some of our objectives 
// it has already created a for loop to loop over the collection if it is an array
//  call the function with it's three arguments: E, I, C
// push fun function into the new array with it's element, index, collection
// output: new array 

_.map = function(collection,fun){
    let newArray = [];
    _.each(collection, function(element,index, collection){
        newArray.push(fun(element, index, collection));
    });
    return newArray;
};


/** _.pluck
* Arguments:
*   1) An array of objects
*   2) A property
* Objectives:
*   1) Return an array containing the value of <property> for every element in <array>
*   2) You must use _.map() in your implementation.
* Examples:
*   _.pluck([{a: "one"}, {a: "two"}], "a") -> ["one", "two"]
*/

// create a new array to hold our new values 
// assign the variable to our previous _.map function expression
// because, it already has specific codes that will help us get to our objective 
// now the output must be an array with the function of E, I, C
// the element with the values of property will be returned 
// output: return the ne array 


_.pluck = function (array, property) {
    var newArray = [];
    newArray = _.map(array, function(element, index, collection){
        return element[property];
    });
    return newArray;
};
    





/** _.every
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*      if <collection> is an array:
*          current element, it's index, <collection>
*      if <collection> is an object:
*          current value, current key, <collection>
*   2) If the return value of calling <function> for every element is true, return true
*   3) If even one of them returns false, return false
*   4) If <function> is not provided, return true if every element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.every([2,4,6], function(e){return e % 2 === 0}) -> true
*   _.every([1,2,3], function(e){return e % 2 === 0}) -> false
*/

// check if fun is not a function
// if the condtion is true, it will return our _.contain function expression

// create a new array to hold our new value
// assign our new array to our _.map function expression which will have two arguments of our collection and function
// now it will return our _.contain function expression 


_.every = function (collect, fun) {
   if (typeof(fun) !== 'function'){
      return !_.contains(collect, false);
   }
    var newArray = [];
    newArray = _.map(collect, fun);
    return !_.contains(newArray, false);
};



/** _.some
* Arguments:
*   1) A collection
*   2) A function
* Objectives:
*   1) Call <function> for every element of <collection> with the paramaters:
*       if <collection> is an array:
*        current element, it's index, <collection>
*       if <collection> is an object:
*        current value, current key, <collection>
*   2) If the return value of calling <function> is true for at least one element, return true
*   3) If it is false for all elements, return false
*   4) If <function> is not provided return true if at least one element is truthy, otherwise return false
* Edge Cases:
*   1) what if <function> doesn't return a boolean
*   2) What if <function> is not given?
* Examples:
*   _.some([1,3,5], function(e){return e % 2 === 0}) -> false
*   _.some([1,2,3], function(e){return e % 2 === 0}) -> true
*/

_.some = function(collect, fun){
    if (typeof(fun) !== 'function') {
      return _.contains(collect, true);
   }
    var newArray = [];
    newArray = _.map(collect, fun);
    return _.contains(newArray, true);
};


// check if fun is not a function
// if the condtion is true, it will return our _.contain function expression

// create a new array to hold our new value
// assign our new array to our _.map function expression which will have two arguments of our collection and function
// now it will return our _.contain function expression 






/** _.reduce
* Arguments:
*   1) An array
*   2) A function
*   3) A seed
* Objectives:
*   1) Call <function> for every element in <collection> passing the arguments:
*         previous result, element, index
*   2) Use the return value of <function> as the "previous result"
*      for the next iteration
*   3) On the very first iteration, use <seed> as the "previous result"
*   4) If no <seed> was given, use the first element/value of <collection> as <seed> and continue to the next element
*   5) After the last iteration, return the return value of the final <function> call
* Edge Cases:
*   1) What if <seed> is not given?
* Examples:
*   _.reduce([1,2,3], function(previousSum, currentValue, currentIndex){ return previousSum + currentValue }, 0) -> 6
*/


// declare a variable named previousResult 
// create a control flow of if, else if, and else statement
// first if seed is not given it will use the first element/ value and go onto the next (array[0])
// now a for loop is created to loop through the array 
// create a nested control flow 
// this will start the next iteration 
// and return the prervious reselt 
// an else if statement will check if it does not equal the loast iteration
// the output will return the value of the function call
// else it will return the function call with it's three arugments 
_.reduce = function(array, fun, seed){
 var previousResult;
 if (seed == undefined){
        seed = array[0];
        for (let i = 1; i < array.length; i++) {
     if (i === 1) {
         previousResult = fun(seed, array[i], i);
     } else if ( i !== array.length - 1) {
         previousResult = fun(previousResult, array[i], i);
     } else {
         return fun(previousResult, array[i], i);
     }
     }
         }
 for (let i = 0; i < array.length; i++) {
     if (i === 0) {
         previousResult = fun(seed, array[i], i);
     } else if ( i !== array.length - 1) {
         previousResult = fun(previousResult, array[i], i);
     } else {
         return fun(previousResult, array[i], i);
     }
     }
};



/** _.extend
* Arguments:
*   1) An Object
*   2) An Object
*   ...Possibly more objects
* Objectives:
*   1) Copy properties from <object 2> to <object 1>
*   2) If more objects are passed in, copy their properties to <object 1> as well, in the order they are passed in.
*   3) Return the update <object 1>
* Examples:
*   var data = {a:"one"};
*   _.extend(data, {b:"two"}); -> data now equals {a:"one",b:"two"}
*   _.extend(data, {a:"two"}); -> data now equals {a:"two"}
*/



_.extend = function (...array){
   // loop through the array of Objects
   for (let i = 1; i < array.length; i++){
         // use the assign method to replace the first object the others
         Object.assign(array[0], array[i]);
     }
     // Done, return the first array.
     return array[0];
   };








//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports = _;
}
