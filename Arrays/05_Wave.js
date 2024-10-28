let arr= [1,2,3,4,5,6,7,8,9,10];
let o_p =[2,1,4,3,6,5,8,6,10,9]

// sort array and then use below logic.
function wave(arr){

    for(let i=0; i<arr.length; i+=2){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
    }
    return arr;
}

console.log(wave(arr))