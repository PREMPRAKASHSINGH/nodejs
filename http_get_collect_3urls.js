var http=require('http');
var url1=process.argv[2];
var url2=process.argv[3];
var url3=process.argv[4];
result=[];
for (var i = 0; i < 3; i++) {
	http.get(url1,function(res){
		res.setEncoding('utf-8');
		result1="";
		res.on('data',function(data){
			result1+=data;
		});
		res.on('end',function() {
			result[i]=result1;
		});
	});
}
console.log(result);