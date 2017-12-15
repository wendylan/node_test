var buf = new Buffer('www.runoob.com');
var json = buf.toJSON(buf);
console.log(json);

var buffer1 = new Buffer('菜鸟教程');
var buffer2 = new Buffer('www.runoob.com');
var buffer3 = Buffer.concat([buffer1, buffer2]);
console.log('buffer3内容' + buffer3.toString());

var buffer4 = new Buffer('ABC');
var buffer5 = new Buffer('ABCD');
var results = buffer4.compare(buffer5);

if(results < 0){
	console.log(buffer4 + "在" + buffer5 + "之前");
}else if(results == 0){
	console.log(buffer4 + "在" + buffer5 + "相同");
}else{
	console.log(buffer4 + "在" + buffer5 + "之后");
}

var buffer6 = new Buffer('ABC');
var buffer7 = new Buffer(3);
buffer6.copy(buffer7);
console.log("buffer7 content:" + buffer7.toString());

var buffer8 = new Buffer('runoob');
var buffer9 = buffer8.slice(0,2);
console.log('buffer9 content:' + buffer9.toString());

var buffer10 = new Buffer('www.runoob.com');
console.log("buffer10 length:" + buffer10.length);