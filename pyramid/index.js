// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

function pyramid(n) {
    let num=1;
    space_=(n*2-1)/2;
    for (let i=0; i<n;i++){
        let str = " ".repeat(space_)+"#".repeat(num)+ " ".repeat(space_) ;
        console.log(str);
        num+=2;
        space_-=1;
    }
}
pyramid(3);
module.exports = pyramid;
