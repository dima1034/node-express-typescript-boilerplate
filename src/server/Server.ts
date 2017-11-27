import * as http from 'http';
import * as express from 'express';

export class Server {
	/**
	   * Normalize port for the express application
	   *
	   * @param {string} port
	   * @returns {(number | string | boolean)}
	   *
	   * @memberof Server
	   */
	public static normalizePort(port: string): number | string | boolean {
		const parsedPort = parseInt(port, 10);
		if (isNaN(parsedPort)) { // named pipe
			return port;
		}
		if (parsedPort >= 0) { // port number
			return parsedPort;
		}
		return false;
	}

	constructor(public httpServer: http.Server) { }

	/**
	 * Listen to the given http server
	 *
	 * @param {http.Server} httpServer
	 * @param {express.Application} app
	 *
	 * @memberof Server
	 */
	public use(app: express.Application): void {
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
	public onStartUp(app: express.Application): void {
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
	public onError(error: any): void {
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
