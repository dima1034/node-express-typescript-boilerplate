"use strict";
///<reference path="../../../types/my-express.d.ts"/>
///<reference path="../../../types/interfaces.d.ts"/>
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
/**
 * This controller is return HELLO WORLD
 */
const inversify_express_utils_1 = require("inversify-express-utils");
// Get custom middlewares
// const populateUser = app.IoC.getNamed<interfaces.Middleware>(Types.Middleware, Targets.Middleware.PopulateUserMiddleware);
// const authenticate = app.IoC.getNamed<interfaces.Middleware>(Types.Middleware, Targets.Middleware.AuthenticateMiddleware);
let HomeController = class HomeController {
    constructor() {
        console.log('HomeController');
    }
    index(_, res) {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            return res.ok("HELLO WOLRD");
        });
    }
};
tslib_1.__decorate([
    inversify_express_utils_1.httpGet('/'),
    tslib_1.__param(0, inversify_express_utils_1.request()),
    tslib_1.__param(1, inversify_express_utils_1.response()),
    tslib_1.__metadata("design:type", Function),
    tslib_1.__metadata("design:paramtypes", [Object, Object]),
    tslib_1.__metadata("design:returntype", Promise)
], HomeController.prototype, "index", null);
HomeController = tslib_1.__decorate([
    inversify_express_utils_1.controller('/home'),
    tslib_1.__metadata("design:paramtypes", [])
], HomeController);
exports.HomeController = HomeController;
//# sourceMappingURL=HomeController.js.map