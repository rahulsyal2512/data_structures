// function pushZerosToEnd(arr) {
//     for (i = 0; i < nums.length-1; i++) {
//         if(nums[i] === 0) {
//             temp = nums.splice(i, 1);
//             nums.push(temp[0]);
//         }
//     }
//     console.log(arr);
// }

function pushZerosToEnd(arr) {
  let count = 0;
  for (let i = 0; i <= arr.length - 1; i++) {
    if (arr[i] !== 0) {
      arr[count] = arr[i];
      count++;
    }
  }
  while (count <= arr.length - 1) {
    arr[count] = 0;
    count++;
  }
  console.log(arr)
}

pushZerosToEnd([2, 0, 5, 0, 1, 0, 3]);
