const fs = require('fs');
const path = require('path');


//make dir fs method arg path 
// fs.mkdir(
// 	path.join(__dirname,'makeDirTest'),
// 	{} ,
// 	 (err)=>{
// 	console.log(err)
// })

//write file fs method args path , data , formatt , callback
// fs.writeFile(
// 	path.join(__dirname , 'makeDirTest' , 'test.txt') , "this is test for write","utf8",(err)=>{
// 		if(err)console.log(err)
// 		console.log("write file succesfully ...")
// 	}
// )

// //readfile fs method 
// fs.readFile(
// 	path.join(__dirname,"makeDirTest","test.txt") , 
// 	'utf8',
// 	(err, data)=>{
// 		if(err)console.log(err)
// 		console.log(data)
// 	}
// )

//append to file fs method 

fs.appendFile(
	path.join(__dirname,'makeDirTest','test.txt') ,
	"this appended data" ,
	(err)=>{
		if(err)
		console.log(err)
		else
		console.log("this appended file ...")
	}
)