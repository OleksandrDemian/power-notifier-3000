const utils = require("../utils");

const DEFAULT_CSS = {
	position: "fixed",
	right: "0px",
	bottom: "0px",
	width: "20vw",
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