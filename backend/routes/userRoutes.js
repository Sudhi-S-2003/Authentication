import express from 'express';
import { authUser, getUserProfile, registerUser, updateUserProfile,logoutUser, } from '../controllers/userController.js';
const router =express.Router();
router.post('/auth',authUser);
router.post('/',registerUser);
router.get('/logout',logoutUser);
router.route('/profile').get(getUserProfile).put(updateUserProfile);
export default router