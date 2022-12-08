const EventEmitter = require('events')

class Logger extends EventEmitter {
	log(){
		this.emit('msgoutside' , " loggger ")
	}
}
module.exports = Logger;