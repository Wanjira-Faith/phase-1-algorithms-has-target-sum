function hasTargetSum(array, target) {
  // Write your algorithm here
  for (let i=0;i < array.length;i++){
    const complement = target - array[i];
    for (let j = i+1;j < array.length; j++){
      if (array[j] === complement)
      return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  o(n^2)= two nested loops
*/

/* 
  Add your pseudocode here
  look through each item in the array.
  for each element,calculate the complement by subtracting it from the target.
  look through the remaining elements,starting from the next element after the current element.
  checks if the current element 'array[j]' is equal to the complement
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
