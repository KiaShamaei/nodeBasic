const path = require('path');

//basename method of path module
// console.log(path.basename(__filename));

//	dirname method of path 
// console.log(path.dirname(__filename))

//find extention of file with method extname of path 
// console.log(path.extname(__filename))

//get object of path with parse method of path 
// console.log(path.parse(__filename))

//make folder and file with join method of path  -- first arg for start point and for new path 
console.log(path.join(__filename,'\\test\\subtest','index.htm',))