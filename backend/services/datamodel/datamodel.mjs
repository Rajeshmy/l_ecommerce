
import mongoose from "mongoose";
import { userSchema,cartschema } from "../schema/schema.mjs";



const cartData = new mongoose.model('cartData',cartschema);
const userData= new mongoose.model('userData',userSchema)


export  {cartData,userData};