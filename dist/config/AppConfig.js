"use strict";
/**
 * This is the place to add any other express module and register
 * all your custom middlewares and routes.
 *
 * CORS is a node.js package for providing a Connect/Express
 * middleware that can be used to enable CORS with various options.
 *
 * Helmet helps you secure your Express apps by setting various HTTP headers.
 *
 * serve-favicon - Node.js middleware for serving a favicon
 *
 * compression - Node.js compression middleware
 */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
// import * as cors from 'cors';
// import * as helmet from 'helmet';
const express = require("express");
const favicon = require("serve-favicon");
const bodyParser = require("body-parser");
const compression = require("compression");
class AppConfig {
    configure(app) {
        app.Express
            .use(compression())
            .use(bodyParser.json())
            .use(bodyParser.urlencoded({
            extended: true
        }))
            .use(express.static(path.join(__dirname, '..', 'public'), { maxAge: 31557600000 }))
            .use(favicon(path.join(__dirname, '..', 'public', 'favicon.ico')));
    }
}
exports.AppConfig = AppConfig;
//# sourceMappingURL=AppConfig.js.map