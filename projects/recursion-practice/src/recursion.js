// Solve all of the following prompts using recursion.

// 1. Calculate the factorial of a number.  The factorial of a non-negative integer n,
// denoted by n!, is the product of all positive integers less than or equal to n.
// Example:  5! = 5 x 4 x 3 x 2 x 1 = 120
// factorial(5);  // 120
var factorial = function(n) {
  // base case 
  // stop when the number is equal to 1 or 0 
if (n == 1 || n == 0){
  return 1; 
} else if (Math.sign(n) === -1){
  return null; 

} else {
  // recurive case
  // multiply our number to our recurive case resolve to 
  // subtract 1 to reach the base case 
  return n * factorial(n-1); 
}

  
};

// 2. Compute the sum of an array of integers.
// Example:  sum([1, 2, 3, 4, 5, 6]);  // 21
var sum = function(array) {
  // base case:
  // stop until the array is empty 
  if (array.length === 0){
    return 0;
  }else {
    // RECURIVE case
    // return the array at the first index and slice it off 
    return array[0] + sum(array.slice(1));
  }
};

// 3. Sum all numbers in an array containing nested arrays.
// Example: arraySum([1,[2,3],[[4]],5]); // 15
var arraySum = function(array) {
};

// 4. Check if a number is even.
var isEven = function(n) {
  // base cases: 
  if (n === 0){
    return true;
  } else if (n === 1){
    return false; 
  }
return isEven(Math.abs(n) -2); 
};

// 5. Sum all integers below a given integer.
// sumBelow(10); // 45
// sumBelow(7); // 21
var sumBelow = function(n) {
  // Base case: 
  // want it to stop at 0 
  if ( n === 0){
    return n;
  // }else if (n === 1){
  //   return n - sumBelow(n - 1); 
  // }else if (n === -1){
  //   return n + sumBelow(n + 1)
  }else if (n < 0){
    return (n + 1) + sumBelow(n + 1);
  }
  
return (n - 1) + sumBelow(n - 1); 
  
};

// 6. Get the integers in range (x, y).
// Example:  range(2, 9);  // [3, 4, 5, 6, 7, 8]
var range = function(x, y) {
  // declare a new variable and assign it to true boolean
   var included = true;
   // base case:
   // it will stop when x is greater than y 
  if (x > y) {
    // declare and assign x 
    var temp = x;
    // assign x to y 
    x = y;
    // now reassign temp to y 
    y = temp;
    // reassign included to false
    included = false;
  }
  // if x is strictly equal to y, it will return an empty array 
  if (x === y) return [];
  // // if x  + 1 is strictly equal to y, it will return an empty array 
  if (x+1 === y) return [];
  // declare and assign a new variable 
  var res = range(x, y-1); // recursive call: it will take in x, and y - 1 as inputs 
  res.push(y-1); // it will push y-1 into the variable 
  // ternary operator!! will return the true or false 
  return included ? res : res.reverse(); 
};





// 7. Compute the exponent of a number.
// The exponent of a number says how many times the base number is used as a factor.
// 8^2 = 8 x 8 = 64.  Here, 8 is the base and 2 is the exponent.
// Example:  exponent(4,3);  // 64
// https://www.khanacademy.org/computing/computer-science/algorithms/recursive-algorithms/a/computing-powers-of-a-number
var exponent = function(base, exp) {
  // create a variable and assign it to false 
   var neg = false;
   // base case:
   // it will stop when the exponent is less than 0 
  if (exp < 0) {
    // reassign the neg variable to true 
    neg = true;
    // reassign and multiply the exp to -1 
    exp *= -1;
  } // now, if the exp strictly equals 0
  // lets return 1
  if (exp === 0) return 1;
  // recursive case:
  // declaring and assigning a variable to the base times the function call with inputs of base and the exp minus 1 
  var res = base * exponent(base, exp-1);
  // condition statement: 
  // if it is not negative, it will return the true or false
  return !neg ? res : 1/res;
};

