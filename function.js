function say(word){
	console.log(word);
}

function execute(someFunction, value){
	someFunction(value);
}

execute(say, 'hello');

function executeDo(someFunction, value){
	someFunction(value);
}
executeDo(function(word){console.log(word);}, 'hi');