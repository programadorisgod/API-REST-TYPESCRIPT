"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validateBody = void 0;
const handlerError_1 = require("@utils/handlerError");
const validateBody = (req, res, next) => {
    if (req.body && typeof req.body === 'object' && Object.keys(req.body).length > 0) {
        next();
    }
    else {
        (0, handlerError_1.handlerError)(null, res, 'Body is empty', 400);
    }
};
exports.validateBody = validateBody;
