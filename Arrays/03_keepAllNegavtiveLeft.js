arr = [-5, -2, 4,2,-2,-2, 3, 1]

function KeepLeftNegative(arr){
    
    let left = 0;
    let right = arr.length-1
    
    while(left<=right){
        if(arr[left] < 0 ){
        left++
    }else if(arr[right]>0){
        right--
    }else{
        let temp = arr[left]
        arr[left] = arr[right]
        arr[right] = temp
        left++
        right--
        
    }
}
    return arr
 
    
}

console.log(KeepLeftNegative(arr))


// 2nd
function moveNegativesToFront(arr) {
    let j = 0; // boundary for negatives
    
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            // Swap arr[i] with arr[j]
            if (i !== j) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            j++;
        }
    }
}