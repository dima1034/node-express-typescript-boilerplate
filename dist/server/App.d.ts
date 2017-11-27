/// <reference types="express" />
import { Server } from './Server';
import { Container } from 'inversify';
import * as express from 'express';
export interface Configurable {
    configure(app: App): void;
}
export declare class App {
    private express;
    private server;
    private inversifyExpressServer;
    private ioc;
    private bootstrapApp;
    private configurations;
    constructor();
    readonly IoC: Container;
    readonly Express: express.Application;
    readonly Server: Server;
    configure(configurations: Configurable): void;
    bootstrap(): Promise<void>;
}
