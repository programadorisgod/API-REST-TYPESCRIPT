"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handlerError = exports.CustomError = void 0;
const mongoose_1 = require("mongoose");
class CustomError extends Error {
    constructor(code, message) {
        super(message);
        this._code = code;
        this._message = message;
    }
}
exports.CustomError = CustomError;
const handlerError = (err, res, message = 'Internal Server Error', code = 500) => {
    if (err instanceof CustomError) {
        res.status(err._code).json({ msg: err._message });
        return;
    }
    else {
        res.status(code).json({ msg: message });
        return;
    }
    if (err instanceof SyntaxError || err instanceof mongoose_1.MongooseError) {
        res.status(400).json({ msg: err.message });
    }
};
exports.handlerError = handlerError;
