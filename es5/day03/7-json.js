var obj = {
    name:"terry",
    age:12,
    gender:"male"
};
console.log('对象:');
console.log(obj);

var json = JSON.stringify(obj);
console.log('json字符串:');
console.log(json);

var str = '{"name":"tom","age":12,"gender":"female"}';
console.log('json字符串:');
console.log(str);

var student = JSON.parse(str);

console.log('对象:');
console.log(student);
