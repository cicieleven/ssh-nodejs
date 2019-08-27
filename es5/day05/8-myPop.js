Array.prototype.myPop = function(){
    var result = this[this.length-1];
    this.length--;
    return result;
}


var arr = [1,2,"terry","larry","cici"];
var result = arr.myPop();
console.log(result,arr);

var arr2 = [1,2,"terry","larry","cici"];
var result2 = arr2.pop();
console.log(result2,arr2);
