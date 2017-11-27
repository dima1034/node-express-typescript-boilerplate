"use strict";
/**
 * This should be used for repository errors like
 * entity with this id already exists and stuff like that.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = require("../../server/helpers/Exception");
class DataBaseException extends Exception_1.Exception {
    constructor(text, error) {
        const value = error.stack.split('/n')[0];
        super(400, text, [
            value.substring(7)
        ]);
    }
}
exports.DataBaseException = DataBaseException;
//# sourceMappingURL=DatabaseException.js.map