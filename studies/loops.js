/* *
*LOOPS
* 0. Loops are very useful if you want to run the same code over, over , and over again.
*It is built in constructs that allow the same code to repeat itself.
* 1. For loops- loops through the code block until the end statemnt is false.
This loop can be used to gain access to arrays and strings.
* 2. For-in loops= loops over object's values
* 3. While loops- will run a true condition and execute that block of code
*
*/

// 1. For loop
// Three statements: 1. start, 2. stop, 3. increment or decrement and it is seperated with semicolon.
let myArray = [1,2,3,4]

for (var i = 0; i < 5 ; i++ ){
    console.log(myArray[i])
}


//prints => 1 2 3 4 
// This loop will start at 0, stop when the index reaches 4 because it will be less than 5, and the increment will add to the index. 


// using for loop to loop over an array backwards: 


let myArr = [3,2,1]
for(let i = myArr.length -1; i > -1; i-- ){
   console.log(myArr[i])
}

// prints => 1 2 3
// it will loop this array backwards starting at the last index to the first 




//2. For-in loops:
/* syntax: 

for (variableName in object)
statement


variable: at every iteration the value of the different properties is assigned and loops until are the Object properties have been accessed 

*/ 
var dog = {
    name:"Dulce", 
    age: 7, 
    breed: 'Pit',
    color: 'brown' 
};

for (var key in dog){
    console.log(key);
    console.log(dog[key]);
    
}

/* Prints =>
name
Dulce
age
7
breed
Pit
color
brown
*/

// This will loop over the key and the key values 
// and print out in order of the key/values being accessed 

// 3. While Loops
// while is a keyword that will let JS know it is looping through a block of code until the condition is false
// the condition will be expressed inside ()

var count = 0;
while(count < 5){
    console.log(count);
    count ++; 
}

// print => 0 1 2 3 4 5 
// The code in the loop will keep looping until the variable reaches theat certain number 



// reverse using the while loop:
var backwardNumbers = 3;

while(backwardNumbers > 0){
    console.log(backwardNumbers);
    backwardNumbers --; 
}

// prints => 3 2 1

// it will print out 3 backwards because it is looping through the block of code until the condition statement reaches a false
