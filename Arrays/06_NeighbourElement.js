// check if both neighbour element are smaller than current value;

let arr = [5,10,12,8,9,9]
let o_p = 12;

function bigNeighbour(arr){

    let last = arr.length
    if(arr.length ===1){
        return arr[0]
    }

    if(arr[0] >arr[1]){
        return arr[0]
    }

    if(arr[last-1]> arr[last-2]){
        return arr[last-1]
    }

    for(let i=1; i<last-1 ; i++){
        if(arr[i]> arr[i-1] && arr[i]> arr[i+1]){
            return arr[i]
        }
    }

    return -1

}


console.log(bigNeighbour(arr))