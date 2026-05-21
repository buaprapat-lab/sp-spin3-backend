import { Router } from "express";
import { router as usersRoute } from "./userRoute.js";
export const router=Router();





router.use("/user",usersRoute);