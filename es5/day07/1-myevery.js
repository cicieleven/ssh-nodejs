var arr = [1,2,3,4,5,7,9];

Array.prototype.myEvery = function(handler){
    var flag = true;
    for(var i =0; i<this.length; i++){
        var item = this[i];
        var result2 = handler(item,i,this);
        if(result2){
            continue;
        }else{
            break;
        }
    }
    return flag;
}
var result2 = arr.myEvery(function(item){
    return item % 2 !== 0;
})
console.log(result2);


var result = arr.every(function(item){
    return item % 2 !== 0;
})
console.log(result);
