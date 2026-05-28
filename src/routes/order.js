import { Router } from 'express';
import { getOrders,getOrderById, createOrder,updateOrderItemStatus,updateOrderStatus} from '../modules/orders/orderController.js';

export const router = Router();

router.get('/', getOrders);
router.get('/:id', getOrderById);
router.post('/', createOrder);
router.put('/:orderId/item/:itemId', updateOrderItemStatus);
router.put('/:id', updateOrderStatus);
