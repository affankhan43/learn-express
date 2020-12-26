// Require Libraries
var http = require('http')
var express = require('express')
var morgan = require('morgan')
var body_parser = require('body-parser')
// Require Routes
var userRoute = require('./routes/userRoute.js')
//Host details
var hostname = 'localhost'
var port = 80

//Content
var users = {"users":[
	{"id":1,"name":"x",'details':""}
]}
var profile = {"profiles":[
	{"userid":1,"Full Name":"xx", "image":"url"}
]}
var posts = {
	"posts":[
		{"id":1,"title":"","description":"","created_by":1}
	]
}

//express
var app = express();
app.use(morgan('dev'))
app.use(express.static('public'))
app.use(body_parser.json())
app.use('/user',userRoute)

// app.use((req,res)=>{
// 	res.end('hello')
// })
var server = http.createServer(app);

server.listen(port,hostname, (msg)=>{
	console.log('Server Started at http://'+hostname+':'+port)
})