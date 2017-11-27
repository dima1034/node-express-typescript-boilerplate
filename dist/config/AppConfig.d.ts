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
import { App, Configurable } from '../server/App';
export declare class AppConfig implements Configurable {
    configure(app: App): void;
}
