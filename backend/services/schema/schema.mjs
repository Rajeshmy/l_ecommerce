import mongoose from "mongoose";


const cartschema = new mongoose.Schema({
    c_id:'string',
    price:"number",
    quantity:"number",
    slug:"string",
    total:'number',
    user:'string'
});


const userSchema = mongoose.Schema({
    user:{type:String,required:[true,"user name required"]},
    email:{type:String,required:[true,"email name required"],unique:[true,"user already exists"]},
    password:{type:String,required:[true,"password name required"]}
},{timestamps:true});



export  {cartschema,userSchema};

