const elements = require("./elements");
const NotificationState = require("./enum/NotificationState");
const stylesRepo = require("./stylesRepo");

let _init = false;
let _container = null;
let _counter = 0;

function init() {
	var container = elements.container();
	_container = document.body.appendChild(container);
	_init = true;
}

function notify({ title, message, timeout, applyStyle, onStateUpdate }){
	if(!_init){
		init();
	}
	
	const card = elements.card({
		title,
		message,
		timeout,
		applyStyle,
		onStateUpdate,
		internalIndex: _counter++
	});
	_container.appendChild(card);
	onStateUpdate(NotificationState.SHOWN);
}

function createStyle(name, style){
	stylesRepo.add(name, style);
}

module.exports = {
	notify,
	NotificationState,
	createStyle
};