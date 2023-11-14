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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.findByIdUser = exports.findAllUsers = exports.createUser = void 0;
const users_1 = __importDefault(require("../models/users"));
const handlerError_1 = require("../utils/handlerError");
const createUser = (user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newUser = yield users_1.default.create(user);
        return newUser;
    }
    catch (error) {
        throw new handlerError_1.CustomError(500, 'Error to create user');
    }
});
exports.createUser = createUser;
const findAllUsers = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield users_1.default.find();
        return users;
    }
    catch (error) {
        throw new handlerError_1.CustomError(500, 'Error to find users');
    }
});
exports.findAllUsers = findAllUsers;
const findByIdUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const user = yield users_1.default.findById(id);
        return user;
    }
    catch (error) {
        throw new handlerError_1.CustomError(500, 'Error to find user');
    }
});
exports.findByIdUser = findByIdUser;
const updateUser = (id, user) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userUpdated = yield users_1.default.findByIdAndUpdate(id, user, { new: true });
        return userUpdated;
    }
    catch (error) {
        throw new handlerError_1.CustomError(500, '');
    }
});
exports.updateUser = updateUser;
const deleteUser = (id) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const userDeleted = yield users_1.default.findByIdAndDelete(id);
        return userDeleted;
    }
    catch (error) {
        throw new handlerError_1.CustomError(500, 'Error to delete user');
    }
});
exports.deleteUser = deleteUser;
