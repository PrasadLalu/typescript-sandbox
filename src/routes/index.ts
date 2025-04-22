import { Router, Request, Response } from 'express';
import userRoutes from './user';
import { StatusCodes } from 'http-status-codes';

const router = Router();

router.use('/users', userRoutes);

router.get('/health-check', (request: Request, response: Response) => {
    response.send({ message: 'App running...'});
});

// Handling unknown routes
router.use((req: Request, res: Response) => {
    res.status(StatusCodes.NOT_FOUND).json({
        code: StatusCodes.NOT_FOUND,
        message: 'Invalid route - the requested route does not exist.',
    });
});

export default router;
