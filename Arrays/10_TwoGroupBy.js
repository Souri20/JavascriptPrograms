    var people = [
        {
            name: 'Pete',
            gender: 'Male',
            age: 22

        },
        {
            name: 'Samantha',
            gender: 'Female',
            age: 20

        },
        {
            name: 'Frank',
            gender: 'Male',
            age: 22

        },
        {
            name: 'Gary',
            gender: 'Male',
            age: 21

        },
        {
            name: 'Maria',
            gender: 'Female',
            age: 20

        },
        {
            name: 'Hannah',
            gender: 'Female',
            age: 21

        },
        {
            name: 'Pete',
            gender: 'Male',
            age: 20

        }
    ];

var obj={}
people.forEach((item)=>{
    
    if(!obj[item.gender]){
        obj[item.gender] = {}
    }
    if(!obj[item.gender][item.age]){
        obj[item.gender][item.age] = []
    }
    obj[item.gender][item.age].push(item)
    
})

console.log(obj)