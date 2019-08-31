var rotate = function(nums, k) {
  for (let i = 0; i < k; i++) {
    let temp = nums[nums.length - 1];
    let tempo = arr[i];
    arr[i] = arr[temp];
    arr[temp] = tempo;
  }
  console.log(nums);
};

rotate([1, 2, 3, 4, 5, 6, 7, 8], 3);
