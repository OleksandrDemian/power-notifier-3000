/**
 *
 * @param div
 * @param onStateUpdate
 * @constructor
 */
class Notification {
	constructor({ div, onStateUpdate }) {
		this.onStateUpdate = onStateUpdate;
		this.element = div;
	}
	
	updateState (newState) {
		if(this.onStateUpdate !== null){
			this.onStateUpdate(newState, this);
		}
	}
	
	close (cause) {
		this.element.remove();
		this.updateState(cause);
	}
}

export default Notification;