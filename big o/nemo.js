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
