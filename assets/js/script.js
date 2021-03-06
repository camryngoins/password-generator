// 1. Prompt user for the password criteria.
//  - Length of password must be between 8-128 characters. 
// -  Ask user if they want to include lowercase, uppercase, numeric and/or special characters.
// 2. Validate the input. 
// 3. Generate the password based off what the user selected.
// 4. Display the generated password on the page. 

// arrays 
lowerLetters = ["abcdefghijklmnopqrstuvwxyz"];
upperLetters = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
numbers = [1234567890];
specialCharacters = ["!@#$%^&*()_+=/?"];

// variables
var passwordLowerCase;
var passwordUpperCase;
var passwordNumbers;
var passwordCharacters;
var passwordLength;

var selectedOptions;

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// generate password
function generatePassword() {
  //ask for the character length
 passwordLength =  window.prompt("Pick a number length between 8 and 128 characters.")
  //convert the string to a number 
 passwordLength = parseInt(passwordLength)
  // if user chooses to opt out of choosing a password length, give them an alert to let them know they have to choose.
if (!passwordLength) {
  window.alert("Please select a password length.") 
  return;
}
 //if password length is more than 128 characters or less than 128, than give error to try again. 
 else if (passwordLength >= 129 || passwordLength <= 7 ) {
   window.alert("Please pick a number between 8 and 128 characters!");
   return;

 } else {
  passwordLowerCase = window.confirm("Would you like to add lowercase letters?");
  passwordUpperCase = window.confirm("Would you like to add uppercase letters?");
  passwordNumbers = window.confirm("Would you like to add numbers?")
  passwordCharacters = window.confirm("Would you like to add special characters?");
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
  selectedOptions = upperLetters + numbers + specialCharacters;
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

var myPassword = [];

for (var i = 0; i < passwordLength; i++) {
  var outcome = selectedOptions[Math.floor(Math.random() * selectedOptions.length)];
  myPassword.push(outcome);
} 
var generatedPwd = myPassword.join("");
return generatedPwd;
};

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

