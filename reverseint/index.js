// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
    if (n===0){
        return 0;
    }
        let new_str=Math.abs(n).toString();
        let i= new_str.length-1;
        let str='';
        for(i; i>-1;i--){
            str +=new_str[i];
        }
        let num=parseInt(str);
        if (n<0){
            return -num;
        }
        return num;
    
}
console.log(reverseInt(-10))
module.exports = reverseInt;
