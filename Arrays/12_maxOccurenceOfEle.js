let arr = [2,3,4,4,4,5,7,8,8,8,8]


const MaxOccurence = (arr) =>{
    
    let obj = {}
    let maxKey = 0
    let maxValue = 0
    
    arr.forEach((item)=>{
        if(!obj[item]){
            obj[item] = 1;
        }else{
            obj[item] +=1
        }
    })
    
    for(item in obj){
        if(obj[item] > maxValue){
            maxKey = item;
            maxValue = obj[item]
        }
    }
    
    return {[maxKey] : maxValue}
    
}

console.log(MaxOccurence(arr))