// 8. Determine if a number is a power of two.
// powerOfTwo(1); // true
// powerOfTwo(16); // true
// powerOfTwo(10); // false
var powerOfTwo = function(n) {
  // base case:
  // it will stop when the number is a power of two
   if (n === 0) return false; // return false
   // it will stop here: 
  if (n === 1) return true;
  // if the number % 2 does not strictly equal 0
  // it will return false 
  if (n%2 !== 0) {
    return false;
  }
  // recurive call:
  // call out the function and take the number divided by 2 
  return powerOfTwo(n/2);
};

// 9. Write a function that accepts a string a reverses it.
var reverse = function(string) {
  // base case:
  // it will stop when the string length reaches 0
  // now return the string 
    if (string.length === 0) return string;
    // recurive case:
    // it will call the function, and the input will be the string with the substring method at 1 added on to the string at the char starting at 0 
  return reverse(string.substring(1)) + string.charAt(0)
};

// 10. Write a function that determines if a string is a palindrome.
var palindrome = function(string) {
// create a variable that will go through to see if there are only letter or numbers global 
 var res = /[^A-Za-z0-9]/g;
 // create a new variable and assign it to a string at lower case using the replace method 
 let str = string.toLowerCase().replace(res, '');
 // stop condition:
 // it will stop when the string's length reaches 0 or 1 
 	if(str.length === 0 || str.length === 1){
		return true; // now return true
		//  if the string at the first index stritly equals the string at the last 
	} else if(str[0] === str[str.length - 1]) {
	  // then it wil return the recursive call slicling it at first position, and ending at last
		return palindrome(string.slice(1, string.length - 1));
	}
	return false; // done return false 
};

// 11. Write a function that returns the remainder of x divided by y without using the
// modulo (%) operator.
// modulo(5,2) // 1
// modulo(17,5) // 2
// modulo(22,6) // 4
var modulo = function(x, y) {
};

// 12. Write a function that multiplies two numbers without using the * operator  or
// JavaScript's Math object.

   // stop:
  // if y is strictly equal to 0 or if x is then stop

  // return 0 
  // if y is strictly equal to 1 
 
  // recurive case:
  // declare and assign res to x + the function call
  // it will have an input of x, and y minus 1 
 
  // ternary operator:
  // it will check if it is negative and return if it will be negative or not

var multiply = function(x, y) {
        

   var isNeg = false;
  if (x < 0) {
    isNeg = !isNeg;
    x = -x;
  }
  if (y < 0) {
    isNeg = !isNeg;
    y = -y;
  }
  if (y === 0 || x === 0) return 0;
  if (y === 1) return x;
  var res = x + multiply(x, y-1);
  return isNeg ? -res : res;

};

// 13. Write a function that divides two numbers without using the / operator  or
// JavaScript's Math object.
var divide = function(x, y) {
};

// 14. Find the greatest common divisor (gcd) of two positive numbers.  The GCD of two
// integers is the greatest integer that divides both x and y with no remainder.
// Example:  gcd(4,36);  // 4
// http://www.cse.wustl.edu/~kjg/cse131/Notes/Recursion/recursion.html
// https://www.khanacademy.org/computing/computer-science/cryptography/modarithmetic/a/the-euclidean-algorithm
var gcd = function(x, y) {
};

// 15. Write a function that compares each character of two strings and returns true if
// both are identical.
// compareStr('house', 'houses') // false
// compareStr('', '') // true
// compareStr('tomato', 'tomato') // true
var compareStr = function(str1, str2) {
  // Base case: 
  // it will stop when there are no more characters in the string
  // then it will check if the strings strictly equal each other 
 if (str1.length === 0 && str2.length === 0) {
        if (str1[0] === str2[0]) {
            return true; // return true if true; 
        }
  } // if the strings do not equal each other, it will be false 
    else if (str1[0] !== str2[0]) {
        return false;
    }
    // recursive case: call the function then it will take on each string slicing off the first index each time
    return compareStr(str1.slice(1), str2.slice(1));

  
  
};
    
    
    
