// DROP THE CONSTANTS
// DIFFRENT INPUTS

function twoFunctions(items, items2) {
  items.forEach(item => {
    console.log(item);
  });

  items2.forEach(item => {
    console.log(item);
  });
}

/* we have two loops in here so the complexity is O(2n)
 * because of two loops
 * but remember always drop the constants to find the complexity
 * so we have O(n)
 */

/* Now according to the rule of different input like here we have item and item2
 * say item will have 1000 and item2 will have 10 inputs then
 * the complexity is said to be O(a+b)
 */
