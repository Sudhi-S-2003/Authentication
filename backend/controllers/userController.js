import asyncHandler from 'express-async-handler';
const authUser =asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Auth user'});
})
export {authUser};
const registerUser=asyncHandler(async(req,res)=>{
    res.status(200).json({message:'Register user'});
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
    res.status(200).json({message:'Logout user'})
        })
export {logoutUser}
