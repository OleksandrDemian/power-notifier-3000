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

function createHeader(title) {
	const div = document.createElement("div");
	const h3 = document.createElement("h3");
	
	div.style.borderBottom = "1px solid grey";
	
	h3.innerText = title;
	div.appendChild(h3);
	
	return div;
}

function createCard({ title, message, timeout, internalIndex, css = null, onStateUpdate }) {
	let timeoutId = null;
	const div = document.createElement("div");
	const headerEle = createHeader(title);
	const textEle = document.createElement("p");
	
	div.id = "power-notifier-3000-element-" + internalIndex;
	div.onclick = function (e) {
		e.preventDefault();
		e.stopPropagation();
		
		if(timeoutId != null){
			clearTimeout(timeoutId);
		}
		
		div.remove();
		onStateUpdate(NotificationState.CLOSED);
	};
	
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
	
	div.appendChild(headerEle);
	
	textEle.innerText = message;
	div.appendChild(textEle);
	
	return div;
}

module.exports = createCard;