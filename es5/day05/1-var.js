function foo(a,b){
    console.log(a,b);
    if(true){
        var c =1;
    }
    console.log(c);
}

foo(1,2);

console.log(foo);
console.log(foo());
