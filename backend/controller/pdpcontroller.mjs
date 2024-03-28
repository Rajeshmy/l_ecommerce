import asyncHandler from 'express-async-handler';
import { productData } from '../data/data.js';


const pdpget = asyncHandler((req,res)=>{

if(!productData){
    res.status(400);
    throw new Error("hii");
}

res.status(200).json(productData)

});


const pdppost = asyncHandler((req,res)=>{
   const {email,password} = req.body;
   //let user = User.findone({email});

   if(!email || !password){
    res.status(404);
    throw new Error('mandatory details required');
   };
   
   if(!user) res.json('wrong credentials/email doesnt exist');
   
   //let data = data.create({req.body})
   res.status(200)

});

const pdpdetails = asyncHandler((req,res)=>{
   let sl = req.params.slug.split(":")
    res.json(...productData.filter((f)=>f.slug === sl[1]));
});

export  {pdpget,pdppost,pdpdetails}