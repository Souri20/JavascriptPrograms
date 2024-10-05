// Given an array arr. Find the majority element in the array. If no majority exists, return -1. A majority element in an array is an element that appears strictly more than arr.size() / 2 times in the array.

let arr = [2,3,3,3,3,3,5,6,7,3,3,9,9]


function counGreaterThanHalfOfArrayLen(arr){

    let obj = {};
    let halfLen = Math.floor((arr.length)/2)

    for(item of arr){
        if(!obj[item]){
            obj[item] = 1
        }{
            obj[item] +=1
        }

        if(obj[item] > halfLen){
            return item
        }
    }
}

console.log(counGreaterThanHalfOfArrayLen(arr))