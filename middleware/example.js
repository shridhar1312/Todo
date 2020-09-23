let exampleMiddleware = (req,res,next)=>{

    req.user= {"Firstname":"shridhar","Lastname":"rodge"}
next();
}

module.exports={
    exampleMiddleware:exampleMiddleware

}