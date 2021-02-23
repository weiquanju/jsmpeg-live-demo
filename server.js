var express = require('express');
var app = express();
var http = require('http').Server(app);
var path = require('path')
app.get('/',(req,res) => {
    res.sendFile(path.resolve(__dirname,'view-stream.html'))
});

app.use(express.static('.'));

http.listen(1023,'127.0.0.1',function(){
    console.log('listen at 127.0.0.1:1023')
})