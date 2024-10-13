// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

function steps(n) {
    let num=1;
    space_=n-1;
    for (let i=0; i<n;i++){
        let str = "#".repeat(num)+ " ".repeat(space_) ;
        console.log(str);
        num+=1;
        space_-=1;
    }
}

module.exports = steps;
