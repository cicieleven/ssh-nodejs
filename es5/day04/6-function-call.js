var add = function(a,b){
    console.log("当前函数的this:",this);
    return a+b;
}
var result = add(1,2);
console.log(result);
var result = add.call({a:1},1,45);
console.log(result);

var result = add.apply({b:1},[9,1]);
console.log(result);
