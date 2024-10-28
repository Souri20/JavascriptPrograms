const mostFrequentChar = (str) =>{
    let obj = {}
    let mainChar = ""
    let max = 0
    for (item of str){
        if(!obj[item]){
            obj[item] = 1
        }else{
            obj[item] +=1
        }
        if(obj[item] > max){
            max = obj[item]
            mainChar = item
        }
    
    }
    return mainChar
}





console.log(mostFrequentChar("javascript"))