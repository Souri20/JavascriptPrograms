function memoisedMe () {
    let obj ={}
    
    return function (...arg){
        key1 = String(arg[0])
        key2 = String(arg[1])
        key3 = key1+key2
        console.log(key3)
        
        if(obj[key3]){
            return obj[key3]
         
        }else{
            result = Number(key1) + Number(key2)
            obj[key3] = result
            return result
        }
    }
}



let insta = memoisedMe()

console.log(insta(4,5))
console.log(insta(4,5))