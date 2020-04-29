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

module.exports.add = add;
module.exports.get = get;
module.exports.has = has;