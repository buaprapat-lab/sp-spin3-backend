import { Router } from 'express';
import { router as authRouter } from './auth.js';
import { router as orderRouter } from './order.js';
import { router as paymentRouter } from './payment.js';
import { router as menuRoutes } from './v1/menuRoute.js';

export const router = Router();

router.use('/auth', authRouter);
router.use('/orders', orderRouter);
router.use('/payments', paymentRouter);
router.use("/api/menus", menuRoutes);
