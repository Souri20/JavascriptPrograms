let arr = [1,3,2,4]

function reverseArray(arr) {
        
        let reverse = []
        let num = arr.length-1 
        
        for (let i = num; i >= 0 ; i--){
            reverse.push(arr[i])
        }
        
        return reverse
        // your code here
    }
    
console.log(reverseArray(arr))

// 2nd method


function reverseArrays(){
    let left = 0;
      let right = arr.length-1
      
      while(left<right){
          [arr[left],arr[right]] = [arr[right], arr[left]]
          left ++
          right --
      }
      
      return arr
}