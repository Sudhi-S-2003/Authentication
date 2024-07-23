import jwt from "jsonwebtoken";
import expressAsyncHandler from "express-async-handler";
import User from "../models/userModel.js";

const ProtectMiddleWare=expressAsyncHandler(async(req,res,next)=>{
    let token;
    token =req.cookies.jwt;
    if(!token){
        res.status(401);
        throw new Error("Not authorized, no token provided");
        }
        try{
            const decoded = jwt.verify(token,process.env.JWT_SECRET);
            if(decoded){
                // console.log(decoded.userId)
                const user = await User.findById(decoded.userId).select("-password");
                req.user = user;
                next();
            }
            }catch(err){
                res.status(401);
                throw new Error("Not authorized,  token is invalid");
                }
})
export { ProtectMiddleWare};