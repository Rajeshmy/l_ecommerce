import expressAsyncHandler from "express-async-handler";
import {cartData,myOrders} from '../services/datamodel/datamodel.mjs';



export const myorders = expressAsyncHandler(async(req,res,)=>{
   
    const user = req.user.user||"";
   
    if(!user) return res.end("Authorisation Error");
    
    const cartItems = await cartData.find({user:user}).select('user slug price quantity total');

    if(cartItems){
      const id = Math.floor(Math.random(10000000)*10000000);; 
      let ord = {};
      ord.order_id=id,
      ord.order_basket=cartItems;

      const order = await new myOrders(ord);
      let ordersaved = await order.save();
    
      if(ordersaved){
        await cartData.deleteMany({ user: user });
        return res.end("Order placed successfully");
      }else{
        return res.end("some error while placing order")
      }

    }else{
      return res.end("cart items not found")
    }
});

