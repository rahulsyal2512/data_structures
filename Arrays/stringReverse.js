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
  console.log(revArray)
  // Joining the array elements
  return revArray.join(""); //or use toString()
}

reverse("Hi Rahul!");
// ABCD