// 16. Write a function that accepts a string and creates an array where each letter
// occupies an index of the array.
var createArray = function(str){
  // declare and assign an empty array to hold the new value; 
    let arr = [];
    // Base case:
    // it will stop when there are no letters in the string
  if (str.length === 0){
    return arr; // now return the arr 
  }
  // push the first index of the string into the arr variable 
  arr.push(str[0]); 
  // reassign the arr variable to a new array that will add the index to the array 
arr = arr.concat(createArray(str.slice(1)));
return arr; // done, return the arr 
};




// 17. Reverse the order of an array
var reverseArr = function (array) {
  // create a new array that will hold the new values 
   var reversedArr = [];
   // create a conditional statement that will check if the array's length is 0 
  if(array.length === 0) { 
    // now return the new array if that condition checks out 
    return reversedArr;
    }
    // pushing in the last element that is removed from the old array into the new one 
  reversedArr.push(array.pop());
  // now reassign the new array value to the two arrays joined together slicing off at 0 index 
  reversedArr = reversedArr.concat(reverseArr(array.slice(0)));
  return reversedArr; // done, return the reversedArr 
};

// 18. Create a new array with a given value and length.
// buildList(0,5) // [0,0,0,0,0]
// buildList(7,3) // [7,7,7]
var buildList = function(value, length) {
  // create a new array to store the new values 
   let newArr = [];
   // base case:
   // length is just a number, so when the length strictly equals to 0 it will return the newArr
  if (length === 0){
    return newArr; 
    }
    // push the value into the newArr container 
    newArr.push(value); 
    // recursion case: 
    // reassign the variable to add the two arrays joined together with the value, and the amount of times it will appear
    // by removing the length by one each time 
    newArr = newArr.concat(buildList(value, length -1));
      return newArr; // done return newArray; 
      

  
  
  
  
};


// 19. Count the occurence of a value inside a list.
// countOccurrence([2,7,4,4,1,4], 4) // 3
// countOccurrence([2,'banana',4,4,1,'banana'], 'banana') // 2
var countOccurrence = function(array, value) {
  // create a counter to keep track of the amount of time our value occurs in that array
    let count = 0; 
    // base case:
    // it will stop when the array's length is at 0 
  if(array.length === 0){
    // return the count
    return count;
    // if the array at the first index equals the value, it will add to the counter 
  }else if(array[0] === value){
     count += 1;
     // return the counter with the array's values sliced 
    return count + countOccurrence(array.slice(1),value);
    // if none of the conditions are true, it will just return the array sliced off 
  }else {return countOccurrence(array.slice(1),value)}
};

// 20. Write a recursive version of map.
// rMap([1,2,3], timesTwo); // [2,4,6]
var rMap = function(array, callback) {
  // base case:
  // it will stop when the array's length is at 1 
   if(array.length === 1) { 
  	return callback(array); // return the callback function with the array as the input 
  }
  // now return the callback that will multiply by the first index in the array
  // use our rMap function to slice off the array, and takes callback as an parameter 
    return [callback(array[0])].concat(rMap(array.slice(1), callback));
};

// 21. Write a function that counts the number of times a key occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countKeysInObj(testobj, 'r') // 1
// countKeysInObj(testobj, 'e') // 2
var countKeysInObj = function(obj, key) {
};

// 22. Write a function that counts the number of times a value occurs in an object.
// var testobj = {'e': {'x':'y'}, 't':{'r': {'e':'r'}, 'p': {'y':'r'}},'y':'e'};
// countValuesInObj(testobj, 'r') // 2
// countValuesInObj(testobj, 'e') // 1
var countValuesInObj = function(obj, value) {
};

// 23. Find all keys in an object (and nested objects) by a provided name and rename
// them to a provided new name while preserving the value stored at that key.
var replaceKeysInObj = function(obj, key, newKey) {
};

// 24. Get the first n Fibonacci numbers.  In the Fibonacci Sequence, each subsequent
// number is the sum of the previous two.
// Example:  0, 1, 1, 2, 3, 5, 8, 13, 21, 34.....
// fibonacci(5);  // [0, 1, 1, 2, 3, 5]
// Note:  The 0 is not counted.
var fibonacci = function(n) {
};

