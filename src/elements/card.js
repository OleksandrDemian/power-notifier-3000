const utils = require("../utils");
const NotificationUpdate = require("../enum/NotificationUpdate");
const Notification = require("../Notification");
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

function createButtons(buttons, css, notification) {
	const div = document.createElement("div");
	
	for(let i = 0; i < buttons.length; i++){
		const button = document.createElement("div");
		
		div.classList.add("pwn3-buttons-box");
		button.classList.add("pwn3-buttons-button");
		
		div.style.display = "flex";
		
		button.innerText = buttons[i].text;
		button.style.flex = "1";
		button.style.padding = "10px";
		button.style.textAlign = "center";
		button.style.textTransform = "uppercase";
		button.style.cursor = "pointer";
		
		button.onclick = function(e){
			e.preventDefault();
			e.stopPropagation();
			
			notification.close(buttons[i].action);
		};
		
		if(css && css.button){
			utils.applyCss(button, css.button);
		}
		
		div.appendChild(button);
	}
	
	if(css && css.buttonsSection){
		utils.applyCss(div, css.buttonsSection);
	}
	
	return div;
}

/**
 *
 * @param title
 * @param message
 * @param timeout
 * @param internalIndex
 * @param applyStyle
 * @param onStateUpdate
 * @param buttons
 * @param closeOnClick
 * @return {Notification}
 */
function createCard({ title = null, message = null, timeout, internalIndex, applyStyle = "default", onStateUpdate = null, buttons = null, closeOnClick = true }) {
	let timeoutId = null;
	const div = document.createElement("div");
	const notification = new Notification({ div, onStateUpdate });
	
	const customCss = applyStyle ? stylesRepo.get(applyStyle) : null;
	
	div.id = "pwn3-element-" + internalIndex;
	div.classList.add("pwn3-container");
	
	// close notification on click
	if(closeOnClick){
		div.onclick = function (e) {
			e.preventDefault();
			e.stopPropagation();
			
			if(timeoutId != null){
				clearTimeout(timeoutId);
			}
			
			notification.close(NotificationUpdate.CLOSED);
		};
	}
	
	if(timeout != null){
		timeoutId = setTimeout(function () {
			notification.close(NotificationUpdate.TIME_OUT);
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
	
	if(buttons){
		div.appendChild(createButtons(buttons, customCss, notification));
	}
	
	// apply css to the container
	utils.applyCss(div, DEFAULT_CSS);
	if(customCss !== null && customCss.container !== null){
		utils.applyCss(div, customCss.container);
	}
	
	return notification;
}

module.exports = createCard;