// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    let array_=[];
    list_=[]
    if (size>array.length){
        array_.push(array);
    }
    else{
        for (let i of array){
            list_.push(i);
            if (list_.length==size){
                array_.push(list_);
                list_=[];
            }
        }
        if (list_.length!=0){
            array_.push(list_);
        }
    }
    return array_;
}
console.log(chunk([1, 2, 3, 4,5], 2))
module.exports = chunk;
