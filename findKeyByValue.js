/* Lodash has a function findKey and we're going to implement something similar but simpler. It will help us search for a key on an object where its value matches a given value. */

/* Implement the function findKeyByValue which takes in an object and a value. It should scan the object and return the first key which contains the given value. If no key with that given value is found, then it should return undefined. While this function is similar to Lodash's findKey function, the second argument is different. This is done to keep our challenge more relevant and simpler for now. */

// Use assertEqual to write test cases for various scenarios.

const assertEqual = function(actual, expected) {
    if (actual === expected) {
      console.log(`✅✅✅ + Assertion Passed: + ${actual} +  ===  + ${expected}`);
    } else {
      console.log(`🛑🛑🛑 + Assertion Failed:  + ${actual} +  !==  + ${expected}`);
    }
  };
  
  const bestTVShowsByGenre = { 
    //key : value
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };

  //To find the actual key associated with the given value, we are going to create a function that iterates through the object's (bestTVShowsByGenre's) keys using the .find() method because the .find() method returns the first value of a key that satisfies the provided argument (the object's key/object[key] === entered value/the expected key)
  function findKeyByValue(object, value) {
    let actualKey = Object.keys(object).find((key) => object[key] === value);
    return actualKey;
  }
  
  assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
  assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);