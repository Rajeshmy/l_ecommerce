
import mongoose from "mongoose";
import { userSchema,cartschema,myordersSchema } from "../schema/schema.mjs";



const cartData = new mongoose.model('cartData',cartschema);
const userData= new mongoose.model('userData',userSchema);
const myOrders= new mongoose.model('myOrder',myordersSchema)


export  {cartData,userData,myOrders};