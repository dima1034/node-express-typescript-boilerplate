/// <reference types="express" />
/// <reference types="node" />
import * as http from 'http';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';
import { IoC } from './IoC';
export declare class Bootstrap {
    defineExpressApp(app: express.Application): express.Application;
    startServer(app: express.Application): http.Server;
    setupInversifyExpressServer(app: express.Application, ioc: IoC): InversifyExpressServer;
    bindInversifyExpressServer(app: express.Application, inversifyExpressServer: InversifyExpressServer): express.Application;
}
