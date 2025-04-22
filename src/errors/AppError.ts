import { StatusCodes, getReasonPhrase } from 'http-status-codes';

class AppError extends Error {
    public code: number;
    public status: string;

    constructor(message?: string, code?: number, defaultStatus?: string) {
        super(message || 'Something went wrong');

        this.code = code || StatusCodes.INTERNAL_SERVER_ERROR;
        this.status = defaultStatus || getReasonPhrase(this.code);

        Error.captureStackTrace?.(this, this.constructor);
    }
}

export default AppError;
