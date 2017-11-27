"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Server_1 = require("./Server");
const Bootstrap_1 = require("./Bootstrap");
const IoC_1 = require("./IoC");
const AppConfig_1 = require("../config/AppConfig");
const dotenv = require("dotenv");
const express = require("express");
class App {
    constructor() {
        this.express = express();
        this.ioc = new IoC_1.IoC();
        this.bootstrapApp = new Bootstrap_1.Bootstrap();
        this.configurations = [];
        // It also loads the .env file into the 'process.env' variable.
        dotenv.config();
        // Create express app
        this.bootstrapApp.defineExpressApp(this.express);
    }
    get IoC() {
        return this.ioc.container;
    }
    get Express() {
        return this.express;
    }
    get Server() {
        return this.server;
    }
    configure(configurations) {
        this.configurations.push(configurations);
    }
    bootstrap() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            // Configure the app config for all the middlewares
            const appConfig = new AppConfig_1.AppConfig();
            appConfig.configure(this);
            this.configurations.forEach((c) => c.configure(this));
            // Setup the ioc of inversify
            yield this.ioc.bindModules();
            // DI for express
            this.inversifyExpressServer = this.bootstrapApp.setupInversifyExpressServer(this.express, this.ioc);
            this.express = this.bootstrapApp.bindInversifyExpressServer(this.express, this.inversifyExpressServer);
            // Configure server
            this.server = new Server_1.Server(this.bootstrapApp.startServer(this.express));
            this.server.use(this.express);
        });
    }
}
exports.App = App;
//# sourceMappingURL=App.js.map