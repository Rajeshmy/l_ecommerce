import JWT from 'jsonwebtoken'


export const validateToken=async(req,res,next)=>{
    let bearer=null;
    const token = req.headers.Authorization||req.headers.authorization;
    console.log(token)
    if(!token){
       //console.log(req.headers.authorization)
       res.end('user not logged in/invalid token');
       return;
    }
       
    bearer = token.split(" ")[1];

    JWT.verify(bearer,process.env.JWTSECRET,(err,decoded)=>{
        if(err){
            console.log('error at jwt');
            
        }else{
            
            req.user = decoded.user;
            
            next();
        }
    })
}

