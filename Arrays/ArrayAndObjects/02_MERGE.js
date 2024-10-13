const users = [
    { id: 1, name: 'John', age: 25 },
    { id: 2, name: 'Jane', age: 35 },
    { id: 3, name: 'Mike', age: 32 }
  ];
  
  const addresses = [
    { id: 1, address: '123 Main St' },
    { id: 2, address: '456 Oak Ave' },
    { id: 3, address: '789 Pine Rd' }
  ];
  
  
  let result = users.map((item) => {
      
      let obj = addresses.find((ele)=> ele.id == item.id)
      
      let updated = {...obj, ...item}
      
      return updated
      
  });
  
console.log(result)