////////////////////////////////////////////////////////////////////////////////
// range ///////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// the function will take two parameters named start and end
// add a third parameter named step with an ternary operator 
// create a control flow, if, else if statement
// if the step is greater than 0, implement a for loop to access the range from start to end
// else if: if the start and the end are strictly the same then it will return an empty array
// else: for this create a loop that will count down
// return the array at the end 



function range(start, end, step = start < end ? 1 : -1) {
  let array = [];

  if (step > 0) {
    for (let i = start; i <= end; i += step) array.push(i);
  } else if (start === end){ 
    return array;
  }
  else {
    for (let i = start; i >= end; i += step) array.push(i);
  }
  return array;

}
////////////////////////////////////////////////////////////////////////////////
// sum /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a function with a parameter of array because it will return the sum of the number
// create a let variable that will = 0 
// create a for loop to loop over the value 
// dont forget to return it outside 

function sum(array) {
  let total = 0;
  for (let value of array) {
    total += value;
  }
  return total;
}


////////////////////////////////////////////////////////////////////////////////
// reverseArray ////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a container that will hold the values of the new array 
// implement a for loop to loop over the array backwards 
// after the loop push the new values in the container that was created 

function reverseArray(array) {
  let arr = [];
  for (let i = array.length - 1; i >= 0; i--) {
    arr.push(array[i]);
  }
  return arr;
}

////////////////////////////////////////////////////////////////////////////////
// reverseArrayInPlace /////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create a for loop array from 0 to half of the array
// create a container named old to store the current looped value 
// set [i] to the last element minus the current i 


function reverseArrayInPlace(array) {
  for (let i = 0; i < Math.floor(array.length / 2); i++) {
    let old = array[i];
    array[i] = array[array.length - 1 - i];
    array[array.length - 1 - i] = old;
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// arrayToList /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// create a container named list and assign it as null
// the inital value will be placed at the end of list 
// implemenent a for loop to loop over the array 
// reassign list this will reference the old value 

function arrayToList(array) {
  let list = null;
  for (let i = array.length - 1; i >= 0; i--) {
    list = {value: array[i], rest: list};
  }
  return list;
}

////////////////////////////////////////////////////////////////////////////////
// listToArray /////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

function listToArray(list) {
  let array = [];
  for (let node = list; node; node = node.rest) {
    array.push(node.value);
  }
  return array;
}

////////////////////////////////////////////////////////////////////////////////
// prepend /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// a function named prepend was created 
// it will hold two parameters value and list
//output: will return the value and a new list
// that list will add the element to the front of the list 
function prepend(value, list) {
  return {value, rest: list};
}

////////////////////////////////////////////////////////////////////////////////
// nth /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// this function will take in two parameters: list & n
// create a control flow, if, else if, else statement
// if the number is not in the list it will return undefined 
// else if the number is strictly equal to 0 then return the list value
// create an else statement as the recursive part this means if you go far enoguh it will reach the list's end 
// it would equal null 


function nth(list, n) {
  if (!list) return undefined;
  else if (n == 0) return list.value;
  else return nth(list.rest, n - 1);
}

////////////////////////////////////////////////////////////////////////////////
// deepEqual ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create an if statement that will check strictly between a and b

// 2nd block:
// if a and b are not objects then they canot be equal 
// because a and b did not return true on the first block 

// a and b have to be objects so assign it to key value pairs 

// if they do not have the same number of keys, then they do not equal 


// create a for loop tp access the value of each ket in a 

// this will cancel out the object that are not true

// key a and key b are the same

// create a recursive call on a[key] and b[key] they are equal 

// the equal case will be left where equality is not true 

function deepEqual(a, b) {
  if (a === b) return true;
  
  if (a == null || typeof a != "object" ||
      b == null || typeof b != "object") return false;

  let keysA = Object.keys(a), keysB = Object.keys(b);


  if (keysA.length != keysB.length) return false;

  for (let key of keysA) {
    if (!keysB.includes(key) || !deepEqual(a[key], b[key])) return false;
  }

  return true;
}

let obj = {here: {is: "an"}, object: 2};

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    range,
    sum,
    reverseArray,
    reverseArrayInPlace,
    arrayToList,
    listToArray,
    prepend,
    nth,
    deepEqual,
  };
};
