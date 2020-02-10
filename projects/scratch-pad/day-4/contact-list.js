// #!/usr/bin/env node

'use strict';

/**
 * 4: Contact List
 * 
 *  a. Create a factory Function called makeContact(id, nameFirst, nameLast) 
 *     that returns a contact object.
 *     
 *          ex: makeContact(1, 'Max', 'Gaudin'); // => {id: 1, nameFirst: 'Max', nameLast: 'Gaudin'}
 *     
 *  b. Create a factory Function called makeContactList that returns an Object 
 *     that manages contacts. The contact-list object should have the following API:
 *       
 *      1. length(): returns the number of contacts within the list.
 *      2. addContact(contact): takes a contact object to be added to the 
 *         contact-list.
 *      3. findContact(fullName): takes a full-name String, like 'Max Gaudin', and 
 *         returns the contact object if found in the contacts-list, or, 
 *         undefined if the fullName does not match any contacts in the list.
 *      4. removeContact(contact): takes a contact object to be removed from 
 *         the contact-list.
 * 
 * BONUS : add a printAllContactNames() Function to your makeContactList() factory, so that the 
 *         contact-list returned has an all() API. The printAllContactNames() Function should 
 *         return a String formated with all the full-names of the separated 
 *         with a line-break, like so:
 *          
 *         myContacts.printAllContactNames(); // => Max Gaudin
 *                                                  John Fraboni
 *                                                  Your Mom
 *          
 *          WARNING: To pass the bonus test, the LAST full name should have NO
 *          new-line character added after it!
 */


// create an object literal 
// output: an object of the parameteres 
// YOUR CODE GOES BELOW HERE //
function makeContact(id, nameFirst, nameLast) {
var obj = {id, nameFirst,nameLast};
return obj;
} 
// set var contacts to = [];
// hint LIST
// create a key named addContact: 
//function that holds a parameter of an Object
// push it into the array 

// return an object that manages contacts



// create a key called findContact
// create a function that takes a string as a parameter 
// return if it is found in the contact-list 
// must access the contact list 
// create a for loop 
// create an if statement to see if it is true the contact object is on the list 

function makeContactList() {
    /*
     * You need something here to hold contacts. See length api for a hint:
     */
    
    var contacts = []; 
    
    return {
        // we implemented the length api for you //
        length: function() {
            return contacts.length;
     
        } ,
        addContact: function (object){ 
        contacts.push(object);
        },  
        findContact: function (fullName){
            for(var i = 0; i < contacts.length; i++) 
            if(fullName === contacts[i]["nameFirst"] + " " + contacts[i]["nameLast"])  
            return contacts[i]; 
        }, 
        removeContact: function (contact){
            for(var i = 0; i < contacts.length; i++){
                var currentContact = contacts[i]
            if (contact.id == contacts[i].id){
               contacts.splice(i,1)  
            }
            }
          }, printAllContactNames: function(){
          var contactNames = "";
            for(var i =0; i < contacts.length; i++){
              
                contactNames += contacts[i].nameFirst + " " +contacts[i].nameLast +"\n";
            }
               //console.log(contactNames);
                 return contactNames.slice(0,contactNames.length-1);        
          }
            } 
// create a key named removeContact
// create a function with the parameter contact 
// return a removed contact 


// create a key named printAllContacts
// create a function
// create var named contactNames and assign it to a string literal 
// create a for loop that will gain access to the contacts 
// start at 0
// end at the contacts length 
// increment 
//output: a full name string with a new line breaker 


// YOUR CODE GOES ABOVE HERE //
}
// DON'T REMOVE THIS CODE //////////////////////////////////////////////////////
if((typeof process !== 'undefined') &&
(typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.makeContact = makeContact;
    module.exports.makeContactList = makeContactList;
}
