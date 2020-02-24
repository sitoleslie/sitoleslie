////////////////////////////////////////////////////////////////////////////////
// min /////////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// if it takes two argument then you must have two parameters 
// create two parameters 
// returns its min


function min(num1, num2) {
return Math.min(num1,num2);


}


////////////////////////////////////////////////////////////////////////////////
// isEven //////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// this function will hold one parameter that is an even number
//it will return a boolean value 
// create an if/else if/else chain that will test 3 cases
// the else, will make the recursive call 


// the if statement will test if that number is even 
// if so, it will return true
// the else if will test if that number is odd
// it will return false

// the recursion call will be the else if, and else 

function isEven(n) {
if (n == 0){
  return true;
} else if (n == 1){
  return false;
} else if (n < 0){
return isEven(-n)
}else {
  return isEven(n-2) 
}

}

////////////////////////////////////////////////////////////////////////////////
// countChars //////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

// this function will take in two arguments which means 2 parameter


// create a for loop that will acces every character in the string 
// create a counter to keep track of the characters 
// create an if statement to compare if the string at that position is equal to that char
// make sure to return your counter outside the function 
function countChars(string, ch) {

let counter = 0; 
for (var i = 0; i < string.length; i++){
  if (string[i] === ch){
  counter ++; 
  
   }
}
return counter; 




}


////////////////////////////////////////////////////////////////////////////////
// countBs /////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// one parameter is needed because there will be only one argument 
// return how many uppercase B characters there are in the string

// create a for loop that will acces every character in the string 
// create a counter to keep track of the characters 
// create an if statement to compare if the string at that position is equal to capital B
// make sure to return your counter outside the function 
function countBs(string) {
let counter = 0; 
for (var i = 0; i < string.length; i++){
  if (string[i] === 'B'){
  counter ++; 
  
   }
}
return counter; 

}




////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    min,
    isEven,
    countBs,
    countChars,
  };
};
