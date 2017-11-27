"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//import { request } from 'request';
const https = require("https");
class JsonDb {
    add(data) {
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
                .request(options, (response) => {
                resolve(response);
            }).on('error', () => {
                reject();
            });
            postRequest.write(body);
        });
    }
    destroy(id) {
        console.log(id);
        return null;
    }
    update(id, data) {
        console.log(id + data);
        return null;
    }
    findById(id) {
        return new Promise((resolve, reject) => {
            https
                .get(`${process.env.DB_JSON_URL}${id}`, (responce) => {
                let body = '';
                responce.on('data', (chunk) => {
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
    findAll() {
        return new Promise((resolve, reject) => {
            https
                .get(process.env.DB_JSON_URL, (responce) => {
                let body = '';
                responce.on('data', (chunk) => {
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
exports.JsonDb = JsonDb;
//# sourceMappingURL=JsonDb.js.map