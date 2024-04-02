import asyncHandler from 'express-async-handler';
import { productData } from '../data/data.js';
import {cartData} from '../services/datamodel/datamodel.mjs';


const addtocart = asyncHandler(async(req,res)=>{

   const cartitem = req?.params?.props.split(":")[1]
   const user = req?.user?.user||'';
   const data = productData.filter((e)=>{
      return e.slug === cartitem;
   });

   let id = Math.floor(Math.random(900000000)*100000000);
   
   let cartproduct = {
      c_id:id,
      price:data[0].price,
      quantity:2,
      total:data[0].price*2,
      slug:data[0].slug,
      user:user
   };

   const cart = new cartData(cartproduct);
   
   cart.save().then((doc)=>{
     console.log('Sucessfully added to cart');
     res.end('Sucessfully added to cart');
   }).catch((e)=>{
      res.end("An error occured")
   }); 
   
});


const getcartdetails = asyncHandler(async(req,res)=>{

   const user = req?.user?.user||'';
   const data = await cartData.find({user:user});
   
   if(!data) return res.end("some error occured")
   res.status(200).json(data);
});



export {addtocart,getcartdetails}