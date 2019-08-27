var arr = [35,5,25,15,45];
console.log(arr);
arr.sort(function(a,b){
    if(a<b){
        return 1;
    }else{
        return -1;
    }
});
console.log(arr);
