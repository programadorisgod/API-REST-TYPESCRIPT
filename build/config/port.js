"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findPort = void 0;
const net_1 = require("net");
const findPort = (port) => {
    return new Promise((resolve, reject) => {
        const server = (0, net_1.createServer)();
        server.listen(port, () => {
            const address = server.address();
            let PORT;
            if (typeof address === 'object' && address !== null) {
                const { port } = address;
                PORT = port;
            }
            server.close(() => {
                resolve(PORT);
            });
        });
        server.on('error', (err) => {
            if (err.code === 'EADDRINUSE') {
                resolve(findPort(0));
            }
            else {
                reject(err.message);
            }
        });
    });
};
exports.findPort = findPort;
