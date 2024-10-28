let arr1 = [{ id: 1, address: { city: 'New York' } }, { id: 2, address: { city: 'Los Angeles' } }]



let result = arr1.map((item) =>{
    if(item.id == 1){
        return {...item , address : {...item.address,city : "Kolhapur"}}
    }else{
        return item
    }
})

console.log(result)