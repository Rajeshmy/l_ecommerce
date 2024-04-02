
import  Express  from 'express'
import { myorders } from '../controller/myorderscontroller.mjs'
import { validateToken } from '../middleware/validateToken.mjs'


const myordersrouter = Express.Router();

myordersrouter.post("/",validateToken,myorders);

export default myordersrouter;