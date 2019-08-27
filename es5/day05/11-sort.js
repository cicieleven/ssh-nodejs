var arr = [4,76,45,64,25];
console.log(arr);
arr.sort(function(a,b){
    if(a>b){
        return 1;
    }else{
        return -1;
    }
});
console.log(arr);
