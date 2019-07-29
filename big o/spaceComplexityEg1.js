function booo(n) {
  for (let i = 0; i < n.length; i++) {
    console.log("Booooo!");
  }
}

booo([1, 2, 3, 4, 5]);

/* When we talk about space complexity
 * we are talking about "the additional space"
 * so we dont include space taken by inputs
 * so we dont care how big the input is
 * coz we only have control of what happens inside the function
 * and the important thing is
 * within the function if we are adding any space
 * we are only creating i as a variable
 * so space complexity here is O(1)
 */
