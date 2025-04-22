import { Router, Request, Response } from 'express';
import userRoutes from './user';

const router = Router();

router.use('/users', userRoutes);

router.get('/health-check', (request: Request, response: Response) => {
    response.send({ message: 'App running...'});
});

export default router;
