//Log all pairs of array

const boxes = ["a", "b", "c", "d", "e"];
function logAllPairsOfArray(array) {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length; j++) {
      console.log(array[i], array[j]);
    }
  }
}

logAllPairsOfArray(boxes);

/* Complexity of this function is O(n^2) -Quadratic Time

 * (+) is used when a loop is one after the another
 * (*) is used when loops are nested
  
 * so here we have O(n * n) ==> O(n^2)
 */
