var wordsList = [];
var commonList = [];
var commonFem = [];
var commonMale = [];
var commonLast = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
  var commonFile = "https://raw.githubusercontent.com/ashleyhau/dict/master/commonpwd.txt";
  var commonFemFile = "https://raw.githubusercontent.com/ashleyhau/dict/master/commonfemnames.txt"
  var commonMaleFile = "https://raw.githubusercontent.com/ashleyhau/dict/master/commonmalenames.txt"
  var commonLastFile = "https://raw.githubusercontent.com/ashleyhau/dict/master/commlastnames.txt"
  $.get(wordsFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    wordsList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
  $.get(commonFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    commonList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
  $.get(commonFemFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    commonList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
  $.get(commonMaleFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    commonList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
  $.get(commonLastFile, function(data) {
    document.getElementById("btnSubmit").disabled = true;
    commonList = data.split('\n');
    document.getElementById("btnSubmit").disabled = false;
  });
}

window.onload = init;

/* ADD YOUR CODE BELOW */

function checkPassword() {
  //get what the user input
  //in.html, the input box has id=pw
  var input = document.getElementById("pw").value;

  //loop through all the words in the word list
  //earlier, words list was set to contain a list of english words
  for (var index = 0; index < wordsList.length; index++) {
    //warn them if password matches a word from the list

    if (wordsList[index] == input) {
      alert("Password is too weak! It's an English word.");
      return; //stop this function as soon as I find this match
    }

    //warn them if that word from th elist, when I leetify it,
    //matches their input
    //ex:wordsList[index] is 'hello', leetify(wordsList[index]) is 'h3ll0'
    if (leetify(wordsList[index]) == input ) {
      alert("Weak password! It's too close to " + wordsList[index]);
      return;
    }
  }

  for (var index = 0; index < commonList.length; index++) {
    //warn them if password matches a word from the list

    if (commonList[index] == input) {
      alert("Password is too weak! It's too common!");
      return; //stop this function as soon as I find this match
    }
  }

  for (var index = 0; index < commonFem.length; index++) {
    //warn them if password matches a word from the list

    if (commonList[index] == input) {
      alert("Password is too weak! It's a name!");
      return; //stop this function as soon as I find this match
    }
  }

  for (var index = 0; index < commonMale.length; index++) {
    //warn them if password matches a word from the list

    if (commonList[index] == input) {
      alert("Password is too weak! It's a name!");
      return; //stop this function as soon as I find this match
    }
  }

  for (var index = 0; index < commonLast.length; index++) {
    //warn them if password matches a word from the list

    if (commonList[index] == input) {
      alert("Password is too weak! It's a name!");
      return; //stop this function as soon as I find this match
    }
  }

  //after the for loop finishes, if it wasn't an English word
  //tell them their pass word is safe
  alert("Your password is just fine :)")
}


//test function - change words vowels into numbers
function leetify(word) {
  //get the word in all lowercase letters
  var modifiedWord = word.toLowerCase();

  //replace all As with the number 4
  modifiedWord = modifiedWord.replace(/a/g, '4');

  //replace all Es with the number 3
  modifiedWord = modifiedWord.replace(/e/g, '3');

  //replace all Is with the number 1
  modifiedWord = modifiedWord.replace(/i/g, '1');

  //replace all Os with the number 0
  modifiedWord = modifiedWord.replace(/o/g, '0');

  //send it back
  //console.log(modifiedWord);
  return modifiedWord;
}
