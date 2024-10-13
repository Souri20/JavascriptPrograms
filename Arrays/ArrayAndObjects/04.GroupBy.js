const users = [
    { id: 1, name: 'John' },
    { id: 2, name: 'Jane' }
  ];
  
  
  
  let obj = {}
  
  users.forEach((item)=>{
      if(!obj[item.id]){
          obj[item.id] = []
      }
      obj[item.id].push(item)
  })
  
  console.log(obj)