// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

function maxChar(str) {
    dictionary={};
    for (let i of str){
        if (dictionary[i]===undefined){
            dictionary[i]=0;
        }
        else 
        {dictionary[i]+=1;}
    }
    max_=0;
    key_='a';
    for (let key of Object.keys(dictionary)) {
        if (dictionary[key]>max_){
            max_=dictionary[key];
            key_=key;
        }
      }
    return key_;
}
console.log(maxChar("apple 1231111"))
module.exports = maxChar;
