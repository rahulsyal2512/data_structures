function funChallenge(input) {
  let a = 10; //O(1)
  a = 50 + 3; //O(1)

  for (let i = 0; i < input; i++) { //O(n)
    anotherFunction(); //O(n)
    let stranger = true; //O(n)
    a++; //O(n)
  }
  return a; //O(1)
}

funChallenge();

// Big O(3+ 4n)
// its just simple calculation ...we will simplify it to O(n)
