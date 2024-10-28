let arr = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

let res = { 1: 'Alice', 2: 'Bob' }


let obj = {}

arr.forEach((item) =>{
  obj[item.id] = item.name
})

console.log(obj)