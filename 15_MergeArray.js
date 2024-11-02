let nestedArray = [3, [1, 4, [2]], [6, [5, 9], 7]];


const functionFlatten = (arr) =>{

    let result = [];

    for(let i=0; i<arr.length ; i++){
        if(Array.isArray(arr[i])){
            result = result.concat(functionFlatten(arr[i]))
        }else{
            result.push(arr[i])
        }
    } 
    return result
}

console.log(functionFlatten(nestedArray))