// 25. Return the Fibonacci number located at index n of the Fibonacci sequence.
// [0,1,1,2,3,5,8,13,21]
// nthFibo(5); // 5
// nthFibo(7); // 13
// nthFibo(3); // 2
var nthFibo = function(n) {
  // base case: 
  // it will stop when the number is less than 0 
  if(n < 0) {
    	return null; // it will return null
    	// if the number is strictly equal to q it will return 1 
    } else if(n === 1) {
		return 1;
	}// recursive case:
	// call the function twice, first it will take n and subtract, then it will add to n subtracting 2 
  	return nthFibo(n - 1) + nthFibo(n - 2);
};

// 26. Given an array of words, return a new array containing each word capitalized.
// var words = ['i', 'am', 'learning', 'recursion'];
// capitalizedWords(words); // ['I', 'AM', 'LEARNING', 'RECURSION']
var capitalizeWords = function(input) {
// create a new container to hold the new value 
    let arr = [];
    // base case:
    // it will end when the length is at 0 
    if(input.length === 0) {
        return arr; // return the arr
    } 
    // now push the input's first index in uppercase into the new arr 
    arr.push(input[0].toUpperCase());
    // reassign the arr to join the two arrays together slicing off the element each time
    arr = arr.concat(capitalizeWords(input.slice(1)));
    return arr; // return the arr 
};

// 27. Given an array of strings, capitalize the first letter of each index.
// capitalizeFirst(['car', 'poop', 'banana']); // ['Car', 'Poop', 'Banana']
var capitalizeFirst = function(array) {
  // create a new container to hold the new value 
   let arr  = []; 
   // base case:
   // it will stop when array's length is not true 
   // it return the arr
    if(!array.length) { return arr;
    }
    // push the array's first index at the first char into uppercase adding on the array's first index, and slicing it 
    arr.push(array[0].charAt(0).toUpperCase() + array[0].slice(1));
     // reassign the arr to join the two arrays together slicing off the element each time
    arr = arr.concat(capitalizeFirst(array.slice(1)));
    return arr; // done 
};

// 28. Return the sum of all even numbers in an object containing nested objects.
// var obj1 = {
//   a: 2,
//   b: {b: 2, bb: {b: 3, bb: {b: 2}}},
//   c: {c: {c: 2}, cc: 'ball', ccc: 5},
//   d: 1,
//   e: {e: {e: 2}, ee: 'car'}
// };
// nestedEvenSum(obj1); // 10
var nestedEvenSum = function(obj) {
};

// 29. Flatten an array containing nested arrays.
// Example: flatten([1,[2],[3,[[4]]],5]); // [1,2,3,4,5]
var flatten = function(arrays) {
};

// 30. Given a string, return an object containing tallies of each letter.
// letterTally('potato'); // {'p':1, 'o':2, 't':2, 'a':1}
var letterTally = function(str, obj) {
  // declare variable called arr and assign using the Array.from method to create a new array or object 
   let arr = Array.from(arguments)[1] || {};
   // stop case:
   // it will end when the string length reaches 0 
    if(str.length === 0) {
      // return the arr
        return arr;
    } // if the arr with the string at index 1 or not, it will = 1 
    if(!arr[str[0]]) {
        arr[str[0]] = 1;
    } else
     { // if those conditions are not true, then it will console log 'hey'
        console.log(arr[str[0]], 'hey');
        arr[str[0]]++; // increment 1 
    } // recurive case: 
    // call the function, with the string sliced start at 1, and take the arr 
    return letterTally(str.slice(1), arr);
};

// 31. Eliminate consecutive duplicates in a list.  If the list contains repeated
// elements they should be replaced with a single copy of the element. The order of the
// elements should not be changed.
// Example: compress([1, 2, 2, 3, 4, 4, 5, 5, 5]) // [1, 2, 3, 4, 5]
// Example: compress([1, 2, 2, 3, 4, 4, 2, 5, 5, 5, 4, 4]) // [1, 2, 3, 4, 2, 5, 4]
var compress = function(list) {
  // base case:
  // it will stop when the list length is at 0
  // it will return an empty array 
   if (list.length === 0) return [];
   // recursive call:
   //  create a var named newList and assign it to the list being sliced off at 1
  var newList = compress(list.slice(1));
  // condition statement:
  // if the list at 0 index is not equal to the newList at 0 index
  if (list[0] !== newList[0]) {
    // adding the first element in the new list 
    newList.unshift(list[0]);
  }
  return newList; // done 
};

