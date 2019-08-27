var arr = new Array(1,2,3,"terry",true);
console.log(arr.length,arr);

console.log("------for循环------");
for(var i = 0; i<arr.length; i++){
    var item = arr[i];
    console.log(item);
}

console.log("------while循环------");
var i = 0;
while(i<arr.length){
    var item = arr[i];
    i++;
    console.log(item);
}

console.log("-----do-while循环-------");
var i = 0;
do{
    var item = arr[i];
    i++;
    console.log(item);
}while(i<arr.length);


console.log("-----增强for循环-------");
for(var key in arr){
    console.log(arr[key]);
}
