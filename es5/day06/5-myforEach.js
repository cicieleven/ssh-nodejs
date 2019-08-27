Array.prototype.myforEach = function(callback){
    for(var i = 0;i<this.length; i++){
        callback(this[i],i,this);
    }
}


var arr = ["terry","larry","cici"];
var handler = function(item,index,arr){
    console.log(item,index,arr);
}
arr.myforEach(hangler);
