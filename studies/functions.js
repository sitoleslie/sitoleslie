/* 
* FUNCTIONS:
* 0. A reusable block of code that will perform a specific job and execute that block of code. The values are set as undefined until the second phase.
*/ 

// 1. Two phases to using functions:
// First we must start at the creation phase. It will take the variable and function into a memory storage.


// Second, is the execution phase. In this phase, the variables are not undefine anymore and have assigned values The function is executed.

// 2. Parameters: place holders 
//function call- call the function's name and argument has values that is passed in that function ('values','values' ). 
// NOTE: Function can carry no parameters


function sub (num1, num2){
    // function body- code goes here
    return num1 - num2 ;
}
sub(5,4);

// return => 1

//3. syntax for a NAMED function
function name(parameterOne, parameterTwo){
    // function body- code goes here
    return parameterOne + parameterTwo;
}

//4. Assign a function to a variable 
//

var k = function name(parameterOne, parameterTwo){
    // function body- code goes here
    return parameterOne + parameterTwo;
}

k(9,0)
console.log(k);

// return => 9

// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
// Parameters are place holders that can take none to as many inputs.

// We specify outputs by using a return statement or a console,log()
// Arguments will contain the same amount as your parameter in that function.

//6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.

// Global: 

var shoeName = 'Nike';

// code here can use shoeName
function myFunction (){
    return shoeName;
  
} 

myFunction(); 

// print => Nike

// Local :
function anotherFunction (){
    var food = 'Pizza';
    return food + ' ' +shoeName;
}

anotherFunction();

// prints => Pizza Nike

/* NOTE: Parent do not have access to the variables in the local scope. But, the child scope has access to the parent's scope.


*/

// 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 

function closure(){
    var outsideVar = 3;
    
    return function (){
        return outsideVar * 1;
    }
}

closure(); 

// prints => [Function]
