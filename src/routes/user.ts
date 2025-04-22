import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/list-users', UserController.findAll);
router.post('/create-user', UserController.create);

export default router;
