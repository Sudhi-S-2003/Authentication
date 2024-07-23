import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile,logoutUser,deleteUser } from '../controllers/userController.js';
import { ProtectMiddleWare } from '../middleware/AuthMiddleware.js';
const UserRouter =express.Router();
UserRouter.post('/auth',authUser);
UserRouter.post('/',registerUser);
UserRouter.get('/logout',logoutUser);
UserRouter.route('/profile').get(ProtectMiddleWare,getUserProfile).put(ProtectMiddleWare,updateUserProfile).delete(ProtectMiddleWare,deleteUser);
export default UserRouter;