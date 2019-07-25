const nemo = ["nemo"];
const everyone = ["just", "filling", "array", "with", "some", "items"];
const large = new Array(1000).fill("nemo");

function findNemo(array) {
  //try it in browser only
  // let t0 = performance.now();
  for (i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
      break;
      // it is added because the loop was running 10 times before(input= 10)
      // so some optimization for now!
    }
  }
  // let t1 = performance.now();

  //to calculate how much time it took to traverse the loop!

  // console.log("It took " + (t1 - t0) + " ms");
}

// findNemo(everyone);

/* the complexity is O(n) --> Linear Time, as
 *the number of loops increases with increase in elements of array.
 */

function compressBoxes() {
  console.log(everyone[0]); // O(1)
  console.log(everyone[1]); // O(1)
}

compressBoxes(); //O(2)

/*
 * when it comes to cost and time we dont care of small things
 * so we round it to O(1) (dont mix 1 with number of operations,
 * here its time taken is constant)
 */
