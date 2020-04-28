function applyCss(element, cssObject) {
	for(let prop in cssObject){
		if(cssObject.hasOwnProperty(prop)){
			element.style[prop] = cssObject[prop];
		}
	}
	
	return element;
}

module.exports = {
	applyCss
};