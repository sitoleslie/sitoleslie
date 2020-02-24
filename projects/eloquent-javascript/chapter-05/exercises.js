// /////////////////////////////////////////////////////////////////////////////
// flatten /////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// a function named flatten was declared
// this function will take on a parameter named array 
// output: return the arrays by using reduce method with a new function that takes on two more parameters
// the second function will return the array into a single array using the concat 


function flatten(arrays) {
return arrays.reduce(function(flat,current) {
  return flat.concat(current);
}, [] );
}

// /////////////////////////////////////////////////////////////////////////////
// loop ////////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// a higher order function loop that will have a for loop statement 
// the function will take on four parameters 
// the for loop created will call test(value)
// calling test is the test for recurison 

// in the cycle bloc the for loop will call for body(value)
// the value will be updated after every iteration 

function loop(start, test, update, body) {
  for (let value = start; test(value); value = update(value)) {
    body(value);
  }
}

loop(3, n => n > 0, n => n - 1, console.log);
// /////////////////////////////////////////////////////////////////////////////
// every ///////////////////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// implement a for loop that will access the array elements 
//inside the for loop an if statement will return a boolean value
// this if statement will run to an element that the predicate function will return false 
// it will return true if it does not find that element 

// implement a function that will take on two parameters 
// it will return the array paremeter using the some method it will outout if the elements in the array that matches or not


function every(array, predicate) {
  for (let element of array) {
    if (!predicate(element)) return false;
  }
  return true;
}

function every2(array, predicate) {
  return !array.some(element => !predicate(element));
}
// /////////////////////////////////////////////////////////////////////////////
// dominantDirection ///////////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

// a function is declare it will take on one parameter text
// let was declared and assigned by using the countBy
//the function will first count the char by name
//charScript will assign a name and return string 'none' if the character are not part of the script
// use the filter method to filter out the characters that are not



function dominantDirection(text) {
  let counted = countBy(text, char => {
    let script = characterScript(char.codePointAt(0));
    return script ? script.direction : "none";
  }).filter(({name}) => name != "none");

  if (counted.length == 0) return "ltr";

  return counted.reduce((a, b) => a.count > b.count ? a : b).name;
}

// /////////////////////////////////////////////////////////////////////////////
//  //////////////////////////////////////////////////////
// /////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    flatten,
    loop,
    every,
    dominantDirection,
  };
};
