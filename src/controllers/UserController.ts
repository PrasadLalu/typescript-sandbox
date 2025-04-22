import { Request, Response } from 'express';
import userService from '../services/userService';
import ErrorHelper from '../helpers/error.helper';

class UserController {
    static async findAll(request: Request, response: Response): Promise<void> {
        try {
            const data = await userService.findAll();
            response.status(200).send(data);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }
    static async create(request: Request, response: Response): Promise<void> {
        try {
            const { body } = request;
            const data = await userService.create(body);
            response.status(201).send(data);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }
}

export default UserController;
