
// // Assignment code here
// var generatePassword = function () {
//   // Ask user how long they's like their password to be
//   var getLength = window.prompt("How many characters would you like your password to contain?")
//   if (!getLength || getLength < 8 || getLength > 128) {
//     window.alert("Please enter a number between 8 and 128.")
//     return generatePassword ();
//   }
//   if (getLength > 7 || getLength < 129) {
//     console.log(getLength);
//     var characterConfirm = window.confirm("Would you like your password to contain special characters?")
//     if (characterConfirm === true) {
//       console.log("yes special characters")
//       var yesSpecial = function (length) {
//         var result = '';
//         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!?+-()@#$%^&*:;,./'
//         var charactersLength = characters.length;
//         for ( var i=0; i<length; i++) {
//           result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         } return result;
//       }
//       console.log(yesSpecial(getLength));
//     } else if (characterConfirm === false) {
//       console.log("no special characters")
//       var noSpecial = function (length) {
//         var result = '';
//         var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890'
//         var charactersLength = characters.length;
//         for ( var i=0; i<length; i++) {
//           result += characters.charAt(Math.floor(Math.random() * charactersLength));
//         } return result;
//       }
//       console.log(noSpecial(getLength));
//     } 
    
//   }
// }


// Assignment code here

// If user doesn't want special characters, then this function will run
var noSpecial = function (length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890';
  var charactersLength = characters.length;
  for ( var i=0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  } return result;
}

// If user does want special characters, then this function will run
var yesSpecial = function (length) {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!?+-()@#$%^&*:;,./';
  var charactersLength = characters.length;
  for ( var i=0; i<length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  } return result;
}

var generatePassword = function () {
  // Ask user how long they's like their password to be
  var getLength = window.prompt("How many characters would you like your password to contain?");
  // Value can't be left blank, less than 8 or greater than 128 
  if (!getLength || getLength < 8 || getLength > 128) {
    window.alert("Please enter a number between 8 and 128.");
    return generatePassword ();
  }
  // A valid number between 7 & 129 has been entered, continue to next question
  if (getLength > 7 || getLength < 129) {
    console.log(getLength);
    // Ask user if they would like their password to contain special characters
    var characterConfirm = window.confirm("Would you like your password to contain special characters?");
    // If yes, then include special characters
    if (characterConfirm === true) {
      console.log("yes special characters");
      console.log(yesSpecial(getLength));
      return yesSpecial(getLength);
      
      // If no, then don't include special characters
    } else if (characterConfirm === false) {
      console.log("no special characters");
      console.log(noSpecial(getLength));
      return noSpecial(getLength);
    } 
  }
}


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);



