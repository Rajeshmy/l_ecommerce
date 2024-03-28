import  Express  from "express";
import { validateToken } from "../middleware/validateToken.mjs";
import { register,login,getusers } from "../controller/userController.mjs";

const userRouter = Express.Router();

userRouter.route('/').get(getusers);
userRouter.route('/register').post(register);
userRouter.route('/login').post(login);

export default userRouter;