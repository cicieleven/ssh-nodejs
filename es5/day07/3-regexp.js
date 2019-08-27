var str = "briup telephone is 0512-5511000, baidu telephone is 1234-7654321";

var pattern = new RegExp("[0-9]{4}-[0-9]{7}","g");

var r = pattern.exec(str);
console.log(r);

r = pattern.exec(str);
console.log(r);
