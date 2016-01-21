function app(){
	this.name =  "new app";
}

app.prototype.write = function(options) {
	console.log(options.text);
};