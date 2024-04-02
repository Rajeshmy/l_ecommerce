import Express from 'express'
import { addtocart,getcartdetails } from '../controller/cartcontroller.mjs'
import { validateToken } from '../middleware/validateToken.mjs'

const cartrouter = Express.Router()
cartrouter.get('/',validateToken,getcartdetails)
cartrouter.post('/addtocart/:props',validateToken,addtocart)

export default cartrouter;

