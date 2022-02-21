// 1. Prompt user for the password criteria.
//  - Length of password must be between 8-128 characters. 
// -  Ask user if they want to include lowercase, uppercase, numeric and/or special characters.
// 2. Validate the input. 
// 3. Generate the password based off what the user selected.
// 4. Display the generated password on the page. 

// Assignment code here

// Get references to the #generate element
var generateBtn = document.querySelector("#generate"); 

// generate password
function generatePassword() {
 var passwordLength = window.prompt("Pick a number length between 8 and 128 characters.");
 console.log(passwordLength);
 var passwordLowerCase = window.confirm("Would you like to inclide lowercase letters?");
 console.log(passwordLowerCase);
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
