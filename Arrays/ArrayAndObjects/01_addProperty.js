const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 35 },
    { id: 3, name: 'Mike', age: 32 }
  ];
  
  
  // users.forEach((item)=>{
  //     if(item.age == 25){
  //         item.active = true
  //     }else{
  //         item.active = false
  //     }
  // })
  
  
  let result = users.map((item)=>{
      if(item.age == 25){
          return {...item, actuive: true}
      }else{
          return item
      }
  })
  
  console.log(result)