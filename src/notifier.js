const elements = require("./elements");

let _init = false;
let _container = null;
let _counter = 0;

function init() {
	var container = elements.container();
	_container = document.body.appendChild(container);
	_init = true;
}

function notify({ title, message, timeout, css }){
	if(!_init){
		init();
	}
	
	const card = elements.card({
		title,
		message,
		timeout,
		css,
		internalIndex: _counter++
	});
	_container.appendChild(card);
}

module.exports = {
	init,
	notify
};