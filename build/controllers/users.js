"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUserById = exports.update = exports.create = exports.findAll = exports.findById = void 0;
const handlerError_1 = require("../utils/handlerError");
const users_1 = require("../services/users");
const findById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, users_1.findByIdUser)(id);
        if (!user) {
            res.status(404).json({ msg: 'id is malformed' });
            return;
        }
        res.status(200).json({ user });
    }
    catch (error) {
        (0, handlerError_1.handlerError)(error, res);
    }
});
exports.findById = findById;
const findAll = (_req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield (0, users_1.findAllUsers)();
        res.status(200).json({ users });
    }
    catch (error) {
        (0, handlerError_1.handlerError)(error, res);
    }
});
exports.findAll = findAll;
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = req.body;
        const newUser = yield (0, users_1.createUser)(user);
        res.status(201).json({ newUser });
    }
    catch (error) {
        (0, handlerError_1.handlerError)(error, res);
    }
});
exports.create = create;
const update = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = req.body;
        const userExist = yield (0, users_1.findByIdUser)(id);
        if (!userExist) {
            (0, handlerError_1.handlerError)(null, res, 'User not found', 404);
            return;
        }
        const userUpdated = yield (0, users_1.updateUser)(id, user);
        res.status(200).json({ userUpdated });
    }
    catch (error) {
        (0, handlerError_1.handlerError)(error, res);
    }
});
exports.update = update;
const deleteUserById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { id } = req.params;
        const user = yield (0, users_1.findByIdUser)(id);
        if (!user) {
            (0, handlerError_1.handlerError)(null, res, 'User not found', 404);
            return;
        }
        const userDeleted = yield (0, users_1.deleteUser)(id);
        res.status(200).json({ userDeleted });
    }
    catch (error) {
        (0, handlerError_1.handlerError)(error, res);
    }
});
exports.deleteUserById = deleteUserById;
