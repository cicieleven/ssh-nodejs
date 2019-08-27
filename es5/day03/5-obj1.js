var obj1 = new Object();
obj1.name = "terry";
obj1.age = 12;
var str = obj1.toString(obj1);
console.log(str);
console.log(obj1);
console.log("constructor:",obj1.constructor)
console.log('name:',obj1.hasOwnProperty('name'));
console.log("constructor:",obj1.hasOwnProperty('constructor'));
console.log("--------------");

var obj2 = new Object();
obj2.name = "larry";
obj2.age = 14;
console.log(obj2);
