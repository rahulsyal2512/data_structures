const nemo = ["nemo"];

function findNemo(array) {
  for (i = 0; i < array.length; i++) {
    if (array[i] === "nemo") {
      console.log("Found nemo");
    }
  }
}

findNemo(nemo);
