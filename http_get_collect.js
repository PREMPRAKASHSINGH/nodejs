var http=require('http');
var url=process.argv[2];
http.get(url,function(res){
	res.setEncoding('utf-8');
	result="";
	res.on('data',function(data){
		result+=data;
	});
	res.on('end',function() {
	console.log(result.length);
	console.log(result);
});
});