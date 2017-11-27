"use strict";
///<reference path="../../../types/my-express.d.ts"/>
///<reference path="../../../types/interfaces.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * This handler catches all thrown exceptions from the api layer. Afterwards it
 * send them directly to the client or otherwise it calls the next middleware.
 */
const Environment_1 = require("../helpers/Environment");
const Exception_1 = require("../helpers/Exception");
exports.exceptionHandler = (error, req, res, next) => {
    if (error instanceof Exception_1.Exception || error[Exception_1.isException]) {
        res.failed(error['code'], error.message, error['body'] || null);
        next();
    }
    else {
        if (Environment_1.Environment.isDevelopment()) {
            console.error(error.stack);
        }
        res.failed(500, 'Something broke!', error['body'] || null);
        next(error);
    }
};
//# sourceMappingURL=exceptionHandler.js.map