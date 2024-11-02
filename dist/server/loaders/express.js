"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cors_1 = __importDefault(require("cors"));
const body_parser_1 = __importDefault(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const routes_1 = __importDefault(require("../api/routes"));
exports.default = ({ app }) => {
    app.use((0, cors_1.default)());
    app.use(require("method-override")());
    app.use(body_parser_1.default.json());
    app.use((0, cookie_parser_1.default)());
    // Load API routes
    app.use((0, routes_1.default)());
};
//# sourceMappingURL=express.js.map