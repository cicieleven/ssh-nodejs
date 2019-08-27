Array.prototype.myPush = function(){
    var len = this.length;
    for(var key in arguments){
        var item = arguments[key];
        this[len+(+key)] = item;
    }
    return this.length;
}

var arr = [1,2];
var result = arr.myPush("terry","larry","tom")
console.log(result,arr);

var arr2 = [1,2];
var result2 = arr2.push("terry","larry","cici");
console.log(result2,arr);
