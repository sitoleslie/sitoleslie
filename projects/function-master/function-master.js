//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  

// this function will take on one argument that is an object
// by using the object.values methond it will return its value in an array 



function objectValues(object) {
    return Object.values(object);
} 

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////



// this function will have an object as in argument 
// declare a variable with an empty string to store the new string
// create a for in loop to access the object 
// return the string with the key concat with a space


function keysToString(object) {
    var string = '';
    for (var key in object){
     string += key + ' ';
    }
return string.trim();
}


//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    // this function will take an object as it's argument 
 // declare a variable with an empty string to store the new string
// create a for in loop to access the object 
// create an if statement with a condition to check if that object key will be a string
// O: then concat the variable string with the object's value in strings, separated with a space



function valuesToString(object) {
     var string = '';
    for (var key in object){
    if (typeof object[key] === 'string'){
         string += object[key] + ' ';
    }
    }
return string.trim();
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

    
// this function will have one argument 
// create a control flow, if, else if, else if and else to check the conditions
// first, check if the collection is an array and return it in an array with a string
// then else if, the collection is an object it will return object in a string
// another else if to compare if the collection is a date and it will return true 






function arrayOrObject(collection) {
    if (Array.isArray(collection)){
        return 'array';
    }else if (typeof collection === 'object'){
        return 'object';
    }else if (collection instanceof Date ===  true){
        return;
}else {return;
    
}
}
//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

 
    
    // this function will have one arguement: a string of one word 
    // use the replace method to replace the first char of the string into an UPPERRRCASEEE
    // this will return the word with the first letter in CAP

    function capitalizeWord(string) {
    return string.replace(string[0],string[0].toUpperCase());
}


//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

// create an variable to hold the new string and use the split method to split the string into characters 
// create a for loop to access each char in the string 
// set the string at that index to string[i][0].toUpperCase()
// concat that string index and use the substr to at 1 position to return the rest of the string
// return the string together 
function capitalizeAllWords(string) {

string = string.split(' ')

for (var i = 0; i < string.length; i++){
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
}
return string.join(' ')

}
//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// define a variable that will give object's name value in CAP 
// then concat with every other letter of the object's name value
// use the substr method and it will start at 1 
// this will create a new string
// output: it will return the new variable with spaces and !



function welcomeMessage(object) {
let name = object.name[0].toUpperCase() + object.name.substr(1); 
return 'Welcome' + ' ' + name + '!'; 
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////


// define a variable that will take an object with a name return in cap then concat the characters 
// this will recreate a new string
// define a variable that will take an object with a species return in cap then concat the characters 
// this will recreated a new string

// return the two new variables with spaces and 'is a' string

function profileInfo(object) {
let name = object.name[0].toUpperCase() + object.name.substr(1);
let species = object.species[0].toUpperCase() + object.species.substr(1);
return name + ' ' + 'is a' + ' ' + species
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//output: if it has noises array then return a string that is separated with a space
// if there is no noises, or empty noise array then return 'there are no noises'

function maybeNoises(object) {
if (object.noises === undefined){
    return 'there are no noises';
}else if (object.noises.length > 0 === false){
    return 'there are no noises';
}else if (Array.isArray(object.noises) === true){
    return object.noises.join(' ');
}




}

//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
  
function hasWord(string, word) {
// implement a for loop to gain access to the string
// create an if statement this will return a boolean value 
// the condition will contain the includes() method to check if the word is in the string
// output: true;
// constraints: false; 

for (var i = 0; i < string.length;i++){
    if (string.includes(word)){
        return true;
    }else {return false}
}



}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 

// this function will take on two arguments 
// add the name to the object array 
// think about how do we add something to an object that has an array 
// start with the object, the key, push it and the name parameter
// return the object 
function addFriend (name, object) {
object.friends.push(name); 
return object; 
}

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
 

// this function will take on two parameters
// create an if, else if control flow
// I: if the friend key has an empty object then output false
// I: check if the object friend key has that name at a specific index if it does not equal -1 then output will be true 
// I: otherwise the output will be false 
function isFriend(name, object) {
 if (object.friends === undefined){
     return false;
 }else if (object.friends.indexOf(name) !== -1){
     return true;
 }else {
    return false; 
 }
  
}

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function nonFriends(name, array) {
 var nameList = [];
    var result = [];
    var current = null;
    for(var i=0; i<array.length; i++){
        if(name === array[i].name){
            current = array[i];
        }else{
            nameList.push(array[i].name);
        }
    }
    if(current === null){
        return nameList;
    }
    for(var i=0; i<nameList.length; i++){
        if(current.friends.indexOf(nameList[i]) == -1){
            result.push(nameList[i]);
        }
    }
    return result;
}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function updateObject(object, key, value) {
object[key] = value;
  return object;
}

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////

function removeProperties(object, array) {
for(var i = 0; i < array.length; i++){
    for(var key in object){
        if(array[i] === key){
            delete object[key];
        }
    }
}return object;
}

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function dedup(array) {
var newArray = array.filter(function(item, pos) {
    return array.indexOf(item) == pos;
});
return newArray;
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}