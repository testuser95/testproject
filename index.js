function app(){
	this.name =  "new app";
}

app.prototype.write = function(options) {
	console.log(options.text);
};

app.prototype.read = function () {
	console.log(options.url);
};

app.prototype.hide = function () {
	console.log(options.hide);
}
