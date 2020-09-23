var express = require('express');
var appconfig =require("../Configuration/appConfig");

var blogController = require("../controller/blogc")
const auth=require('./../middleware/auth');

let example = require("../middleware/example");

var setRouter = (app)=>{

    let baseUrl= appconfig.apiVersion+"/todo";
    
    console.log("Url:"+baseUrl+"/all")

    app.get('/hello-world1',example.exampleMiddleware,auth.isAuthenticated,blogController.helloworld)

    //http://localhost:3000/api/v1/todo/all
    app.get(baseUrl+'/all',auth.isAuthenticated,blogController.getAlltodos)
   
    // http://localhost:3000/api/v1/todo/2
    app.get(baseUrl+'/view/:todoId',auth.isAuthenticated,blogController.getTodoById)

   
 
     app.post(baseUrl+'/delete/:todoId',auth.isAuthenticated,blogController.deleteTodoById)

     app.post(baseUrl+'/create',auth.isAuthenticated,blogController.createTodo)

     app.put(baseUrl+'/edit/:todoId',auth.isAuthenticated,blogController.editTodo)

    




    
   


}

module.exports={

    setRouter:setRouter

}