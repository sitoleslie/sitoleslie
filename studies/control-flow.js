/**
* CONTROL FLOW
* 0. Conditional statements will create a flow based on how the code will run if the condition is true. If the condition is false, another block of code will be excuted. 
* 
* 1. If is a conditional statement that will perform an action based on if the boolean value is true. If it is true, it will execute the condition. 
* 2. Else if is a condtional statement that will perform as action based on if the if boolean is false. If it is false, it will execute, the else if's code block. 
* 3. Else will run when all the conditonal statements are false. Then, it will execute the else's code block.
* 4. Switch statement will check for specific condtion when the list is very long.
* 5. If there are multiple conditions that need to be tested it will chain onto that one If statement. 
* An else statement can be chain on to the end as a default action, if all the above tested conditions are false. 
* 
* 
* 
*If: Let's Java script know you're running an if statement code *NOTE: an if statement will start a new conditional statement flow 
*condition: conditions go inside the () this is an expression that will evaulate a boolean value 
*block of code: a block of code will be excuted in curly braces {} if it is true
* Else if: can take on x amount of conditional else if's statements
*Else: can only take on one statement with no condition and only a return statement in curly braces 
*/




// 1. If Syntax: 
// if () {
// block of code to be executed if the condition is true
// }



 if (2 === 2){
    // run this code
    console.log('This statement is true!')
}; 

// prints => This statement is true!
// This conditional statement is true because 2 is strictly equal to 2
// If it was 2 === '2' the code block will not be excuted because it will be comparing datatypes 

// 2. Else if 
var weather = 'sunny'
if (weather === 'cloudy'){
    console.log('Let\'s stay inside');
} else if (weather === 'sunny'){
    console.log('Beach day!')
}

// prints => Beach day!
// a variable is declared and assigned to weather this mean it will check the first conditional statement, since it does not match it will run the next conditional statement and the code will be excuted 


// 3. Else 
var weather = 'sunny'
if (weather === 'cloudy'){
    console.log('Let\'s stay inside');
} else if (weather === 'rainy' || weather === 'cold'){
    console.log('Time for a nap!')
}else {console.log('Tanning time!')}

// prints => Tanning time!
// the variable is assiged to sunny. It will check all the conditional statements to see if it is true. Since, there are not true conditional statement that matches our value it will run the else statement and return
"Tanning time!"

/* 4. Switch Statements:
-Switch statements are just like if statements. However, it will select only one code but that will be excuted.
-switch: this keyword will only be used once
-expression: this is compared to the each cases' values 
-it will search for a match, once it is matched it will run that code 
-syntax: 

switch(expression) {
  case x:
    // code block
    break;
  case y:
    // code block
    break;
  default:
    // code block
}
*/ 
var numbers = 2;
switch (numbers) {
  case -1:
    console.log('negative 1');
    break;
  case 0:
    console.log('zero');
    break;
  case 1:
    console.log('one');
    break; 
  case 2:
    console.log('two');
    break;
  default:
    console.log('default');
}

// prints => two;
// This will print two because a variable is declared and assigned a value of 2
// the switch expression will take on 2 and search for the case that matches it, then it will excute that code