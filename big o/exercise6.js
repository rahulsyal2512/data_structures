// DROP NON DOMINANTS

function printNumbers(numbers) {
  console.log("these are the numbers:");
  numbers.forEach(function(number) {
    console.log(number);
  });

  console.log("and these are their sums:");
  numbers.forEach(function(firstNumber) {
    numbers.forEach(function(secondNumber) {
      console.log(firstNumber + secondNumber);
    });
  });
}

printAllNumbersThenAllPairSums([1, 2, 3, 4, 5]);

/* Complexity here is O(n + n^2)
 * But according to fourth rule we should always remove non dominants
 * as in here we have n as non dominant to n^2
 * because as the size of n increases the n^2 is much more than n
 * HENCE THE COMPLEXITY OF THE ABOVE FUNC IS O(n^2)
 */
