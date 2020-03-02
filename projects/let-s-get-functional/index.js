// #!/usr/bin/env node

'use strict';

var customers = require('./data/customers.json');
var _ = require("lodown-sitoleslie");

/**
 * 1. Import your lodown module using the require() method,
 *    using the string 'lodown-<my-username>', or whatever
 *    name with which you published your npm lodown project.
 *
 * 2. Solve all problems as outlined in the README.
 *
 * 3. We started the first one for you as an example! Make the rest in that style.
 *
 * 4. To test your work, run the following command in your terminal:
 *
 *    npm start --prefix ./projects/let-s-get-functional
 *
 *    IMPORTANT: Make sure you replace <YOUR_GITHUB_FOLDER with your actual github folder name that is in your workspace.
 */

var maleCount = function(array) {
return _.filter(array,function(customerObj){
    return customerObj.gender === "male";
}).length; // so you  know how many objects youre return in the array  
};

var femaleCount = function(array){
    return _.filter(array,function(customerObj){
    return customerObj.gender === "female";
}).length; // so you  know how many objects youre return in the array  
};

// call the function 
var oldestCustomer = function(array){
    let oldest = 0;
    // have an array of objects 
    // have to use the reduce method so we can iterate through the array to get the value we need 
    // reduce will take on three parameters : array, function(p1,p2)
    var oldFart = _.reduce(array,function(acc, people){
        // create a conditional statement to find the largest age 
        if (people.age > oldest){
            // a counter of oldest was created so when it is true, the oldest will get reassign the largest number 
            oldest = people.age
            // the acc will become the new name of that age 
            acc = people.name
        }
        return acc; // return the string
    }, '')
    
    return oldFart; // return the oldest name 
}

var youngestCustomer = function(array){
    let youngest = 100;
    // have an array of objects 
    // use the reduce method to iterate through the array to get the value needed 
    // reduce wll take on three parameters: array, function(), and a string 
    var youngFart = _.reduce(array,function(acc, people){
        if (people.age < youngest){
            // a conditional statement was created to find the youngest age 
            youngest = people.age
            // a counter of youngest was created so when it is true, the youngest will get reassigned the largest number 
            acc = people.name
            // the acc will become the new name of that age 
        }
        return acc; // return the string
    }, '')
    
    return youngFart; // return the youngest name 
}


var averageBalance = function(array){
    // call out the reduce function to iterate throught the array 
let total = _.reduce(array, function(acc, people) {
    // a new variable was created to store the new data
    // since, the acc is the previous result, a seed was created as a start point of 0 to add up all the balances 
    // since the value of balance is a string, parseFloat was used to make the string value into a number 
    // since the string has char, the replace method was used to remove those char, so only numbers will be in that string
    // to find the average balance divide it by the array's length
let newBal = acc + parseFloat(people.balance.replace(/\$/g,'').replace(/\,/g,'')) / array.length
// now return the newBal 
return newBal; 
}, 0) 
return total; // return the total for the average balance 
}

var firstLetterCount = function(array,letter){
    // use the reduce function to iterate through the array 
  let newNum =  _.reduce(array, function(acc, people){
      // create a conditional statement to check if the first index of person's name will have the same letter 
        if (people.name[0].toUpperCase() === letter.toUpperCase()){
            return acc + 1; // return the acc + 1, because it will add one everytime it finds a match 
        } else {
            return acc; // return 0 if none is found 
        }
    }
    , 0)
return newNum; 


}


var friendFirstLetterCount = function(array, customer, letter){
    // set filteredArray equal to the filter function invoked on array and 
    // a function taking element, index, and array
    let filteredArray = _.filter(array, function(element, index, array) {
       // if element.name is strictly equal to the customer string
       if (element.name === customer) {
           // return true
           return true;
       } 
    });
    // return the result of reduce invoked on the friends key value of the only element of 
    // filtered array
    // 
    return filteredArray[0].friends.reduce(function(accumulator, currentResult) {
        // if the first letter of currentResult converted to lowercase is
        // strictly equal to letter converted to lowercase
        if (currentResult.name[0].toLowerCase() === letter.toLowerCase()) {
            // increase the accumulator by 1
            accumulator += 1;
        }
        // return the accumulator
        return accumulator;
    }, 0)
};


var friendsCount = function(array,name){
    //gaining access to the array of friends
    //we have to iterate through the array of friends to find if the object has 'name' in there friend list
  return  _.reduce(array,function(accu,person){
        _.each(person.friends,function(friend){
            //console.log(friend);
            //if the customer has a friend with that given name
            if(friend.name === name){
                accu.push(person.name);
            }
                //if the given name is found push the customer name into array accu
        });
        return accu;
    },[]);
};

var topThreeTags = function(array) {
    let tag1 = _.reduce(array, function(tagsObj, current) {
        let arrayOfTags = current.tags;
        _.each(arrayOfTags, function(tag) {            if (tagsObj[tag]) {
                tagsObj[tag]++;
            } else { //if none just set the tag count equal to 1
                tagsObj[tag] = 1;
            }
        });
        return tagsObj; //return our tags obj counts
    }, {});
    let arr = []; //create a holder var
    _.each(tag1, function(value, key, obj) {
        arr.push([key,value]); //for each tag push the key and value into our array
    });
    arr.sort(function(x, y) {
        return y[1] - x[1]; //sort our arr from top to bottom
    });
    var topThree = arr.slice(0, 3); //use the slice method to get rid of extra data because you only want the top 3
    let test = _.map(topThree, function(nested) { //run map as a test
        return nested[0];
    });
    return test; //finally return the test
}



var genderCount = function(array){
   return _.reduce(array, function(acc, person){
       // create a conditional statement to check each gender 
       // counting how many times that gender exists 
       // create a seed with all genders and the initial value of 0 
        if (person.gender === 'male'){
        acc.male += 1; //each time a male exists it will add one
        } else if (person.gender === 'female'){
            acc.female += 1; //each time a female exists it will add one
        }else if (person.gender === 'non-binary'){
            acc['non-binary'] += 1; //each time a non-binary exists it will add one
        }
        return acc;
    }, {
        male: 0,
        female: 0,
        'non-binary':0 
    })
    
}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

// here, export any references you need for tests //
module.exports.maleCount = maleCount;
module.exports.femaleCount = femaleCount;
module.exports.oldestCustomer = oldestCustomer;
module.exports.youngestCustomer = youngestCustomer;
module.exports.averageBalance = averageBalance;
module.exports.firstLetterCount = firstLetterCount;
module.exports.friendFirstLetterCount = friendFirstLetterCount;
module.exports.friendsCount = friendsCount;
module.exports.topThreeTags = topThreeTags;
module.exports.genderCount = genderCount;
