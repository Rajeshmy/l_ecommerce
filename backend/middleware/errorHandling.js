

const errorHandler=(err,req,res,next)=>{

    const code = res.statusCode?res.statusCode:500;

    switch(code){
        case 400:
            res.json({title:"validation failed",message:err.message, stackTrace:err.stack});
            break;
        case 500:
            res.json({title:"server error",message:err.message, stackTrace:err.stack});
            break;
        case 401:
            res.json({title:"authentication error",message:err.message, stackTrace:err.stack});
            break;
        case 404:
            res.json({title:"not found",message:err.message, stackTrace:err.stack});
            break;
        default: 
             console.log("came to default")
             res.json({title:"unknown error",message:err.message, stackTrace:err.stack})
             break;

    }
}

export default errorHandler;