import Express from 'express'
import { addtocart } from '../controller/cartcontroller.mjs'
import { validateToken } from '../middleware/validateToken.mjs'

const cartrouter = Express.Router()

cartrouter.post('/:props',validateToken,addtocart)

export default cartrouter;

