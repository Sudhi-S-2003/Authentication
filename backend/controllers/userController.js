import asyncHandler from 'express-async-handler';
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
const authUser =asyncHandler(async(req,res)=>{
    const {email,password}=req.body;
    const user=await User.findOne({email});
    if(user && (await user.matchPassword(password))){ 
            generateToken(res,user._id);
            res.status(201).json({
                _id:user._id,
                name:user.name,
                email:user.email,
            });
        }else{
            res.status(401);
            throw new Error('Invalid email or password');
        }
    res.status(200).json({message:'Auth user'});
})
export {authUser};
const registerUser=asyncHandler(async(req,res)=>{
    const {name,email,password,confirmPassword}=req.body;
    const userExists= await User.findOne({email});
    if(userExists){
       return res.status(400).json({message:'User already exists'});
    }
    if(password !== confirmPassword){
        return res.status(400).json({message:'passwords do not same'});
     }
    const user=await User.create({
        name,email,password
        });
        if(user){
            generateToken(res,user._id);
          return  res.status(201).json({message:'User created',user});
            }
            else{
                return   res.status(400).json({message:'Invalid user data'});
            }
});
export {registerUser};
const getUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Get user profile'});
    })
export {getUserProfile};
const updateUserProfile=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Update user profile'});
    })
export {updateUserProfile};
const getAllUsers=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Get all users'});
    })
export {getAllUsers};
const getUserById=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Get user by id'});
    })
export {getUserById};
const deleteUser=asyncHandler(async(req,res)=>{
        res.status(200).json({message:'Delete user'});
        })
 export {deleteUser}

 const logoutUser=asyncHandler(async(req,res)=>{
    res.cookie('jwt','',{
        httpOnly:true,
        expires:new Date(0)
    })
    res.status(200).json({message:'Logout user'})

        })
export {logoutUser}
