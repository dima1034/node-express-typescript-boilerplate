"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const inversify_express_utils_1 = require("inversify-express-utils");
const Server_1 = require("./Server");
const exceptionHandler_1 = require("./helpers/exceptionHandler");
const extendExpressResponse_1 = require("./helpers/extendExpressResponse");
class Bootstrap {
    defineExpressApp(app) {
        app.set('host', process.env.APP_HOST);
        app.set('port', Server_1.Server.normalizePort(process.env.PORT || process.env.APP_PORT || '8080'));
        return app;
    }
    startServer(app) {
        return app.listen(app.get('port'));
    }
    setupInversifyExpressServer(app, ioc) {
        const inversifyExpressServer = new inversify_express_utils_1.InversifyExpressServer(ioc.container, undefined, {
            rootPath: process.env.APP_URL_PREFIX
        }, app);
        // @ts-ignore: False type definitions from express
        // Optional - exposes the express application object for convenient loading of server-level middleware.
        inversifyExpressServer.setConfig((a) => a.use(extendExpressResponse_1.extendExpressResponse));
        // @ts-ignore: False type definitions from express
        // Optional - like .setConfig(), except this function is applied after registering all app middleware and controller routes.
        inversifyExpressServer.setErrorConfig((a) => a.use(exceptionHandler_1.exceptionHandler));
        return inversifyExpressServer;
    }
    bindInversifyExpressServer(app, inversifyExpressServer) {
        try {
            // Attaches all registered controllers and middleware to the express application. Returns the application instance.
            app = inversifyExpressServer.build();
        }
        catch (e) {
            console.log(e.message);
            process.exit(1);
        }
        return app;
    }
}
exports.Bootstrap = Bootstrap;
//# sourceMappingURL=Bootstrap.js.map