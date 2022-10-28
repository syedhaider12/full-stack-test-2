import jwt from "jsonwebtoken";

const authMiddleware =async(req,res,next)=>{
  console.log(req.body)
  let token ;
  if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
    token=req.headers.authorization.split(" ")[1]; 
  };

  console.log(token);
  if(!token){
    return res.status(400).json({succes: false  , message:"Not Authorized to Acces"})
  }
  try{
    jwt.verify(token,process.env.SECKEY);
    console.log(token);
    next()
  }catch(err){

    return res.status(400).json({succes: false  , message:"Not Authorized to Acces"})
  }

}
export default authMiddleware;