// Naive
function hasPairWithSum(arr, sum){
    var len = arr.length;
    for(var i =0; i<len-1; i++){
       for(var j = i+1;j<len; j++){
          if (arr[i] + arr[j] === sum)
              console.log("true")
       }
    }
  
    return false;
  }

  hasPairWithSum([6,4,3,2,1,7], 9)

  
  // Better
  function hasPairWithSum2(arr, sum){
    const mySet = new Set();
    const len = arr.length;
    for (let i = 0; i < len; i++){
      if (mySet.has(arr[i])) {
        return true;
      }
      mySet.add(sum - arr[i]);
    }
    return false;
  }
  
//   hasPairWithSum2([6,4,3,2,1,7], 9)

// Better
function hasPairWithSum2(arr, sum){
    const obj = {};
    for (let i = 0; i < arr.length; i++){
      if (obj[arr[i]]) {
        console.log("gotcha")
      }
      obj[sum - arr[i]] = true;
    }
    console.log(obj);
  }
  
  hasPairWithSum2([6,4,3,2,1,7], 9)

// O(n)