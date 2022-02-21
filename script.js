// 1. Prompt user for the password criteria.
//  - Length of password must be between 8-128 characters. 
// -  Ask user if they want to include lowercase, uppercase, numeric and/or special characters.
// 2. Validate the input. 
// 3. Generate the password based off what the user selected.
// 4. Display the generated password on the page. 

// Assignment code here

// arrays 
lowerLetters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
upperLetters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
specialCharacters = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "_", "|", "=", "+", "/", "?", "~", "-", "<", ">"];

var selectedOptions;

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
 }
 else {
   var passwordLowerCase = window.confirm("Would you like to add lowercase letters?");
   var passwordUpperCase = window.confirm("Would you like to add uppercase letters?");
   var passwordNumbers = window.confirm("Would you like to add numbers?")
   var passwordCharacters = window.confirm("Would you like to add special characters?");
 };

//  if they all equal false, give alert that use must pick an option and to try agaun
if (!passwordLowerCase && !passwordUpperCase && !passwordNumbers && !passwordCharacters) {
  selectedOptions = window.alert("You must pick an option. Please try again.");
}
// if all are true, proceed
else if (passwordLowerCase && passwordUpperCase && passwordNumbers && passwordCharacters) {
  selectedOptions = lowerLetters + upperLetters + numbers + specialCharacters;
}
// if all are true except lowercase letters 
else if (passwordUpperCase && passwordNumbers && passwordCharacters) {
  selectedOptions = upperLetters + numbers + specialCharacters
}
// if all are true except uppercase letters 
else if (passwordLowerCase && passwordNumbers && passwordCharacters) {
  selectedOptions = lowerLetters + numbers + specialCharacters;
}
// if all are true except numbers
else if (passwordLowerCase && passwordUpperCase && passwordCharacters) {
  selectedOptions = lowerLetters + upperLetters + specialCharacters;
}
// if all are true except special characters
else if (passwordLowerCase && passwordUpperCase && passwordNumbers) {
  selectedOptions = lowerLetters + upperLetters + numbers;
}

}



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
