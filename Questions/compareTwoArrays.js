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
const Array2 = ["x", "b", "c", "x"];

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

// O(a*b)

// console.log(containCommonItems(Array1, Array2));

// Another solution
function containCommonItems2(arr1, arr2) {
  let obj = { x: true };
  for (let i = 0; i < arr1.length; i++) {
    if (!obj[arr1[i]]) {
      obj[arr1[i]] = true;
    }
  }
  // console.log(obj);
  for (let j = 0; j < arr2.length; j++) {
    if (obj[arr2[j]]) {
      console.log("true");
    }
  }
  // console.log("false");
}

//O(a+b)

// containCommonItems2(Array1, Array2);

function containCommonItems3(arr1, arr2) {
  return arr1.some(elem => {
    return arr2.includes(elem);
  });
} 

const check = containCommonItems3(Array1, Array2);
console.log(check);

//O(n^2)
