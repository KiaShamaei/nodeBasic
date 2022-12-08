const EventEmitter = require("events");
const Logger = require('./logger')
const logger = new Logger();
const emitter = new EventEmitter();

//add listner with addListener or on 
emitter.addListener('messageLog' , ()=>{
	console.log("this is a log...")
})

//raise or trigger log
emitter.emit('messageLog')



//add listener with on 
emitter.on("msg2" , (...args)=>{
	console.log(args)
})


emitter.emit("msg2" , 12 , 13 , 14)


//logger example from outside 
logger.on('msgoutside', (e)=>{
	console.log("this is from outside file : " , e)
})
logger.log()