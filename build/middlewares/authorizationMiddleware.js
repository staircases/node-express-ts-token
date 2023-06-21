"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = __importDefault(require("../environment"));
function authorizationMiddleware(req, resp, next) {
    var _a;
    const urlPath = req.url;
    const authorizationToken = (_a = req.headers['authorization']) === null || _a === void 0 ? void 0 : _a.split(' ')[1];
    if (urlPath.startsWith('/api')) {
        if (!authorizationToken) {
            resp.status(401).json({ message: 'No authorization token' });
        }
        jsonwebtoken_1.default.verify(authorizationToken, environment_1.default.TOKEN_SECRET, (err, client) => {
            if (err) {
                resp
                    .status(401)
                    .json({ message: 'Invalid authorization token', error: err });
                return;
            }
            resp.status(200);
        });
    }
    next();
}
exports.default = authorizationMiddleware;
