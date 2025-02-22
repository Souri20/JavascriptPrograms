Array.prototype.myMap = function(cb){
    let result= []
    
    for(let i=0; i<this.length ; i++){
        result.push(cb(this[i], i, this))
    }
    
    return result;
}

let arr = [1,2,3,4,5];

console.log(arr.myMap((item)=> item + 2));


Array.prototype.myReduce = function(cb, initialValue){
    
    var acc = initialValue ;
    for(let i=0; i<this.length ; i++){
        
        acc = acc ? cb(acc,this[i], i, this) : this[i]
    }
    
    return acc;
}

let res = arr.myReduce((acc, cur)=>{
    return acc+ cur.id
}, 5)

console.log(res)
