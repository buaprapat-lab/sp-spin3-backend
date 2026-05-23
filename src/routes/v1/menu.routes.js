import { Router } from 'express';
import { Menu } from '../../modules/Menus/Menu.js';
import { createMenu, getMenu } from "../../modules/controller.js";

export const router =  Router();

router.get("/", getMenu);
router.post("/", createMenu);
