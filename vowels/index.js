// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    vowel='aeuoiAEOUI';
    let count_=0;
    for(let char of str)
    {
        if(vowel.includes(char)){
            count_+=1;
        }
    }
    return count_;
}
console.log(vowels('abcdefghijklmnopqrstuvwxyz'));
module.exports = vowels;
