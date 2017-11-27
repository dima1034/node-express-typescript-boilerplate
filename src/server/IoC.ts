
import * as glob from 'glob';
import * as path from 'path';
import { Container, decorate, injectable } from 'inversify';
import { Types, Targets } from '../constants';
import { IocConfig } from '../config/IocConfig';

export class IoC {

    public container: Container;
    public libConfiguration: (container: Container) => Container;
    public customConfiguration: (container: Container) => Container;

    constructor() {
        this.container = new Container();
        const config = new IocConfig();
        config.configure(this);
    }

    public configure(configuration: (container: Container) => Container): void {
        this.customConfiguration = configuration;
    }

    public configureLib(configuration: (container: Container) => Container): void {
        this.libConfiguration = configuration;
    }

    public async bindModules(): Promise<void> {
        if (this.libConfiguration) {
            this.container = this.libConfiguration(this.container);
        }

        await this.bindMiddlewares();
        await this.bindControllers();

        if (this.customConfiguration) {
            this.container = this.customConfiguration(this.container);
        }
    }

    private bindMiddlewares(): Promise<void> {
        return this.bindFiles(
            '/middlewares/**/*Middleware.ts',
            Targets.Middleware,
            (name: any, value: any) => this.bindFile(Types.Middleware, name, value));
    }

    private bindControllers(): Promise<void> {
        return this.bindFiles(
            '/controllers/**/*Controller.ts',
            Targets.Controller,
            (name: any, value: any) => this.bindFile(Types.Controller, name, value));
    }

    private bindFile(type: any, name: string, value: any): void {
        decorate(injectable(), value);
        this.container
            .bind<any>(type)
            .to(value)
            .whenTargetNamed(name);
    }

    private bindFiles(filePath: string, target: any, callback: (name: any, value: any) => void): Promise<void> {
		return new Promise<void>((resolve) => {
            this.getFiles(filePath, (files: string[]) => {
                files.forEach((file: any) => {
                    let fileExport;
                    let fileClass;
                    let fileTarget;
                    const isRecursive = file.name.indexOf('.') > 0;
                    try {
                        fileExport = require(`${file.filePath}`);
                    } catch (e) {
                        console.log(e.message);
                        return;
                    }
                    if (fileExport === undefined) {
                        console.log(`Could not find the file ${file.name}!`);
                        return;
                    }
                    if (isRecursive) {
                        fileClass = this.getClassOfFileExport(file.name, fileExport);
                        fileTarget = this.getTargetOfFile(file.name, target);

                    } else {
                        fileClass = fileExport[file.name];
                        fileTarget = target && target[file.name];
                    }

                    if (fileClass === undefined) {
                        console.log(`Name of the file '${file.name}' does not match to the class name!`);
                        return;
                    }

                    if (fileTarget === undefined) {
                        console.log(`Please define your '${file.name}' class is in the target constants.`);
                        return;
                    }

                    callback(fileTarget, fileClass);
                });
                resolve();
            });
        });
    }

    private getClassOfFileExport(name: string, fileExport: any): any {
        const fileParts = name.split('.');
        let fileClass = fileExport;
        fileParts.forEach((part) => {
            if (fileClass.hasOwnProperty(part)) {
                fileClass = fileClass[part];
            }
        });
        return fileClass;
    }

    private getTargetOfFile(name: string, target: any): any {
        const fileParts = name.split('.');
        let fileTarget = target;
        fileParts.forEach((part) => fileTarget = fileTarget[part]);
        return fileTarget;
    }

    private getBasePath(): string {
        const baseFolder = __dirname.indexOf(`${path.sep}src${path.sep}`) >= 0 ? `${path.sep}src${path.sep}` : `${path.sep}dist${path.sep}`;
        const baseRoot = __dirname.substring(0, __dirname.indexOf(baseFolder));
        return path.join(baseRoot, baseFolder, 'api');
    }

    private getFiles(filePath: string, done: (files: any[]) => void): void {
		filePath = filePath.replace('.ts', '.js');
		glob(this.getBasePath() + filePath, (err: any, files: string[]) => {
            if (err) {
                console.log(`Could not read the folder ${filePath}!`);
                return;
            }
            done(files.map((p: string) => this.parseFilePath(p)));
        });
    }

    private parseFilePath(filePath: string): any {
        const p = filePath.substring(this.getBasePath().length + 1);
        const dir = p.split('/')[0];
        const file = p.substr(dir.length + 1);
        const name = file.replace('/', '.').substring(0, file.length - 3);
        return {
            filePath,
            dir,
            file,
            name
        };
    }

}
