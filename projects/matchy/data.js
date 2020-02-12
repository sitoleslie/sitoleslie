/**
 * Part 1
 *
 * In this file, we're going to practice
 * creating and accessing data structues.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Object Creation //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create a var called animal 
// assign it to object {}

var animal = {};
// adding key of species with value of dog to animal obj w dot notation 
animal.species = 'Dog';

// will use [] to add name key and value
animal['name'] = 'Dulce';

// using dot notation add noises key and assign it to array literal
animal.noises = [];

// add animal object to console
console.log(animal);




//////////////////////////////////////////////////////////////////////
// Step 2 - Array Creation ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create a var named noises and assign it to []
var noises = [];


noises[0] = 'snoring';

// add an element using push method
noises.push('woof');

// using unshift add another noise value the array
noises.unshift('barking');


// add another element using [] but make sure this element will always be the last one
noises[noises.length] = 'rawr';

noises.push('string');

// console log noises' length
console.log(noises.length);



// console.log last element of the array
console.log(noises[noises.length-1]);

console.log(animal.noises);

//////////////////////////////////////////////////////////////////////
// Step 3 - Combining Step 1 and 2 ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

// set animal noises to noises 


animal['noises'] = noises;

/* *******************************************************************
 * Step 4 - Review
 *
 * 1. What are the different ways you can access properties on objects?
 *
 * 2. What are the different ways of accessing elements on arrays?
 *
 * *******************************************************************
 */

/*

*Arrays accessing:

console.log(noises[1])

*Object Accessing
console.log(obj.key)
console.log(obj['key'])


*/



/* *******************************************************************
 * Step 5 - Take a Break!
 *
 * It's super important to give your brain and yourself
 * a rest when you can! Grab a drink and have a think!
 * For like 10 minutes, then, BACK TO WORK! :)
 * *******************************************************************
 */

//////////////////////////////////////////////////////////////////////
// Step 6 - A Collection of Animals //////////////////////////////////
//////////////////////////////////////////////////////////////////////
// create an var named aniamls and assign it to array
var animals = [];

// push animal to animals

animals.push(animal);

// console.log animals

console.log(animals);

// create a var named duck
// assign it to the listed vaules 
var duck = { species: 'duck', name: 'Jerome', noises: ['quack', 'honk', 'sneeze', 'woosh'] };

// push duck to animals

animals.push(duck);
console.log(animals);

// Create two animal objects each with
// add species, a name, two sounds sounds 
//add them to animals.

var cat = { species: 'cat', name: 'Kitty', noises: ['meow','purr'] };
var bird = { species: 'bird', name: 'Sammy', noises: ['tweet','sing'] };

animals.push(cat);
animals.push(bird);

// console.log animals
console.log(animals);

// console.log length
console.log(animals.length);

//////////////////////////////////////////////////////////////////////
// Step 7 - Making Friends ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// create a friends variable and assign it to a array
// Array is a good way to store a list or collection 

var friends = [];

// create a function called getRandom
// create parameter called animals
// return the index of a random element 
function getRandom(animals){
    return animals[Math.floor(Math.random() * animals.length)];
}

getRandom(animals);

// console.log friends
console.log(friends);

// use bracket notation
// PROPERTIES 
// {}
// adding friends to animal 
animal['friends'] = friends; 

console.log(animal);

// console.log animal




/**
 * Nice work! You're done Part 1. Pat yourself on the back and
 * move onto Part 2 in the file called "functions.js"
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var animal, noises, animals, friends, getRandom;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
     module.exports.animal = animal || null;
     module.exports.noises = noises || null;
     module.exports.animals = animals || null;
     module.exports.friends = friends || null;
     module.exports.getRandom = getRandom || null;
}
