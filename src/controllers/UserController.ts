import { Request, Response } from 'express';
import userService from '../services/userService';

class UserController {
    static async findAll(request: Request, response: Response): Promise<void> {
        try {
            const data = await userService.findAll();
            response.send(data);
        } catch (error) {
            response.status(500).send({ message: 'Failed to fetch users', error });
        }
    }
    static async create(request: Request, response: Response): Promise<void> {
        try {
            const data = await userService.create(request.body);
            response.send(data);
        } catch (error) {
            response.status(500).send({ message: 'Failed to fetch users', error });
        }
    }
}

export default UserController;

// generated/prisma/

// npx prisma generate

// npx prisma init --db --output ../generated/prisma