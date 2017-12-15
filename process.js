process.on('exit', function(code){
	setTimeout(function(){
		console.log("该代码不会执行");
	}, 0);
	console.log('退出码：', code);
});

console.log("程序执行结束");

console.log(process.argv);

console.log(process.version);
console.log(process.versions);
console.log(process.execPath);
console.log(process.title);
console.log(process.platform);

process.stdout.write("hello world!" + "\n");
process.argv.forEach(function(val, index, array){
	console.log(index + ':' + val);
});

console.log('当前目录：' + process.cwd());
console.log('当前版本:' + process.version);
// '当前内存使用情况：' 
console.log( process.memoryUsage());