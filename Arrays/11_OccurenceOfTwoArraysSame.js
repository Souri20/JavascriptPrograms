let arr1 = ['a','b','d','d','e'];
let arr2 = ['a','d','d','b','e'];


function checkEqualArrays(arr1, arr2){
    let Object1 = {}
    let Object2 = {}
    
    if(arr1.length !== arr2.length){
        return false
    }
    
    for(let i=0; i<arr1.length; i++){
        if(!Object1[arr1[i]]){
            Object1[arr1[i]] = 1
        }else{
            Object1[arr1[i]] += 1
        }if(!Object2[arr2[i]]){
            Object2[arr2[i]] = 1
        }else{
            Object2[arr2[i]] += 1
        }
    }
    
    for(item in Object1){
        if(!Object2.hasOwnProperty(item) && Object2[item] !== Object1[item]){
            return false
        }
    }
    return true
}


console.log(checkEqualArrays(arr1, arr2))