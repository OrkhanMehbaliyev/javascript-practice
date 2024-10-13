// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    let i=str.length-1;
    let new_str='';
    for(i; i>-1;i--){
        new_str=new_str+str[i];
    }
    if (str===new_str)
    {return true;}
    return false;
}
console.log(palindrome("abbsd"));
module.exports = palindrome;
