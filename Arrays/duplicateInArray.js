var containsDuplicate = function(nums) {
  let obj = {};
  for (let i = 0; i < nums.length; i++) {
    if (!obj[nums[i]]) {
      obj[nums[i]] = true;
    }
  }
  for (let j = 0; j < nums.length; j++) {
    if (obj[nums[j]]) {
      return true;
    }
  }
};

containsDuplicate([1, 2, 3, 1]);
