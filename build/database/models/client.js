"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
class Client extends sequelize_1.Model {
    static initModel(sequelize) {
        Client.init({
            id: {
                type: sequelize_1.DataTypes.STRING,
                primaryKey: true,
            },
            secret: {
                type: sequelize_1.DataTypes.STRING,
            },
        }, {
            sequelize,
        });
    }
}
exports.default = Client;
