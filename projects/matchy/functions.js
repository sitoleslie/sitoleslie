/**
 * Part 2
 *
 * In this file, we're going to create some
 * Functions to work with our data created in
 * data.js.
 *
 * See the README for detailed instructions,
 * and read every instruction carefully.
 */

//////////////////////////////////////////////////////////////////////
// Step 1 - Search ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// create a function called search 
// two parameters 

// create something that looks through the animal array = loop
// return animal object if animal with that name exists

// create an if statement to compare animal object to the name parameter 
// return null if no animal with that name exists 


function search(animals,name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name ){
            return animals[i];
        }
    }
    return null;
} 


//////////////////////////////////////////////////////////////////////
// Step 2 - Replace //////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// create a function with three parameters 
// animal = an array 
// name = search 
// replace = object
// create an if statement to compare if the animal array will have that name 
// if it is true; then replace it's entire object with the replacement object 

// create for loop to access your animal array
function replace(animals, name, replacement){
   for (var i = 0; i < animals.length; i++){
       if (animals[i].name === name ){
           return animals[i] = replacement;
       }
       return null; 
   }
    
    
    
    
    
    
    
}






//////////////////////////////////////////////////////////////////////
// Step 3 - Remove ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// create a function called remove
// takes two parameters:
// p1: animals = array 
// p2: name = of the animal you want to search 

// create a for loop to acces your animal array 
// create an if statement to compare the animal name in the array to the name parameter 
// how do you access the animal name array 
// if it is true then remove that name
// it does not say return 
function remove(animals,name){
    for (var i = 0; i < animals.length; i++){
        if (animals[i].name === name){
            animals.splice(animals[i],1);
        }
    }
    
    
}






//////////////////////////////////////////////////////////////////////
// Step 4 - Create ///////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

/*## Step 4 - Add
 1. Write a function called `add` with a signature of `add(animals, animal) { //... }` that:
   - Takes 2 parameter, an Array of animals, and an Object representing a new animal to be added.
   - Checks that the animal Object has a `name` property with a length > 0.
   - Checks that the animal Object has a `species` property with a length > 0.
   - Has a **unique** name, meaning no other animals have that name.
   - Adds this new Object to the `animals` Array, **only** if all the other conditions pass.
   - Make sure it works.

This is called **data validation** and it's extremely important in web development!
*/


// create a function called add with two parameters
// p1: array of animals
// p2: an object = a new animal
// create an if statement to see if that animal object and species propert has length > 0
// the same condition statement compare animal's name and animals' name 
// use a counter to keep track
// create a separate if statement to check if the count will equal animal's length


function add(animals, animal){
    // Object.entries(animal);
    let counter = 0; 
    
     for (var i = 0; i < animals.length; i++) 
    if(animal.name.length > 0 && animal.species.length > 0 && animal.name !== animals[i].name){
        counter++
    }
    
    if(animals.length === counter){
     animals.push(animal);
    }
  
}
/**
 * You did it! You're all done with Matchy!
 */



//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
var search, replace, remove, add;
if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    module.exports.search = search || null;
    module.exports.replace = replace || null;
    module.exports.remove = remove || null;
    module.exports.add = add || null;
}
