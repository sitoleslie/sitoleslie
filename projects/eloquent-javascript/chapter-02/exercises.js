
////////////////////////////////////////////////////////////////////////////////
// triangles ///////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// create an empty string that will hold the new data 
// create a for loop that will loop through the number parameter 
// reassign the empty string to the value you want in the output
// add it to the variable input 
// console log the input


function triangles(number) {
  var input = '';
  for (var i = 0; i < number; i++){
    input = '#' + input; // when it console log it will show # instead of empty string
    console.log(input); 
  }
}


////////////////////////////////////////////////////////////////////////////////
// fizzBuzz ////////////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
// print to console 1 - 15 
// create an if, else if statement 
//  if it is divisible by 3 print 'fizz'
//  if it is div by 5 and not 3 then print 'buzz'
// if it is div by 3 & div 5 print 'fizzbuzz' 
// print the rest 

// create a for loop to loop through the numbers 1 - 15 
// start at 1 
// end at 16



function fizzBuzz() {
  for (var i = 1; i < 16; i++) {
      if ( i % 3 === 0 && i % 5 === 0) {
        console.log("fizzbuzz");
      } else if (i % 5 === 0){
        console.log('buzz');  
      }else if (i % 3 === 0) {
        console.log('fizz');
      } else {
        console.log(i);
      }
}
}
////////////////////////////////////////////////////////////////////////////////
// drawChessboard //////////////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

//declare empty board

//use  loop to control rows

//use innerloop to loop through the columns 
function drawChessboard(number) {
  
  var board = "";
//for loop through the rows
for (var row = 0; row < number; row++) {
//nested for loop through the columns
 for (var col = 0; col < number; col++) {
   //if row is even and col is odd add #
  if(row % 2 === 0 && col % 2 !== 0){
    board += "#";
   //else if row is odd and col is odd add " "
  } else if(row % 2 !== 0 && col % 2 !== 0){
    board += " ";
   //else if row is even and col is even add " "
  } else if(row % 2 === 0 && col % 2 === 0){
    board += " ";
   //else if row is odd and col is even add #
  }else {board += "#"}
}
board += "\n";
}
console.log(board);
}

////////////////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {
  module.exports = {
    triangles,
    fizzBuzz,
    drawChessboard,
  };
  }
  
