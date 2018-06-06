/* Pig-Latin functions
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

  } else if(LENGTH > 1 && isVowel(charArray[0], vowels) == true && isString) {

    charArray.push(WAY);
    word = charArray.join("");
  } else if(charArray[0] === "y" && isString) {
    charArray.splice((LENGTH), 0, "y");
    charArray.splice(0, 1);
    charArray.push(AY);
    word = charArray.join("");
  } else if(isVowel(charArray[0], vowels) == false && isString) {

    while(isVowel(charArray[0], vowels) == false && charArray[0] !=="q") {
      charArray.splice(LENGTH, 0, charArray[0]);
      charArray.splice(charArray[0], 1);
      if(charArray[0] == "q") {
        charArray.splice(LENGTH, 0, charArray[0]);
        charArray.splice(charArray[0], 1);
        if(charArray[0] == "u") {
          charArray.splice(LENGTH, 0, charArray[0]);
          charArray.splice(charArray[0], 1);
        }
      }
    }
    while(isVowel(charArray[0], vowels) == false && charArray[0] =="q" && charArray[1] =="u" ) {
        charArray.splice(LENGTH, 0, charArray[0]);
        charArray.splice(charArray[0], 1);
        if(charArray[0] == "u") {
          charArray.splice(LENGTH, 0, charArray[0]);
          charArray.splice(charArray[0], 1);
        }
      }
      charArray.push(AY);
      word = charArray.join("");
    }

  return word;
}


function showResult(word) {

  $("#result").text(word);
  $("#resultbox").slideDown();
}

function isVowel(letter, vowels) {

  for(i = 0; i < vowels.length; i++) {
    if(letter == vowels[i]) {

      return true;
    }
  } return false;
}
