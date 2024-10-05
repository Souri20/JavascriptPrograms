let arr = [1,2,3,4,5] 
let o_p = [5,1,2,3,4]
function rotate(arr) {

    const newArr = [arr[arr.length - 1]];  // Start with the last element
    for (let i = 0; i < arr.length - 1; i++) {
        newArr.push(arr[i]);               // Push each element except the last one
    }

    return newArr;
        
        // code here
    }


// method 2nd

function Ro(arr){
    let lastItem = arr.pop()
    arr.unshift(lastItem)
    return arr
}   