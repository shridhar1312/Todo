
//Error MW:-jevha error ali tevha error fekto
let errorHandler=(err,req,res,next)=>{
console.log("applicication error handler is called");
console.log(err);
res.send("some error occured at Global lvel")

}

let notFoundHandler=(req,res,next)=>{

    console.log("not found handler is called");
    res.status(404).send("Route not found in application");
    
}

module.exports={
    errorHandlerMiddleware:errorHandler,
    notFoundHandlerMiddleware:notFoundHandler

}