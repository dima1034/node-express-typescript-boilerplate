import { Server } from './Server';
import { Bootstrap } from './Bootstrap';
import { IoC } from './IoC';
import { AppConfig } from '../config/AppConfig';
import * as dotenv from 'dotenv';
import { Container } from 'inversify';
import * as express from 'express';
import { InversifyExpressServer } from 'inversify-express-utils';

export interface Configurable {
	configure(app: App): void;
}

export class App {
	private express: express.Application = express();
    private server: Server;
    private inversifyExpressServer: InversifyExpressServer;
    private ioc: IoC = new IoC();
    private bootstrapApp = new Bootstrap();
    private configurations: Configurable[] = [];

	constructor() {
		// It also loads the .env file into the 'process.env' variable.
		dotenv.config();
		// Create express app
		this.bootstrapApp.defineExpressApp(this.express);
	}

	get IoC(): Container {
        return this.ioc.container;
    }

    get Express(): express.Application {
        return this.express;
    }

    get Server(): Server {
        return this.server;
    }

    public configure(configurations: Configurable): void {
        this.configurations.push(configurations);
    }

	public async bootstrap(): Promise<void> {
		// Configure the app config for all the middlewares
		const appConfig = new AppConfig();
		appConfig.configure(this);

		this.configurations.forEach((c) => c.configure(this));

		// Setup the ioc of inversify
		await this.ioc.bindModules();

		// DI for express
		this.inversifyExpressServer = this.bootstrapApp.setupInversifyExpressServer(this.express, this.ioc);
		this.express = this.bootstrapApp.bindInversifyExpressServer(this.express, this.inversifyExpressServer);

		// Configure server
		this.server = new Server(this.bootstrapApp.startServer(this.express));
		this.server.use(this.express);
	}
}
