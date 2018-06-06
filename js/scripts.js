/* Pig-Latin functions

The program does nothing to non-alphabetical characters, since they do not contain consonants or vowels.
Example Input: 3
Example Output: 3
The program adds "ay" to single-letter words beginning with a vowel.
Example Input: i
Example Output: iay
The program adds "way" to words beginning with a vowel.
Example Input: input
Example Output: inputway
The program adds "ay" to words beginning with one or more consonants.
Example Input: Translator
Example Output: anslatorTray
The program will move the "y" in any word that starts with a "y" to the end and add "ay"
Example Input: Yellow
Example Output: ellowyay
The program moves all of the first consecutive consonents to the end when words begin with one or more consonants.
Example Input: Translator
Example Output: anslatorTray
Words beginning with "qu", the program moves both the "q" and the "u"
Example Input: Quiet
Example Output: ietquay
The program will move the first consonant, "q", and add "ay" to the end of any word with "qu" that starts with a consonant.
Example Input: Squel
Example Output: uealsqay
*/

$(document).ready(function() {

  $("form#pigForm").submit(function(event) {
  event.preventDefault();
  var word = $("#pigLatin").val();
  var pigLatinWord = translate(word);

  showResult(pigLatinWord);
  });

});

function translate(word) {
  var vowels = ["a", "e", "i", "o", "u"];
  var charArray = word.split("");
  const AY = "ay";
  const WAY = "way";
  const LENGTH = charArray.length;
  var isString = isNaN(word);

  // Loop over word array to check for vowels
  // Check for single character word
  if(LENGTH === 1 && isString) {

    for(i = 0; i < vowels.length; i++) {
      if(charArray[0] == vowels[i]) {
        charArray.push(AY);
      }
    }
    word = charArray.join("");

  } else if(LENGTH > 1 && isVowel(charArray[0], vowels) == true) {

    charArray.push(WAY);
    word = charArray.join("");
  } else if(charArray[0] === "y" && isString) {
    charArray.splice((LENGTH), 0, "y");
    charArray.splice(0, 1);
    charArray.push(AY);
    word = charArray.join("");
  } else if(isVowel(charArray[0], vowels) == false) {

    while(isVowel(charArray[0], vowels) == false) {
      charArray.splice(LENGTH, 0, charArray[0]);
      charArray.splice(charArray[0], 1);
    }

    charArray.push(AY);
    word = charArray.join("");

  }


  return word;
}

//      for(i = 0; i < LENGTH; i++) {
//
//       if(charArray[0] !== vowels[j] && isString) {
//         charArray.splice(LENGTH, 0, charArray[0]);
//         charArray.splice(charArray[0], 1);
//         if(i === (LENGTH - 1)) {
//           charArray.push(AY);
//           word = charArray.join("");
//         }
//       }
//     }
//   }
//
//   return word;
// }

function showResult(word) {

  $("#result").text(word);
}

function isVowel(letter, vowels) {

  for(i = 0; i < vowels.length; i++) {
    if(letter == vowels[i]) {

      return true;
    }
  } return false;
}
