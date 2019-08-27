var students = [
    {
        id:2,
        name:"first",
        age:12,
        grade:86
    },
    {
        id:1,
        name:"second",
        age:11,
        grade:90
    },
    {
        id:3,
        name:"third",
        age:13,
        grade:79
    }
]

students.sort(function(a,b){
    if(a.id>b.id){
        return 1;
    }else{
        return -1;
    }
})
console.log(students);

console.log("----------------");

students.sort(function(a,b){
    if(a.age>b.age){
        return 1;
    }else{
        return -1;
    }
})
console.log(students);

console.log("----------------");

students.sort(function(a,b){
    if(a.grade>b.grade){
        return 1;
    }else{
        return -1;
    }
})
console.log(students);

