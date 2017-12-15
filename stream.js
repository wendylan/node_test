var fs = require('fs');
var data= '';
var readerStream = fs.createReadStream('input.txt');
readerStream.setEncoding('UTF8');
readerStream.on('data', function(chunk){
	data += chunk;
});
readerStream.on('end', function(chunk){
	console.log(data);
});
readerStream.on('error', function(chunk){
	console.log(err.stack);
});
console.log('程序执行完毕');