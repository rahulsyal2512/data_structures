const nemo = ["nemo"];
const everyone = ["just", "filling", "array", "with", "some", "items"];
const large = new Array(1000).fill("nemo");

function findNemo(array) {
  //try it in browser only
  // let t0 = performance.now();
  for (i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
  // let t1 = performance.now();

  //to calculate how much time it took to traverse the loop!

  // console.log("It took " + (t1 - t0) + " ms");
}

findNemo(everyone);

/* the complexity is O(n) --> Linear Time, as
 *the number of loops increases with increase in elements of array.
 */

// O(1) Constant- no loops
// O(log N) Logarithmic- usually searching algorithms have log n if they are sorted (Binary Search)
// O(n) Linear- for loops, while loops through n items
// O(n log(n)) Log Liniear- usually sorting operations
// O(n^2) Quadratic- every element in a collection needs to be compared to ever other element. Two
// nested loops
// O(2^n) Exponential- recursive algorithms that solves a problem of size N
// O(n!) Factorial- you are adding a loop for every element
// Iterating through half a collection is still O(n)
// Two separate collections: O(a * b)