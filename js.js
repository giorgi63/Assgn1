
// Assgn 1


//I created it by connecting the capitalized words together 
//with the join method and then log it to the console with the console.log function.

function SentenceC(sentence) {
    var words = sentence.split(" ");
    var capital = words.map((word) => {
      var firstLetter = word.charAt(0).toUpperCase();
      var restOfWord = word.slice(1).toLowerCase();
      var Cword = firstLetter + restOfWord;
      return Cword;
    });
    var capitalizedSentence = capital.join(" ");
    console.log(capitalizedSentence);
  }
  
  SentenceC("my name is Giorgi"); 




 // Assgn 2

// To hold the distinct elements from the input array,
// I created an empty Arr and initialize it. Then, I looped through the elements in the input array to saw 
// if there are duplicates in the Arr.  I used the push technique to add it to the Arr.

function removeDuplicates(arr) {
  var uniqueArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (!uniqueArr.includes(arr[i])) {
      uniqueArr.push(arr[i]);
    }
  }
  console.log(uniqueArr);
}
var arr = [2, 9, 5, 6, 2, 9, 4, 2, 7];
removeDuplicates(arr); 