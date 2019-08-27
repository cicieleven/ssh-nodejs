var obj = {
    id:1,
    name:"terry",
    age:12,
    gender:"male"
}

for(var key in obj){
    console.log(key);
    var value = obj[key];
    console.log(key,value);
}
