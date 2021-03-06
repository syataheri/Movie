class BaseError extends Error {
    constructor(name, statusCode, description) {
        super(description);

        this.name = name;
        this.statusCode = statusCode;

        Error.captureStackTrace(this);
    }
}

class EmailDuplicateError extends BaseError {
    constructor() {
        super("CONFLICT", 409, 'email address already exist, try login with it.');
    }
}

class MovieDuplicateError extends BaseError {
    constructor() {
        super("CONFLICT", 409, 'movie with this title already exist.');
    }
}

class EmailOrPasswordWrongError extends BaseError {
    constructor() {
        super("NOT FOUND", 404, 'email or password is wrong.');
    }
}

class AdminNotFoundError extends BaseError {
    constructor() {
        super("NOT FOUND", 404, 'admin does not exist');
    }
}

class MovieNotFoundError extends BaseError {
    constructor() {
        super("NOT FOUND", 404, 'movie does not exist');
    }
}

class NotAuthorizedError extends BaseError {
    constructor() {
        super("UNAUTHORIZED", 401, 'Not Authorized');
    }
}

class NotValidError extends BaseError {
    constructor(data) {
        super("NOT VALID", 406, 'Invalid data');
        this.data = data;
    }
}

class ForbiddenError extends BaseError {
    constructor() {
        super("FORBIDDEN", 403, 'Forbidden! This is not allowed!');
    }
}

class ServerError extends BaseError {
    constructor(data) {
        super("SERVER_ERROR", 500, 'this is happend in server side...!');
        this.data = data;
    }
}

export {
    EmailDuplicateError,
    MovieDuplicateError,
    EmailOrPasswordWrongError,
    AdminNotFoundError,
    MovieNotFoundError,
    NotAuthorizedError,
    ForbiddenError,
    NotValidError,
    ServerError
}
