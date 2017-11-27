"use strict";
/**
 * This should be used if a someone requests a
 * entity with a id, but there is no entity with this id in the
 * database, then we throw this exception.
 */
Object.defineProperty(exports, "__esModule", { value: true });
const Exception_1 = require("../../server/helpers/Exception");
class ValidationException extends Exception_1.Exception {
    constructor(text, errors) {
        const info = errors.map((e) => ({
            property: e.property,
            constraints: e.constraints
        }));
        super(400, text, info);
    }
}
exports.ValidationException = ValidationException;
//# sourceMappingURL=NotFoundException.js.map