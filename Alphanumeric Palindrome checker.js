// Checks if the input string is a palindrome. Considers only alphanumeric characters and ignores case.
function palindrome(str) {
  
  str = str.toLowerCase();
  let isPalindrome = true;
  let checkArr = [];

  // Constructs an array filtered from the input string for alphanumeric characters 
  for(let i = 0; i < str.length; i++){
    if(str[i].match(/[^0-9a-zA-Z]/)){
      //console.log("Non-alphanumeric character: '"  + str[i] + "' removed.");
    } else {
      //console.log("Alphanumeric character: '"  + str[i] + "' pushed.");
      checkArr.push(str[i]);
    }
  }

  // Checks all characters are palindromic
  for(let i = 0; i < checkArr.length; i++){
    //console.log("Does " + checkArr[i] + " = " + checkArr[checkArr.length - 1 - i] + "?");
    if(checkArr[i] !== checkArr[checkArr.length - 1 - i]){
      isPalindrome = false;
    }
  }

  return isPalindrome;
}



console.log("Eye_ is: " + palindrome("Eye_")); // Returns true
console.log("Eyre_ is: " +palindrome("Eyre")); // Returns false