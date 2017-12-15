// 第一种写法匿名函数
var http = require('http');
http.createServer(function(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("hello world");
	response.end();
}).listen(8888);

// 第二种写法
var http = require('http');
function onRequest(request, response){
	response.writeHead(200, {"Content-Type": "text/plain"});
	response.write("helfjkdlsjlkdasf,world");
	response.end();
}

http.createServer(onRequest).listen(8080);