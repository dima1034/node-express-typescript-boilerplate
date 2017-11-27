import * as http from 'http';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { Server } from './Server';
import { IoC } from './IoC';
import { exceptionHandler } from './helpers/exceptionHandler';
import { extendExpressResponse } from './helpers/extendExpressResponse';

export class Bootstrap {

	public defineExpressApp(app: express.Application): express.Application {
        app.set('host', process.env.APP_HOST);
        app.set('port', Server.normalizePort(process.env.PORT || process.env.APP_PORT || '8080'));
        return app;
	}

	public startServer(app: express.Application): http.Server {
        return app.listen(app.get('port'));
	}

	public setupInversifyExpressServer(app: express.Application, ioc: IoC): InversifyExpressServer {
        const inversifyExpressServer = new InversifyExpressServer(ioc.container, undefined, {
            rootPath: process.env.APP_URL_PREFIX
        }, app);
		// @ts-ignore: False type definitions from express
		// Optional - exposes the express application object for convenient loading of server-level middleware.
        inversifyExpressServer.setConfig((a) => a.use(extendExpressResponse));
		// @ts-ignore: False type definitions from express
		// Optional - like .setConfig(), except this function is applied after registering all app middleware and controller routes.
        inversifyExpressServer.setErrorConfig((a) => a.use(exceptionHandler));
        return inversifyExpressServer;
    }

    public bindInversifyExpressServer(app: express.Application, inversifyExpressServer: InversifyExpressServer): express.Application {
        try {
			// Attaches all registered controllers and middleware to the express application. Returns the application instance.
            app = inversifyExpressServer.build();
        } catch (e) {
            console.log(e.message);
            process.exit(1);
        }
        return app;
    }
}


