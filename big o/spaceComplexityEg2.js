function printHi(n) {
  let hiArray = [];
  for (let i = 0; i < n; i++) {
    hiArray[i] = "Hi";
  }
  return hiArray;
}

let arr = printHi(3);
console.log(arr);

// Cmplexity is O(n)
// because here we created array and 
// it filling items in it "n" times
