var obj1 = {
    address : "Bamglore",
    getAddress: function(){
    console.log(this.address); 
  }
}
   
var obj2 = {name:"Aman"};

obj2.__proto__ = obj1
obj2.prototype = obj1



obj2.getAddress()