var util = require('util');
console.log(util.isArray([]));
console.log(util.isArray(new Array));
console.log(util.isArray({}));

// util.isArray(object)
// 如果给定的参数 "object" 是一个数组返回true，否则返回false。

console.log('isRegExp部分：');
// var util = require('util');
console.log(util.isRegExp(/some regexp/));
  // true
console.log(util.isRegExp(new RegExp('another regexp')));
  // true
console.log(util.isRegExp({}));
  // false

  // util.isRegExp(object)
// 如果给定的参数 "object" 是一个正则表达式返回true，否则返回false。

console.log('isDate部分：');
console.log(util.isDate(new Date()));  // true
console.log(util.isDate(Date())); // false (without 'new' returns a String)
console.log(util.isDate({}));  //false

console.log('isError部分:');
console.log(util.isError(new Error()));
console.log(util.isError(new TypeError()));
console.log(util.isError({ name : 'Error', message : 'an error occurred'}));
