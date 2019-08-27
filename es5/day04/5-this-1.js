var p1 ={
    name:"terry",
    age:12,
    sayName:foo
}

var p2 ={
    name:"larry",
    age:13,
    sayName:foo
}

function foo(){
    console.log("hello my name is "+this.name);
}
foo();
p1.sayName();
p2.sayName();

p1.sayName.call({name:"cici"});
p2.sayName.apply({name:"lisa"});
