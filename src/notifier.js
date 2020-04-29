const elements = require("./elements");
const NotificationState = require("./enum/NotificationState");

let _init = false;
let _container = null;
let _counter = 0;

function init() {
	var container = elements.container();
	_container = document.body.appendChild(container);
	_init = true;
}

function notify({ title, message, timeout, css, onStateUpdate }){
	if(!_init){
		init();
	}
	
	const card = elements.card({
		title,
		message,
		timeout,
		css,
		onStateUpdate,
		internalIndex: _counter++
	});
	_container.appendChild(card);
	onStateUpdate(NotificationState.SHOWN);
}

module.exports = {
	notify,
	NotificationState
};