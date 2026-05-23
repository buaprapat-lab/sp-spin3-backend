import { Router } from 'express';
import {router as authRouter} from './auth.js'
import {router as V1Routes} from './v1/index.js'


export const router = Router()

router.use('/auth', authRouter)
router.use('/v1', V1Routes)

