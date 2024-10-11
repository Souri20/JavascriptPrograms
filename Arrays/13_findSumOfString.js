let num = "123 456 789"

let num1 = num.split(" ")
sum = 0
for(let i=0; i<num1.length; i++){
    for(j=0; j<num1[i].length ; j++){
        sum += Number(num1[i][j])
    }
}

console.log(sum)