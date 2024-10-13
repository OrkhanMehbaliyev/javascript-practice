// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

function reverse(str) {
    let i=str.length-1;
    let new_str='';
    for(i; i>-1;i--){
        new_str=new_str+str[i];
    }
    return new_str;
}

module.exports = reverse;
