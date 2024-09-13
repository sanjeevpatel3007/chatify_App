import express from 'express';
import userController from '../controller/user.controller.js';
import secureRoute from '../middleware/secureRoute.js';
const { signup ,login,logout,allUsers} = userController;


const router=express.Router();
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)
router.get("/allusers" ,secureRoute,allUsers)


export default router
