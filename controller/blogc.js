
var TodoModel = require("../models/todo")

 var shortid=require('shortid');
//  var bodyParser=require('body-parser')


var Helloworld = (req,res) => {
    console.log(req.user);
    
    res.send("hello world");
    }

    

    var getAlltodos= (req,res)=>
    {
        TodoModel.todoModel.find()
    .select('-__v -_id ')
    .lean()
    .exec((err,result)=>
    {
    if(err)
    {
        console.log(err);
    }
    else if(result===undefined || result===null || result==='')
    {
        console.log("No todo found");
        
    }
    else 
    {
    console.log("Result found");
    res.send(result);
    } 

    })//end of exec
    }//end of getall blogs

    var getTodoById=(req,res)=>
{

//  var todoId=1;
TodoModel.todoModel.findOne({'todoId':req.params.todoId})
    .select('-__v -_id ')
    .lean()
    .exec((err,result)=>
    {
    if(err)
    {
        console.log(err);
    }
    else if(result===undefined || result===null || result==='')
    {
        console.log("No todo with this Id");
        
    }
    else 
    {
    console.log("Result found");
    res.send(result);
    } 

    })//end of exec 

}//end of findOne function


var deleteTodoById=(req,res)=>
{

//  var todoId=1;
TodoModel.todoModel.remove({'todoId':req.params.todoId})
    .select('-__v -_id ')
    .lean()
    .exec((err,result)=>
    {
    if(err)
    {
        console.log(err);
    }
    else if(result===undefined || result===null || result==='')
    {
        console.log("No todo with this Id to delete");
        
    }
    else 
    {
    console.log("Result found");
    res.send(result);
    } 

    })//end of exec 

}//end of findOne function
        
var createTodo=(req,res)=>
{
    var today=Date.now();
    //var todoId=shortid.generate();

    var newtodo= new TodoModel.todoModel({


        todoId:req.body.todoId,
        title:req.body.title,
       
        created:today,
        lastModified:today
    });

    newtodo.save((err,result)=>{
if(err)
{
console.log("err"+err);
}
else
{
    console.log("created new todo")
res.send(result);
}

    })

}


var editTodo=(req,res)=>{

let options =req.body

TodoModel.todoModel.update({"todoId":req.params.TodoId}, options ,{multi:true})
.exec((err,result)=>
{
    if(err)
    {
        console.log("error occured"+err);
        res.send(err)
    }else if(result==undefined || result==null || result==''){
        console.log("no Todo found");
        res.send("No todo Found");
    }
    else{
        console.log("todo edited successfully")
        res.send(result);
    }

})//end of exec
}//end of todo


            
      


module.exports=
{ 

    helloworld : Helloworld,

    getAlltodos: getAlltodos,
    getTodoById:getTodoById,
    
    deleteTodoById:deleteTodoById,
    createTodo:createTodo,
    editTodo:editTodo,
    
}