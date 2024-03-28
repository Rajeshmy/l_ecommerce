
import  Express  from "express";
import { validateToken } from "../middleware/validateToken.mjs";
import  {pdpget,pdppost,pdpdetails} from '../controller/pdpcontroller.mjs'


const pdprouter = Express.Router();

pdprouter .route('/').get(pdpget).post(validateToken,pdppost);
pdprouter .route('/:slug').get(pdpdetails);

export default pdprouter;
