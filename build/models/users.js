"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const userSchema = new mongoose_1.Schema({
    cliente: {
        type: String,
        unique: true,
        required: true
    },
    AE: {
        type: Number,
        required: true
    },
    TD: {
        type: Number,
        required: true
    },
    TE: {
        type: Number,
        required: true
    },
    CP: {
        type: Number,
        required: true
    },
    ALB: {
        type: Number,
        required: true
    },
    SB: {
        type: Number,
        required: true
    },
    CC: {
        type: Number,
        required: true
    },
    CK: {
        type: Number,
        required: true
    },
    ALK: {
        type: Number,
        required: true
    },
    LT: {
        type: Number,
        required: true
    },
    LM: {
        type: Number,
        required: true
    },
    LSH: {
        type: Number,
        required: true
    },
}, { timestamps: true,
    versionKey: false
});
const User = (0, mongoose_1.model)('User', userSchema);
exports.default = User;
