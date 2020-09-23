
var express = require('express');
var fs= require('fs');
var appConfig = require("./Configuration/appConfig")
var app = express();
var mongoose= require('mongoose')
var path = require('path')

//code written for body-parser for post request
var bodyParser = require('body-parser')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded())

let errorhandler= require("./middleware/appErrorHandler")


//MW to handle global Error
app.use(errorhandler.errorHandlerMiddleware);




let modelPath ="./models"
fs.readdirSync(modelPath).forEach((file) => 
{
    if(file.indexOf('.js'))
    {
        console.log(modelPath+'/'+file)
        require(modelPath+'/'+file);
    }

})
//bootstap route
let routePath="./routes";

fs.readdirSync(routePath).forEach((file) => 
{
    if(file.indexOf('.js'))
    {
        console.log("Including following path");
        console.log(routePath+'/'+file)
    let route= require(routePath+'/'+file);
     route.setRouter(app);
    }
    

})



//middleware to handl route not found
app.use(errorhandler.notFoundHandlerMiddleware);

app.listen(appConfig.port,()=>{
    console.log("listening on port 3000");

    //creating mongodb connection
    let Db = mongoose.connect(appConfig.db.uri)



})

//handling mongoose connection error event

mongoose.connection.on("error",(err)=>{
console.log("database connection error");
console.log(err);

})//ending mongoose connection

//handling mongoose connection success event

mongoose.connection.on("open",(err)=>{
    if(err)
    {
        console.log("database connection error");
        console.log(err);
    }
    else
    {
        console.log("Connection is open for use success ");
    }
    
    
    })//ending mongoose connection success event









