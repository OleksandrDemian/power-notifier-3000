const utils = require("../utils");
const NotificationUpdate = require("../enum/NotificationUpdate");
const stylesRepo = require("../stylesRepo");

const DEFAULT_CSS = {
	marginTop: "5px",
	marginBottom: "5px",
	marginLeft: "auto",
	marginRight: "auto",
	width: "90%"
};

function createHeader(title, customCss = null) {
	const div = document.createElement("div");
	const h3 = document.createElement("h3");
	
	div.style.padding = "5px";
	div.classList.add("pwn3-header-box");
	
	h3.innerText = title;
	h3.classList.add("pwn3-header-text");
	div.appendChild(h3);
	
	if(customCss !== null && customCss.header){
		utils.applyCss(div, customCss.header);
	}
	
	return div;
}

function createContent(message, customCss = null) {
	const div = document.createElement("div");
	const textEle = document.createElement("p");
	
	div.classList.add("pwn3-content-box");
	textEle.classList.add("pwn3-content-text");
	
	div.style.padding = "5px";
	textEle.innerText = message;
	
	div.appendChild(textEle);
	
	if(customCss !== null && customCss.content){
		utils.applyCss(div, customCss.content);
	}
	
	return div;
}

function createCard({ title = null, message = null, timeout, internalIndex, applyStyle = "default", onStateUpdate = null }) {
	let timeoutId = null;
	const div = document.createElement("div");
	
	const customCss = applyStyle ? stylesRepo.get(applyStyle) : null;
	
	div.id = "pwn3-element-" + internalIndex;
	div.classList.add("pwn3-container");
	
	// close notification on click
	div.onclick = function (e) {
		e.preventDefault();
		e.stopPropagation();
		
		if(timeoutId != null){
			clearTimeout(timeoutId);
		}
		
		div.remove();
		if(onStateUpdate !== null){
			onStateUpdate(NotificationUpdate.CLOSED);
		}
	};
	
	if(timeout != null){
		timeoutId = setTimeout(function () {
			div.remove();
			if(onStateUpdate !== null){
				onStateUpdate(NotificationUpdate.TIME_OUT);
			}
		}, timeout);
	}
	
	// create header if there is a title
	if(title !== null){
		const headerEle = createHeader(title, customCss);
		div.appendChild(headerEle);
	}
	
	// create body if there is a message
	if(message !== null){
		const contentEle = createContent(message, customCss);
		div.appendChild(contentEle);
	}
	
	// apply css to the container
	utils.applyCss(div, DEFAULT_CSS);
	if(customCss !== null && customCss.container !== null){
		utils.applyCss(div, customCss.container);
	}
	
	return div;
}

module.exports = createCard;