import { Request, Response } from 'express';
import userService from '../services/userService';
import ErrorHelper from '../helpers/error.helper';

class UserController {
    static async findAll(request: Request, response: Response): Promise<void> {
        try {
            const result = await userService.findAll();
            response.status(result.code).send(result);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }

    static async create(request: Request, response: Response): Promise<void> {
        try {
            const { body } = request;
            const result = await userService.create(body);
            response.status(result.code).send(result);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }

    static async findById(request: Request, response: Response): Promise<void> {
        try {
            const { id } = request.params;
            const result = await userService.findById(id);
            response.status(result.code).send(result);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }

    static async updateById(request: Request, response: Response): Promise<void> {
        try {
            const { id } = request.params;
            const { body } = request;
            const result = await userService.updateById(id, body);
            response.status(result.code).send(result);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }

    static async deleteById(request: Request, response: Response): Promise<void> {
        try {
            const { id } = request.params;
            const result = await userService.deleteById(id);
            response.status(result.code).send(result);
        } catch (error) {
            const appError = ErrorHelper.error(error);
            response.status(appError.code).send(appError);
        }
    }
}

export default UserController;
