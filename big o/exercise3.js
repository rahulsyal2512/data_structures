// DROP THE CONSTANTS (be it any, 10 or 100 or 100000)

function printItems(items) {
  console.log(items[0]);

  var middleIndex = Math.floor(items.length / 2);
  var index = 0;

  while (index < middleIndex) {
    console.log(items[index]);
    index++;
  }

  for (var i = 0; i < 100; i++) {
    console.log("hi");
  }
}

/* The complexity of the above program is O(1 + n/2 + 100) => O(n/2 + 101)
 * but O(101) is same as O(1) because here we do not consider the number of
 * operations but the time taken is always constant hence O(1)
 * hence complexity becomes O(n/2 +1)
 * now let's say we have 1 billion items (always take the worse cases)
 * then adding 1(say constant time) doesnt matter therefore we have O(n/2)
 * and dividing the billion by 2 doesnt matter because we only care about
 * the scalability therefore by dropping the constants
 * WE GET O(n)
 */
