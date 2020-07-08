// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");
var passLgth; 
var pwd;
var lowerCase='abcdefghijklmnopqrstuvwxyz';
var upperCase='ABCDEFGHIJKLMNOPQRSTUVWXYZ';
var numericCase='0123456789';
var specialCase=' !"#$%&\'()*+,-./:;<=>?@[\\]^_`{|}~';
//building up available characters to use for our randomizer
var availChars;
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword(){
  var criteriaPrompt = window.prompt(
    "What would you like to do? Set LENGTH criteria, set CHARACTER TYPE criteria, or generate password. Type 1 for LENGTH or 2 for CHARACTER TYPE or 3 for GENERATE PASSWORD."
      ); 
      switch (criteriaPrompt) {
        case "1":
          chooseLength();
          generatePassword();
          break;
        case "2":
          chooseCharacter();
          generatePassword();
          break;
        case "3":
          pwd= createPassword();
          break;
        case "4":
          break;
        default:
          window.alert("You did not pick a valid option. Try again.");
          generatePassword();
          break; 
      }
      return pwd;
}

function chooseLength(){
  var tmp = window.prompt( "What is the desired length for password? (min=8 max=128)");
  if (tmp>=8 && tmp<=128) { 
    passLgth=tmp;
  }
  else {
    window.alert("You did not pick a valid option. Try again.");
   chooseLength();
  }
}

function chooseCharacter(){
  //set avail chars = blank character and we want to clear it out 
 availChars='';

 lowerPrompt();
 upperPrompt();
 specialPrompt();
 numericPrompt();
}

function lowerPrompt(){
  var tmp = window.prompt( "Would you like to require LOWER case characters? Y or N");
  if (tmp.toUpperCase()=='Y' || tmp.toUpperCase()=='N'){

    if (tmp.toUpperCase()=='Y' ){
      availChars+=lowerCase; 
    }
  }
  else {
    window.alert("You did not pick a valid option. Try again.");
   lowerPrompt();
  }
}

function upperPrompt(){
  var tmp = window.prompt( "Would you like to require UPPER case characters? Y or N");
  if (tmp.toUpperCase()=='Y' || tmp.toUpperCase()=='N'){

    if (tmp.toUpperCase()=='Y' ){
      availChars+=upperCase; 
  }
  }
  else {
    window.alert("You did not pick a valid option. Try again.");
   lowerPrompt();
  }
}

function specialPrompt(){
  var tmp = window.prompt( "Would you like to require SPECIAL case characters? Y or N");
  if (tmp.toUpperCase()=='Y' || tmp.toUpperCase()=='N'){

    if (tmp.toUpperCase()=='Y' ){
      availChars+=specialCase; 
  }
  }
  else {
    window.alert("You did not pick a valid option. Try again.");
   lowerPrompt();
  }
}

function numericPrompt(){
  var tmp = window.prompt( "Would you like to require NUMERIC case characters? Y or N");
  if (tmp.toUpperCase()=='Y' || tmp.toUpperCase()=='N'){

    if (tmp.toUpperCase()=='Y' ){
      availChars+=numericCase; 
  }
  }
  else {
    window.alert("You did not pick a valid option. Try again.");
   lowerPrompt();
  }
}

function createPassword(){
  var pass='';
 if (passLgth==''|| availChars==''){ 
   window.alert("You must choose password LENGTH & at least one CHARACTER type to generate a password.");
 generatePassword();

 } 
 // start @ 1 i=1 part 2 i is gonna increment until it is less than or equal to (x) third part keep implenting i until it is false 
 for (i = 1; i <= passLgth; i++) { 
   // multiplying the string but instead of string we will put in avail chars var it will take a random number 
  var char = Math.floor(Math.random() 
              * availChars.length + 1); 
    
  pass += availChars.charAt(char); 
} 

return pass; 

}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


