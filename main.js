console.log(__filename);

console.log(__dirname);

// console.log(module);

// 全局对象
// console.log(global);

function printHello(){
	console.log("hello, world!");
}

// 定时器
// var t = setTimeout(printHello, 2000);
// 清除定时器
// clearTimeout(t);

var test = setInterval(printHello, 2000);
clearInterval(test);

console.log('hello world');
console.warn('test warn');
console.log('byvoid%diovyd');
console.log('byvoid%diovyd', 1995);
// console.trace();

console.info("程序开始执行：");

var counter = 10;
console.log("计数: %d", counter);

console.time("获取数据");
//
// 执行一些代码
// 
console.timeEnd('获取数据');

console.info("程序执行完毕。")