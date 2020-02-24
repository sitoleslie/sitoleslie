/* 
* FUNCTIONS:
* 0. A reusable block of code that will perform a specific job and execute that block of code. 
*/ 

// 1. Two phases to using functions:
// First we must start at the declaration phase. 


// Second, is the execution phase. Then, you must call the function.

// 2. Parameters: place holders 
//function call- call the function's name and argument has values that is passed in that function ('values','values' ). 
// NOTE: Function can carry no parameters, or return statements 


//3. syntax for a NAMED function
function name(parameterOne, parameterTwo){
    // function body- code goes here
    return parameterOne + parameterTwo;
}

// Let's call our function: 
// name(argument1, argument2) 


function sub (num1, num2){
    // function body- code goes here
    return num1 - num2 ;
}
sub(5,4);

// return => 1


/* function declarion syntax break down:
-function: this keyword lets Javascript know what action it is going to perform
-function's name: this is the function's name, it should be named an action you're trying to perform in the block code
-parameters: the name of an argument that is going to be pass in a function. Parameters can have 0 to as many parameters. 
-statement: this is the function's body. A code will go inside here to get excuted 
-don't forget to call your function with your function's name and it's arguments!
*/ 

//4. Function expression: Assigning a function to a variable! 

/* Let's break it down:
-This syntax is very similar to an function declarion. 
-Assigning a function to a variable: In this example this function is unnamed and assigned to k. 
-function: this keyword must be used to let J.S. know to do it's thing!
-function name: It is optional. A function name is not needed because it is local in the function body.
-NOTE: They are not hoisted. The function must be used after it being defined. 
*/ 

var k = function name(parameterOne, parameterTwo){
    // function body- code goes here
    return parameterOne + parameterTwo;
}

k(9,0)
console.log(k);



// return => 9
// This will return 9 because the argument that is being passed in the function is 9 & 0. 
// In the function body the code will excute 9 + 0




// 5. Functions can OPTIONALLY take inputs, and OPTIONALLY return a single value.
// Parameters are place holders that can take none to as many inputs.


//Example of a function without an input/output: 

function noAction(){
  // no input/output is needed
}

noAction(); 


// this will not return anything because there us no output


// We specify outputs by using a return statement or a console,log()
// Arguments will contain the same amount as your parameter in that function.

//6. Scope: Functions can see and modify variables in parent or global scopes. The inverse is NOT true.
/* There are three type of scopes:
1a. Global
2b. Local/function 
3c. block 
*/


// Global: 
// 1a. In this scope, it can be accessed anywhere as long it is not inside a function or block. 
var shoeName = 'Nike';

// code here can use shoeName
function myFunction (){
    return shoeName;
  
} 

myFunction(); 

// print => Nike

// 2b. Local/function scope
// Variables that are declared inside a function are known as local scope. It cannot be accessed from anywhere else except inside that function. 
function anotherFunction (){
    var food = 'Pizza';
    return food + ' ' +shoeName;
}

anotherFunction();

// prints => Pizza Nike

// NOTE: Parent do not have access to the variables in the local scope. But, the child scope has access to the parent's scope.

// 3c. Block scope:
// Let/const variables are blocked scoped to the nearest block of code in curly braces {}. 


function blockScope(){
  if (true){
    const x = 20;
     console.log(x);
  }
}

blockScope(); 

// print => 20
// This will print 20 because it inside the block scope



//Var variable are not scoped and can only be used outside.

// example: 

function blockScoped(){
  if (true){
    const x = 20;
  }
//   console.log(x);
}

blockScoped(); 

// print => refError: x is not defined because it is inside the curly braces {code block}. 




// 7. Closures: Functions form closures around the data they house. If an object returned from the Function and is held in memory somewhere (referenced), that closure stays ALIVE, and data can continue to exist in these closures! 

function closure(){
    var outsideVar = 3;
    
    return function (){
        return outsideVar * 1;
    }
}


closure(); 

// prints => [Function]
//  This specific example shows how the function used a variable from the parent scope. 
// The parent scope has been accessed by the function althrough it has already closed. 