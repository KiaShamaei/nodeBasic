const http = require('http');
const path = require('path');
const fs = require('fs');


//1.
const server = http.createServer(
	//ersponse without router -------------->
	//3.make callBack to get and response a request
	// (req,res)=>{
	// 	if(req.url == "/"){
	// 		console.log("/ is call " , path.join(__dirname , 'frontend' , 'index.html'))
	// 		// res.write("this is for test ");
	// 		// res.end();
	// 		// res.end('<h1>This is first part of node server ...')
	// 		//this is without router in node 
	// 		fs.readFile(path.join(__dirname , 'frontend' , 'index.html'),(err,data)=>{
	// 			console.log("fs read call")
	// 			if(err){
	// 				console.log("err in read doc ...." , err)
	// 			}else{
	// 				console.log("read file success fully..")
	// 				res.writeHead(200 , {"Content-Type": "text/html" })
	// 				res.end(data)
	// 				console.log("send file successfully")
	// 			}
		
	// 		})
			
	// 	}
	// }


	//use dynamic route for handle requested page ------------>
	(req,res)=>{
		let filepath = path.join(__dirname , "frontend" ,
			req.url =="/" ? "index" : req.url
		);
		console.log("file requested :  " , filepath , req.url);
		let extentionDefault = '.html';
		let contentType = "text/html"

		//this is very important to show details in web page with true extention 
		//without this part css or js or ... dont show in website
		switch(path.extname(filepath)){
			case '.js':
				contentType = 'text/javascript';
				break;
			case '.css':
				contentType = "text/css";
				break;
		}
		//add extention for html file which dont have extention 
		if(path.extname(filepath)==""){
			filepath+=extentionDefault
		}
		let path404 = path.join(__dirname,'frontend' , '404.html');

		fs.readFile(filepath , (err, data)=>{
			console.log("read reasponse file start")
			if(err){
				console.log('read file has a err' , err)
				console.log('cant read this path' , filepath)
				if(err.code == "ENOENT"){
					fs.readFile(path404 , (err, data)=>{
						res.writeHead(404, {'Content-Type' : 'text/html'})
						res.end(data)
					})
				}else{
					//other error from site 
					res.writeHead(500)
					res.end(`Server error... ${err.code}`)
				}
			}else{
				console.log('response is ready ...')
				res.writeHead(200 , {'Content-Type' : contentType})
				res.end(data);
			}
		})

	}
);


//2.listen port for server 
server.listen(3000, ()=>{
	console.log("server is up on port 3000 ...")
})