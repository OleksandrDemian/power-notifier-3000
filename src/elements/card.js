const utils = require("../utils");
const NotificationState = require("../enum/NotificationState");

const DEFAULT_CSS = {
	marginTop: "5px",
	marginBottom: "5px",
	marginLeft: "auto",
	marginRight: "auto",
	padding: "5px",
	border: "1px solid black",
	boxShadow: "2px 2px grey",
	width: "90%"
};

function createCard({ title, message, timeout, internalIndex, css = null, onStateUpdate }) {
	const div = document.createElement("div");
	const headerEle = document.createElement("h3");
	const buttonEle = document.createElement("button");
	const textEle = document.createElement("p");
	
	let timeoutId = null;
	
	div.id = "power-notifier-3000-element-" + internalIndex;
	
	utils.applyCss(div, DEFAULT_CSS);
	if(css != null){
		utils.applyCss(div, css);
	}
	
	if(timeout != null){
		timeoutId = setTimeout(function () {
			div.remove();
			onStateUpdate(NotificationState.TIME_OUT);
		}, timeout);
	}
	
	headerEle.innerText = title;
	div.appendChild(headerEle);
	
	buttonEle.onclick = function (e) {
		if(timeoutId != null){
			clearTimeout(timeoutId);
		}
		
		div.remove();
		onStateUpdate(NotificationState.CLOSED);
	};
	buttonEle.innerText = "Close";
	div.appendChild(buttonEle);
	
	textEle.innerText = message;
	div.appendChild(textEle);
	
	return div;
}

module.exports = createCard;