function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return "Not valid";
  }

  // Take empty array revArray
  const revArray = [];
  const totalLength = str.length - 1;

  // Looping from the end
  for (let i = totalLength; i >= 0; i--) {
    revArray.push(str[i]);
  }
  console.log(revArray);
  // Joining the array elements
  return revArray.join(""); //or use toString()
}

function reverse2(str) {
  console.log(
    str
      .split("")
      .reverse()
      .join("")
  );
}

function reverse3(str) {
  console.log([...str].reverse().join(""));
}

reverse2("Hi Rahul!");
