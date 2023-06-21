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
const express_1 = __importDefault(require("express"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const environment_1 = __importDefault(require("../environment"));
const clientService_1 = __importDefault(require("../services/clientService"));
const router = express_1.default.Router();
router.post('/', (req, resp) => __awaiter(void 0, void 0, void 0, function* () {
    const clientId = req.headers['x-client-id'];
    const clientKey = req.headers['x-secret-key'];
    if (!clientId || !clientKey) {
        resp.status(400).json({ message: 'No client or secret key' });
        return;
    }
    const client = yield clientService_1.default.getInstance().findById(clientId);
    if (!client) {
        resp.status(404).json({ message: 'Client not found' });
        return;
    }
    if (client.secret != clientKey) {
        resp.status(403).json({ message: 'Incorrect secret key' });
        return;
    }
    const token = jsonwebtoken_1.default.sign({ data: clientId }, environment_1.default.TOKEN_SECRET, {
        expiresIn: '30m',
    });
    resp.status(200).json({ access_token: token });
}));
exports.default = router;
