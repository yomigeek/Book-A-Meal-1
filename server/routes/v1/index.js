import { Router } from 'express';
import MenuRoutes from './menu';
import MealsRoutes from './meals';
import OrderRoutes from './orders';
import AuthRoutes from './auth';
import { authorize } from '../../middlewares';

const router = Router();

router.use('/v1/auth', AuthRoutes);

router.use(authorize);
router.use('/v1/menu', MenuRoutes);
router.use('/v1/meals', MealsRoutes);
router.use('/v1/orders', OrderRoutes);


export default router;
