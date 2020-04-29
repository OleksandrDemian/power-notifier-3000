const styles = [];

function add(name, style) {
	styles.push({
		name,
		style
	})
}

function get(name){
	for(let i = 0; i < styles.length; i++){
		if(styles[i].name === name)
			return styles[i].style;
	}
	
	return null;
}

function has(name){
	for(let i = 0; i < styles.length; i++){
		if(styles[i].name === name)
			return true
	}
	
	return false;
}

function merge(name, style){
	if(has(name)){
		for(let i = 0; i < styles.length; i++){
			if(styles[i].name === name){
				styles[i].style = style;
				break;
			}
		}
	} else {
		add(name, style);
	}
}

/**
 * CREATE DEFAULT STYLES
 */

add("default", {
	header: {
		backgroundColor: "#6495ED",
		color: "white",
		textAlign: "center"
	},
	content: {
		backgroundColor: "white",
		color: "#6495ED",
		border: "1px solid #6495ED"
	}
});

add("warn", {
	header: {
		backgroundColor: "orange",
		color: "white",
		textAlign: "center"
	},
	content: {
		backgroundColor: "white",
		color: "orange",
		border: "1px solid orange"
	}
});
add("success", {
	header: {
		backgroundColor: "mediumseagreen",
		color: "white",
		textAlign: "center"
	},
	content: {
		backgroundColor: "white",
		color: "mediumseagreen",
		border: "1px solid mediumseagreen"
	}
});
add("error", {
	header: {
		backgroundColor: "tomato",
		color: "white",
		textAlign: "center"
	},
	content: {
		backgroundColor: "white",
		color: "tomato",
		border: "1px solid tomato"
	}
});

module.exports.add = merge;
module.exports.get = get;
module.exports.has = has;