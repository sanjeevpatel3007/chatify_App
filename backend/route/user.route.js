import express from 'express';
import userController from '../controller/user.controller.js';
const { signup ,login,logout} = userController;


const router=express.Router();
router.post("/signup",signup)
router.post("/login",login)
router.post("/logout",logout)



export default router
