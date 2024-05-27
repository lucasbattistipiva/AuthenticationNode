'use strict'
import { Router } from "express";
import { register,login, changePass } from "../controllers/authControllers.js";

const router = Router()

router.post('/register', register)

router.post('/login', login)

router.patch('/changepass', changePass)


export default router;