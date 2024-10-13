// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

function capitalize(str) {
    list= str.split(' ');
    for (let i = 0; i < list.length; i++) {
        str_=list[i].toLowerCase();
        result=str_[0].toUpperCase()+ str_.slice(1);
        list[i]=result;
    }
    str= list.join(" ");
    return str;
}
module.exports = capitalize;
