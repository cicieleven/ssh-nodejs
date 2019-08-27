function add(a,b){
    console.log(arguments);
    var result = 0;
    for(var key in arguments){
        var val = arguments[key];
        result += val;
    }
    return result;
}
var result = add(1,2,3,4,5);
console.log(result);
