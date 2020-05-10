const elements = require("./elements");
const NotificationUpdate = require("./enum/NotificationUpdate");
const stylesRepo = require("./stylesRepo");

let _init = false;
let _container = null;
let _counter = 0;

function init() {
	var container = elements.container();
	_container = document.body.appendChild(container);
	_init = true;
}

/**
 *
 * @param title
 * @param message
 * @param timeout
 * @param applyStyle
 * @param onStateUpdate
 * @param buttons
 * @return {Notification}
 */
function notify({ title, message, timeout, applyStyle, onStateUpdate = null, buttons, closeOnClick }){
	if(!_init){
		init();
	}
	
	const notification = elements.card({
		title,
		message,
		timeout,
		applyStyle,
		onStateUpdate,
		buttons,
		closeOnClick,
		internalIndex: _counter++
	});
	_container.appendChild(notification.element);
	notification.updateState(NotificationUpdate.SHOWN);
	
	return notification;
}

/**
 * @param props
 * @return {Notification}
 */
function confirm(props) {
	props.buttons = [
		{ text: "Accept", action: NotificationUpdate.ACCEPTED },
		{ text: "Decline", action: NotificationUpdate.DECLINED }
	];
	
	props.closeOnClick = false;
	
	return notify(props);
}

function createStyle(name, style){
	stylesRepo.add(name, style);
}

module.exports = {
	notify,
	NotificationUpdate,
	createStyle,
	confirm
};