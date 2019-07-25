// Always watchout for the worst case scenerios while checking complexity

function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input; i++) {
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge();

// Big O(3+ 3n)
// its just simple calculation ...we will simplify it to O(n) as folows------->

// check the worse case scenerio, eg, if we found the item at the last position of an array[10]
// in that case complexity is O(10) similarly if we found it in first or fifth position then the
// complexity is O(1) or O(5),
// So IN GENERAL WE TAKE THE COMPLEXITY AS O(n).
