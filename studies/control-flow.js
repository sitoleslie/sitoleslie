/* *
* CONTROL FLOW
* 0. If is a condtional statement that will perferm an action based on if the boolean value is true. If it is true, it will execute the condition. 
* 1. Else if is a condtional statement that will perform as action based on if the if boolean is false. If it is false, it will execute, the else if's code block. 
* 2. Else will run when all the conditonal statements are false. Then, it will execute the else's code block.
* 3. Switch statement will check for specific condtion when the list is very long.
*/

// 1. If 
 if (2 === 2){
    // run this code
    console.log('This statement is true!')
}; 

// prints => This statement is true!

// 2. Else if 
var weather = 'sunny'
if (weather === 'cloudy'){
    console.log('Let\'s stay inside');
} else if (weather === 'sunny'){
    console.log('Beach day!')
}

// prints => Beach day!

// 3. Else 
var weather = 'sunny'
if (weather === 'cloudy'){
    console.log('Let\'s stay inside');
} else if (weather === 'rainy' || weather === 'cold'){
    console.log('Time for a nap!')
}else {console.log('Tanning time!')}

// prints => Tanning time!

// 4. Switch Statements
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