let user = {name : 'Sourabh', age:25, address:{city:'Kolhapur',pin:235467}}

function makeDeep(obj) {
    if(typeof (obj) !== 'object' || obj === null){
        return obj
    }
    
    let copiedVal = Array.isArray(obj) ? [] : {};
    
    let keys = Object.keys(obj)
    
    for(let i=0; i<keys.length ; i++){
        copiedVal[keys[i]] = makeDeep(obj[keys[i]]);
    }
    return copiedVal;
}

let user2 = makeDeep(user)


user2.address.city = "Hubli"

console.log(user)
console.log(user2)