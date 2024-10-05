let arr1 = [11, 1, 13, 21, 3, 7]
let arr2 = [11, 3, 7, 1]


function subSetArray(arr1, arr2){

    for(item of arr2){
        if(!arr1.includes(item)){
            return false
        }
    }
    return true
}

console.log(subSetArray(arr1, arr2))