// 32. Augment every element in a list with a new value where each element is an array
// itself.
// Example: augmentElements([[],[3],[7]], 5); // [[5],[3,5],[7,5]]
var augmentElements = function(array, aug) {
};

// 33. Reduce a series of zeroes to a single 0.
// minimizeZeroes([2,0,0,0,1,4]) // [2,0,1,4]
// minimizeZeroes([2,0,0,0,1,0,0,4]) // [2,0,1,0,4]
var minimizeZeroes = function(array) {
  // stop case: 
  // it will stop when the array's length is at 0 
    if (array.length === 0) { 
      return array // return the arr 
      
    } 
    // create a conditonal statement to check if the array sliced will strictly equal 0
    // & if the array at the first idex strictly equals 0 
    if(minimizeZeroes(array.slice(1))[0] === 0 && array[0] === 0) {
      // return the function with the array sliced
        return minimizeZeroes(array.slice(1));
    } else {
      // recursive case:
      // join the two arrays together, using concat and slicing of the elements each time 
        return [array[0]].concat(minimizeZeroes(array.slice(1)));
    }
};

// 34. Alternate the numbers in an array between positive and negative regardless of
// their original sign.  The first number in the index always needs to be positive.
// alternateSign([2,7,8,3,1,4]) // [2,-7,8,-3,1,-4]
// alternateSign([-2,-7,8,3,-1,4]) // [2,-7,8,-3,1,-4]
var alternateSign = function(array) {
  // stop case:
   // it will stop when the array's length is at 0 
    if (array.length === 0) { 
      return array;
      } // condition statements:
      // if the array at index 0 is less than 0 then it will be reassigned to a negative 
    if(array[0] < 0) { array[0] = -array[0]; }
    // if the array at the second position is greater than 1
    // it will reassign it to negative 
    if(array[1] > 0) { array[1] = -array[1]; }
    // recurive case:
    // joining the arrays using concat, it will call the function and slice it starting at 2 position 
    return [array[0], array[1]].concat(alternateSign(array.slice(2)));
};

// 35. Given a string, return a string with digits converted to their word equivalent.
// Assume all numbers are single digits (less than 10).
// numToText("I have 5 dogs and 6 ponies"); // "I have five dogs and six ponies"
var numToText = function(str) {
  // base case:
  // it will stop when the string length reaches 0 
  // it will return an empty string 
  if (str.length === 0) return '';
  // recursive case:
  // declare a variable named string2 and assign it to the function call with the input, 
  // of the string using substring method starting at 0 index, and ending at the last 
  var string2 = numToText(str.substring(0, str.length-1));
  // conditional statement:
  // it will use switch to select which code block to use 
  var replace; 
  switch (str[str.length-1]) {
    case '1': replace = 'one';
      break;
    case '2': replace = 'two';
      break;
    case '3': replace = 'three';
      break;
    case '4': replace = 'four';
      break;
    case '5': replace = 'five';
      break;
    case '6': replace = 'six';
      break;
    case '7': replace = 'seven';
      break;
    case '8': replace = 'eight';
      break;
    case '9': replace = 'nine';
      break;
    default: replace = str[str.length-1];
      break;
  } // done return the new string + replace 
  return string2 + replace;
};

// *** EXTRA CREDIT ***

// 36. Return the number of times a tag occurs in the DOM.
var tagCount = function(tag, node) {
};

// 37. Write a function for binary search.
// Sample array:  [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15]
// console.log(binarySearch(5)) will return '5'

var binarySearch = function(array, target, min, max) {
};

// 38. Write a merge sort function.
// Sample array:  [34,7,23,32,5,62]
// Sample output: [5,7,23,32,34,62]
var mergeSort = function(array) {
};



//-----------------------------------
// DON'T REMOVE THIS CODE -----------
//-----------------------------------

