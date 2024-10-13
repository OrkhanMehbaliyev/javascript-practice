// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
    
    stringA = stringA.toLowerCase();
    stringB = stringB.toLowerCase();
    let indexA = [];
    // Loop through the string
    for (let i = 0; i < stringA.length; i++) {
        if (/[a-zA-Z]/.test(stringA[i])) {
            indexA.push(stringA[i]); 
        }
    }
    let indexB = [];
    for (let i = 0; i < stringB.length; i++) {
        if (/[a-zA-Z]/.test(stringB[i])) {
            indexB.push(stringB[i]); 
        }
    }
    indexA.sort();
    indexB.sort();
    if (indexA.length !=indexB.length) {
        return false;
    }
    else{
        for (let i = 0; i < indexA.length; i++) 
        {
            if (indexA[i]!==indexB[i]) {
            return false; 
            }
        }
    }
    return true;
    
}
module.exports = anagrams;
