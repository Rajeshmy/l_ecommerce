import mongoose from "mongoose";

export const myordertype = {
    price:"number",
    quantity:"number",
    slug:"string",
    total:'number',
    user:'string'
};

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

const myordersSchema = mongoose.Schema({
    order_id:{type:String,required:[true,"userId required"]},
    order_basket:{type:[myordertype],required:[true,"unable to fetch order itmes"]}
},{timestamps:true});


export  {cartschema,userSchema,myordersSchema};

