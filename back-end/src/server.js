const path = require("path");
const express = require("express");
const app = express();

//use express to handle post requests..
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//setup the static directory to be served
app.use(express.static("./www"));

let port = process.env.PORT || 4001;
app.listen(port, function () {
	console.log(`server running on port ${port}`);
});

app.get('/',function(req,res){
	res.sendFile(path.resolve(__dirname,'www/index.html'));
});