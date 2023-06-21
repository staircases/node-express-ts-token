"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiRoutes = exports.accessTokenRoute = exports.gtgRoute = void 0;
const express_1 = __importDefault(require("express"));
const gtgRoute_1 = __importDefault(require("./gtgRoute"));
exports.gtgRoute = gtgRoute_1.default;
const departmentRoute_1 = __importDefault(require("./departmentRoute"));
const employeeRoute_1 = __importDefault(require("./employeeRoute"));
const accessTokenRoute_1 = __importDefault(require("./accessTokenRoute"));
exports.accessTokenRoute = accessTokenRoute_1.default;
const apiRoutes = express_1.default.Router();
exports.apiRoutes = apiRoutes;
apiRoutes.use('/departments', departmentRoute_1.default);
apiRoutes.use('/employees', employeeRoute_1.default);
