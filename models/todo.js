const mongoose =require('mongoose')

const Schema =mongoose.Schema;

//declaring schema so as to generate blog
let todoSchema= new Schema(
{

    todoId:{
        type:String,
        unique:true
    },
    title:{
        type:String,
        default:''
    },

    tags:[],

    created:{
        type:Date,
        default:Date.now
    },

    lastModified:{
        type:Date,
        default:Date.now
    }
}

)


   //mongoose.model('Newblog', blogSchema);
    
  var todoModel =mongoose.model("todocollection",todoSchema);

  module.exports=
  {
    todoModel:todoModel
  }
  
    


    


