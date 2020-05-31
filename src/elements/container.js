const utils = require("../utils");

const DEFAULT_CSS = () => ({
	position: "fixed",
	right: "0px",
	bottom: "0px",
	width: "20vw",
	display: "flex",
	flexDirection: "column-reverse",
	overflowY: "hidden"
});

const CSS = () => {
	const css = DEFAULT_CSS();
	
	if(window.matchMedia("(max-width: 768px)").matches){
		css.width = "100%";
		css.margin = "5px";
	}
	
	return css;
};

function createContainer(css = null) {
	const div = document.createElement("div");
	div.id = "power-notifier-3000-container";
	
	utils.applyCss(div, CSS());
	if(css != null){
		utils.applyCss(div, css);
	}
	
	return div;
}

module.exports = createContainer;