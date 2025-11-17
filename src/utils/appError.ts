export class AppError extends Error {
    public statusHttp: number;

    constructor(message: string, statusHttp: number) {
        super(message);
        this.statusHttp = statusHttp;
    }
}

export class BadRequestError extends AppError {
    constructor(message: string = 'bad request'){
        super(message, 400);
    }
}

export class UnauthorizedError extends AppError {
    constructor(message: string = 'unauthorized'){
        super(message, 401);
    }
}

export class NotFoundError extends AppError {
    constructor(message: string = 'resource not found'){
        super(message, 404);
    }
}