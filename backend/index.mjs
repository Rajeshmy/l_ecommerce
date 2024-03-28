
import Express from "express";
//import { productData } from "./src/data/productData";
import  pdprouter  from "./router/pdproute.mjs";
import  userrouter  from "./router/ userrouter .mjs";
import cartrouter from "./router/cartrouter.mjs";
import errorHandler from './middleware/errorHandling.js';
import mongoose, { connect } from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();
const server = Express();
const port = process.env.PORT||4000;
server.use(Express.urlencoded({ extended: true }));
server.use(cors());
server.use(Express.json());
server.use(errorHandler);

server.use('/api/products',pdprouter);
server.use('/user',userrouter);
server.use('/api/addtocart',cartrouter);


const connectdb = async()=>{
  try{
   const conn= await mongoose.connect(process.env.DBSTRING);
    console.log("connected to db",conn.connection.host)
  }catch(err){
    console.log("error while db connection",err)
  }
}



server.listen(port,()=>{
    console.log("server listening to port",port)
    connectdb();
});

