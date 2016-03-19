var fs = require('fs');
var path=require('path');
module.exports=function(dir,ex,callback) {
	ex="."+ex;
	fs.readdir(dir, function(err, files) {
		if(err)
			callback(err,null);
		else{
		filteredfiles=files.filter(function(val){
		 if (path.extname(val)==ex)
		 	return val;
		});
		callback(null,filteredfiles);
	}
});
};