if ((typeof process !== 'undefined') &&
  (typeof process.versions.node !== 'undefined')) {

  /**
   * Due to some node-related issues with spying on recursive functions,
   * it isn't possible to test them with sinon spies like so:
   *
   *   var originalSum = sum;
   *   sum = sinon.spy(sum);
   *
   *   sum([1, 2, 3, 4, 5, 6]);
   *
   *   // callCount will always 1 causing, this test to always fail in node :(
   *   expect(sum.callCount).to.be.above(1);
   *
   *   sum = originalSum;
   *
   * However, we can work around this by using proxies!
   * If you reassign the function to a proxy and use the `apply` trap,
   * you can make a `proxyCallCount` property on the function,
   * increment it each time it's called, and then test that instead.
   *
   *   sum.proxyCallCount = 0;
   *   sum([1, 2, 3, 4, 5, 6]);
   *   expect(sum.proxyCallCount).to.be.above(1);
   *
   * MDN Proxies: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy
   * MDN Proxy Apply Trap: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Proxy/handler/apply
   */
  const createSpyProxy = (func) => {
    func.toString = func.toString.bind(func);

    const recursiveFunctionCallCounterHandler = {
      apply(target, thisArg, args) {
        target.proxyCallCount = target.proxyCallCount ? target.proxyCallCount + 1 : 1;
        return target.apply(thisArg, args);
      },
    };

    return new Proxy(func, recursiveFunctionCallCounterHandler);
  };

  factorial = createSpyProxy(factorial);
  sum = createSpyProxy(sum);
  arraySum = createSpyProxy(arraySum);
  isEven = createSpyProxy(isEven);
  sumBelow = createSpyProxy(sumBelow);
  range = createSpyProxy(range);
  exponent = createSpyProxy(exponent);
  powerOfTwo = createSpyProxy(powerOfTwo);
  reverse = createSpyProxy(reverse);
  palindrome = createSpyProxy(palindrome);
  modulo = createSpyProxy(modulo);
  multiply = createSpyProxy(multiply);
  divide = createSpyProxy(divide);
  gcd = createSpyProxy(gcd);
  compareStr = createSpyProxy(compareStr);
  createArray = createSpyProxy(createArray);
  reverseArr = createSpyProxy(reverseArr);
  buildList = createSpyProxy(buildList);
  countOccurrence = createSpyProxy(countOccurrence);
  rMap = createSpyProxy(rMap);
  countKeysInObj = createSpyProxy(countKeysInObj);
  countValuesInObj = createSpyProxy(countValuesInObj);
  replaceKeysInObj = createSpyProxy(replaceKeysInObj);
  fibonacci = createSpyProxy(fibonacci);
  nthFibo = createSpyProxy(nthFibo);
  capitalizeWords = createSpyProxy(capitalizeWords);
  capitalizeFirst = createSpyProxy(capitalizeFirst);
  nestedEvenSum = createSpyProxy(nestedEvenSum);
  flatten = createSpyProxy(flatten);
  letterTally = createSpyProxy(letterTally);
  compress = createSpyProxy(compress);
  augmentElements = createSpyProxy(augmentElements);
  minimizeZeroes = createSpyProxy(minimizeZeroes);
  alternateSign = createSpyProxy(alternateSign);
  numToText = createSpyProxy(numToText);
  tagCount = createSpyProxy(tagCount);
  binarySearch = createSpyProxy(binarySearch);
  mergeSort = createSpyProxy(mergeSort);

  module.exports = {
    factorial,
    sum,
    arraySum,
    isEven,
    sumBelow,
    range,
    exponent,
    powerOfTwo,
    reverse,
    palindrome,
    modulo,
    multiply,
    divide,
    gcd,
    compareStr,
    createArray,
    reverseArr,
    buildList,
    countOccurrence,
    rMap,
    countKeysInObj,
    countValuesInObj,
    replaceKeysInObj,
    fibonacci,
    nthFibo,
    capitalizeWords,
    capitalizeFirst,
    nestedEvenSum,
    flatten,
    letterTally,
    compress,
    augmentElements,
    minimizeZeroes,
    alternateSign,
    numToText,
    tagCount,
    binarySearch,
    mergeSort,
  };
}

//-----------------------------------
