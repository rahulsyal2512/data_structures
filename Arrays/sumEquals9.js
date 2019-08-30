var twoSum = function(nums, target) {
  let obj = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    if (obj[nums[i]]) {
      result.push(obj[nums[i]]);
      result.push(i);
    }
    let a = target - nums[i];
    obj[a] = i;
    console.log(obj);
  }
  console.log(result);
};

var twoSums = function(nums, target) {
    var result = [];
    nums.forEach(function(num, i) {
        var diff = target - num;
        var k = nums.indexOf(diff);
        
        if ( k > -1 && k !== i) {
            result.push(i);
            
        }
    });
    return result;
}

twoSum([2, 4, 7, 8], 9);
