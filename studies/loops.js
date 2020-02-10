/* *
*LOOPS
* 0. Loops are very useful if you want to run the same code over, over , and over again.
*It is built in constructs that allow the same code to repeat itself.
* 1. For loops- loops through the code block until the end statemnt is false.
This loop can be used to gain access to arrays and strings.
* 2. For-in loops= loops over objects. 
* 3. While loops- will run a true condition and execute that block of code
*
*/

// 1. For loop
// Three statements: 1. start, 2. stop, 3. increment or decrement and it is seperated with semicolon.

for (var i = 0; i < 5 ; i++ ){
    console.log(i)
}


//prints => 0 1 2 3 4 5 

//2. For-in loops:
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

// 3. While Loops
var count = 0
while(count < 5){
    console.log(count);
    count ++
}

// print => 0 1 2 3 4 5 