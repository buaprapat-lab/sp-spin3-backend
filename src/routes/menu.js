import { Router } from 'express';
import { 
  getMenus, 
  getMenuById, 
  createMenu, 
  updateMenu, 
  deleteMenu 
} from '../modules/menus/menuController.js';

export const router = Router();

router.get('/', getMenus);
router.get('/:id', getMenuById);
router.post('/', createMenu);
router.patch('/:id', updateMenu);
router.delete('/:id', deleteMenu);
