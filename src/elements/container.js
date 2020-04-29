const utils = require("../utils");

const DEFAULT_CSS = {
	position: "fixed",
	right: "0px",
	top: "0px",
	width: "20vw",
	height: "100%",
	display: "flex",
	flexDirection: "column-reverse",
	overflowY: "hidden"
};

function createContainer(css = null) {
	const div = document.createElement("div");
	div.id = "power-notifier-3000-container";
	
	utils.applyCss(div, DEFAULT_CSS);
	if(css != null){
		utils.applyCss(div, css);
	}
	
	return div;
}

module.exports = createContainer;