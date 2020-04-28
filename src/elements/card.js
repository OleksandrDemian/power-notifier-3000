const utils = require("../utils");

const DEFAULT_CSS = {
	marginTop: "5px",
	marginBottom: "5px",
	padding: "5px",
	border: "1px solid black",
	boxShadow: "5px 5px grey",
	width: "90%"
};

function createCard({ title, message, timeout, internalIndex, css = null }) {
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
		}, timeout);
	}
	
	headerEle.innerText = title;
	div.appendChild(headerEle);
	
	buttonEle.onclick = function (e) {
		if(timeoutId != null){
			clearTimeout(timeoutId);
		}
		
		div.remove();
	};
	buttonEle.innerText = "Close";
	div.appendChild(buttonEle);
	
	textEle.innerText = message;
	div.appendChild(textEle);
	
	return div;
}

module.exports = createCard;