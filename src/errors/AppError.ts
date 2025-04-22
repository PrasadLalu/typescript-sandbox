import { status } from 'http-status';

class AppError extends Error {
    public code: number;
    public status: string;

    constructor(message?: string, code?: number, defaultStatus?: string) {
        super();

        this.code = code || status.INTERNAL_SERVER_ERROR;
        this.status = defaultStatus || status[status.INTERNAL_SERVER_ERROR];
        this.message = message || 'Something went wrong';

        Error.captureStackTrace(this, this.constructor);
    }
}

export default AppError;
