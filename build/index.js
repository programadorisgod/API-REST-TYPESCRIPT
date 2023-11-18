"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importStar(require("express"));
const cors_1 = __importDefault(require("cors"));
const port_1 = require("./config/port");
const connection_1 = require("./config/connection");
const user_1 = __importDefault(require("./routes/user"));
const app = (0, express_1.default)();
const PORT = (_a = process.env.PORT) !== null && _a !== void 0 ? _a : 4000;
app.disable('x-powered-by');
app.use((0, cors_1.default)({ origin: '*' }));
app.use((0, express_1.urlencoded)({ extended: true }));
app.use((0, express_1.json)());
app.get('/', (req, res) => {
    const data = { metodo: req.method, url: req.url };
    res.status(200).json({ msg: 'Welcome to my api TS', data });
});
app.use(user_1.default);
(0, connection_1.connectionDB)();
(0, port_1.findPort)(PORT).then(port => {
    app.listen(port, () => console.log(`App running in the port: ${port}`));
})
    .catch(err => console.log('Erorr:', err));
