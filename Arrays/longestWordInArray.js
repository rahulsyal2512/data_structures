function longestWord(arr) {
  let words = arr.split(" ");
  console.log(words);
  var maxLengthWord = words[0].replace(/[!,@]/g, "");
  for (let i = 1; i < words.length; i++) {
    var word = words[i].replace(/[!,@]/g, "");
    if (maxLengthWord.length < word.length) {
      maxLengthWord = words[i];
    }
  }
  console.log(maxLengthWord);
}

function find_longest_word(str)
{
  var array1 = str.match(/\w[a-z]{0,}/gi);
  var result = array1[0];

  for(var x = 1 ; x < array1.length ; x++)
  {
    if(result.length < array1[x].length)
    {
    result = array1[x];
    } 
  }
  return result;
}
console.log(find_longest_word('Web Development Tutorial'));


longestWord("Ubi@ love@s me as a@ progsss!!!!!!");
