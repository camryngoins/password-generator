// 1. Prompt user for the password criteria.
//  - Length of password must be between 8-128 characters. 
// -  Ask user if they want to include lowercase, uppercase, numeric and/or special characters.
// 2. Validate the input. 
// 3. Generate the password based off what the user selected.
// 4. Display the generated password on the page. 

// Assignment code here

// arrays 
lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
numbers = [1234567890];
specialCharacters = ["!@#$%^&*()_|=+/?`~-|<>"];

var selectedConfirm;


// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// generate password
function generatePassword() {
  //ask for the character length
 var passwordLength =  window.prompt("Pick a number length between 8 and 128 characters.")
  //convert the string to a number 
 passwordLength = parseInt(passwordLength)
 console.log(passwordLength);
  // if user chooses to opt out of choosing a password length, give them an alert to let them know they have to choose.
if (!passwordLength) {
  window.alert("Please select a password length.") 
  return;
}
 //if password length is more than 128 characters or less than 128, than give error to try again. 
 else if (passwordLength >= 129 || passwordLength <= 7 ) {
   window.alert("Please pick a number between 8 and 128 characters!");
   return;
 };
// ask user if they would like to add lowercase letters or not 
 var passwordLowerCase = window.confirm("Would you like to include lowercase letters?");
 console.log(passwordLowerCase);
 if (passwordLowerCase) {
   window.alert("You have chosen to add lowercase letters.");
   selectedConfirm = (lowerLetters);
 } 
//  if user chooses not to add lowercase letters, confirm this for them
 else if (!passwordLowerCase) {
   window.alert("You have chosen not to add lowercase letters.");
 }

//  ask user if they would like to add any uppercase letters or not 
 var passwordUpperCase = window.confirm("Would you like to include uppercase letters?");
 console.log(passwordUpperCase);


 var passwordNumber = window.confirm("Would you like to include numbers?");
 console.log(passwordNumber);
 var passwordCharacter = window.confirm("Would you like to include any special characters?");
 console.log(passwordCharacter);




  return "Your generated password goes here!";
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
