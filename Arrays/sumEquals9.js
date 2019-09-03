var twoSum = function(nums, target) {
  let obj = {};
  const result = [];
  for (let i = 0; i < nums.length; i++) {
    var a = target - nums[i];

    if (nums[i] in obj) {
      result.push(nums[i]);
      result.push(a);
    }
    obj[a] = true;

    // console.log(obj);
  }
  console.log(result);
};

twoSum([2, 4, 7, 8], 9);

// var twoSums = function(nums, target) {
//     var result = [];
//     nums.forEach(function(num, i) {
//         var diff = target - num;
//         var k = nums.indexOf(diff);

//         if ( k > -1 && k !== i) {
//             result.push(i);
//         }
//     });
//     return result;
// }
