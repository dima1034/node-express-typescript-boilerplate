
import { IDbContext } from './interfaces/IDbContext';
//import { request } from 'request';
import * as https from 'https';

export class JsonDb implements IDbContext {

	public add(data: any): Promise<any> {
		return new Promise((resolve, reject) => {
			let body = JSON.stringify(data);
			let options = {
				host: process.env.DB_JSON_HOST,
				path: `\\${process.env.DB_JSON_PATH}\\`,
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
					'Content-Length': Buffer.byteLength(body)
				}
			};

			let postRequest = https
				.request(options, (response: any) => {
					resolve(response);
				}).on('error', () => {
					reject();
				});

			postRequest.write(body);
		});
	}

	public destroy(id: number): Promise<any> {
		console.log(id);
		return null;
	}

	public update(id: number, data: any): Promise<any> {
		console.log(id + data);
		return null;
	}

	public findById(id: number): Promise<any> {
		return new Promise((resolve, reject) => {
			https
				.get(`${process.env.DB_JSON_URL}${id}`, (responce: any) => {

					let body = '';

					responce.on('data', (chunk: any) => {
						body += chunk;
					});

					responce.on('end', () => {
						resolve(JSON.parse(body));
					});

				}).on('error', () => {
					reject();
				});
		});
	}

	public findAll(): Promise<any> {
		return new Promise((resolve, reject) => {
			https
				.get(process.env.DB_JSON_URL, (responce: any) => {

					let body = '';

					responce.on('data', (chunk: any) => {
						body += chunk;
					});

					responce.on('end', () => {
						resolve(JSON.parse(body));
					});

				}).on('error', () => {
					reject();
				});
		});
	}
}
