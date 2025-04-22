import { Router } from 'express';
import UserController from '../controllers/UserController';

const router = Router();

router.get('/:id', UserController.findById);
router.delete('/:id', UserController.deleteById);
router.get('/list-users', UserController.findAll);
router.post('/create-user', UserController.create);
router.put('/update-user/:id', UserController.updateById);

export default router;
