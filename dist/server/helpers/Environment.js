"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Helps us to simplify 'process.env' and also provide
 * the content of the package.json.
 */
const path_1 = require("path");
class Environment {
    static getNodeEnv() {
        return process.env.NODE_ENV || 'development';
    }
    static isTest() {
        return this.getNodeEnv() === 'test';
    }
    static isDevelopment() {
        return this.getNodeEnv() === 'development';
    }
    static isProduction() {
        return this.getNodeEnv() === 'production';
    }
    static getPkg() {
        return require(path_1.default.resolve(__dirname, 'package.json'));
    }
    static isTruthy(bool) {
        try {
            return bool.toLowerCase() === 'true';
        }
        catch (e) {
            return false;
        }
    }
}
exports.Environment = Environment;
//# sourceMappingURL=Environment.js.map