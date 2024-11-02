"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata"); // We need this in order to use @Decorators
const express_1 = __importDefault(require("express"));
const loaders_1 = __importDefault(require("./loaders"));
async function startServer() {
    const app = (0, express_1.default)();
    await (0, loaders_1.default)({ expressApp: app });
    app.listen(4000, () => {
        console.log(`
########################################
  ⚛️  Server listening on port: 4000 ⚛️
########################################
    `);
    });
}
startServer();
//# sourceMappingURL=app.js.map