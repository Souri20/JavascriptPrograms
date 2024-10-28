let arr = [2,3,4,9,6,3]


function getIndex(arr){
    
    let sum = arr.reduce((acc,cur)=> acc+cur)
    let leftSum = 0
    
    for(let i=0; i<arr.length; i++){
        let rightSum = sum -leftSum - arr[i];
        
        if(rightSum == leftSum){
            return arr[i]
        }        
        leftSum +=arr[i]
    }
    
}

console.log(getIndex(arr))