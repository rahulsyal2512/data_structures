// Given two arrays, create a function that let's user
// know (true/false) whether these two arrays contain
// any common items

// For Example:
// const Array1 = ["x", "y", "z", "i"];
// const Array2 = ["a", "c", "d"];
// should return false.
// ------------
// const Array1 = ["a", "b", "c", "x"];
// const Array2 = ["z", "y", "x"];
// should return true.
const Array1 = ["x", "y", "z", "i"];
const Array2 = ["a", "b", "c", "i"];

// NOT THE BEST SOLUTION
function containCommonItems(arr1, arr2) {
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        return true;
      }
    }
  }
  return false;
}

console.log(containCommonItems(Array1, Array2));
