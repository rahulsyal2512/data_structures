const strings= ['a', 'b', 'c', 'd'];
const numbers = [1,2,3,4,5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.


//push
strings.push('e');  //O(1)

//pop
strings.pop(); // 0(1)

//unshift
strings.unshift('x') // 0(n) because it had to traverse each element to shift one index further

//splice
strings.splice(2, 0, 'alien'); //0(1)

console.log(strings)