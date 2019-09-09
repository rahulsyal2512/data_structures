function MaxSumSubArray(a, size) {
  let MaxSum = a[0];
  let MaxSumStart = 0,
    MaxSumEnd = 0;

  for (let i = 1; i < size; i++) {
    let tempSum = 0;
    let j = i;
    while (j >= 0) {
      tempSum += a[j];
      if (tempSum > MaxSum) {
        MaxSum = tempSum;
        MaxSumStart = j;
        MaxSumEnd = i;
      }
      j--;
    }
  }
  console.log("Max Sum in the array : ", MaxSum);
  console.log("Maz Sum Start : ", MaxSumStart, "  MaxSumEnd : ", MaxSumEnd);
}

MaxSumSubArray([-1, -3, -1, -0, -6, -2, -2], 7);
