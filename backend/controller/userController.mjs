import expressAsyncHandler from "express-async-handler"
import  Jwt from "jsonwebtoken";
import encrypt from 'bcrypt';
import { userData } from "../services/datamodel/datamodel.mjs";


export const register=expressAsyncHandler(async(req,res)=>{
    console.log("1");
    const {user,email,password} = req.body;

    if(!email||!user||!password){
        res.status(400);
        console.log(req.body);
        throw new Error("All details mandatory");
    };
    
    const enpass= await encrypt.hash(password,10);
    console.log("2");
    const newUser = new userData({
        user,
        email,
        password: enpass,
      });
      console.log("3");
      newUser.save()
        .then(() => {
          console.log('User saved successfully');
          res.status(200).json("user created");
        })
        .catch((error) => {
          console.error('Error saving user:', error);
          res.end();
        });
    
});


export const login=expressAsyncHandler(async(req,res)=>{
  
    const {email,password} = req.body;
   
    if(!email||!password){
        res.status(400);
        throw new Error("All details mandatory");
    };
    console.log("1");
    let user_ = await userData.findOne({email});
    
    if(user_){
        let flag = await encrypt.compare(password,user_.password)
        if(flag){
          const token = Jwt.sign({user:user_},process.env.JWTSECRET,{expiresIn:"6h"})
          res.status(200).json(token);
        }else{
          res.status(404).json("wrong credentials");
        }
        
    }else{
        res.status(400).json("user not found");
    }
});

export const getusers=expressAsyncHandler(async(req,res)=>{
   const data = await userData.find();
   console.log(data)
   res.status(200).json(data);

});



