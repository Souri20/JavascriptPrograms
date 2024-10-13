const users = [
    { id: 1, name: 'John', email: 'john@example.com' },
    { id: 2, name: 'Jane', email: 'jane@example.com' },
    { id: 3, name: 'Mike', email: 'john@example.com' }
  ];
  
  
  let arr = []
  let visited = []
  
  users.forEach((item) => {
      if(!visited.includes(item.email)){
          visited.push(item.email)
          arr.push(item)
      }
      
  })
  
  console.log(arr)