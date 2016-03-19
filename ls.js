var call=require('./filt');
var dirname = process.argv[2];
var ext = process.argv[3];
call(dirname,ext,function(err,list) {
	for(var i=0;i<list.length;i++){
		console.log(list[i]);
	}
});