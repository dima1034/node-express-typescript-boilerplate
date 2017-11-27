"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Server {
    constructor(httpServer) {
        this.httpServer = httpServer;
    }
    /**
       * Normalize port for the express application
       *
       * @param {string} port
       * @returns {(number | string | boolean)}
       *
       * @memberof Server
       */
    static normalizePort(port) {
        const parsedPort = parseInt(port, 10);
        if (isNaN(parsedPort)) {
            return port;
        }
        if (parsedPort >= 0) {
            return parsedPort;
        }
        return false;
    }
    /**
     * Listen to the given http server
     *
     * @param {http.Server} httpServer
     * @param {express.Application} app
     *
     * @memberof Server
     */
    use(app) {
        this.httpServer.on('listening', () => {
            this.onStartUp(app);
        });
        this.httpServer.on('error', (error) => {
            this.onError(error);
        });
    }
    /**
     * This is called when the server has started and is ready.
     *
     *
     * @memberof Server
     */
    onStartUp(app) {
        console.log(app);
    }
    /**
     * This is called when the server throws an error like the given
     * port is already used
     *
     * @param {*} error
     *
     * @memberof Server
     */
    onError(error) {
        if (error.syscall !== 'listen') {
            throw error;
        }
        switch (error.code) {
            case 'EACCES':
                console.log(`The Server requires elevated privileges`);
                process.exit(1);
                break;
            case 'EADDRINUSE':
                console.log(`Port is already in use or blocked by the os`);
                process.exit(1);
                break;
            default:
                throw error;
        }
    }
}
exports.Server = Server;
//# sourceMappingURL=Server.js.map