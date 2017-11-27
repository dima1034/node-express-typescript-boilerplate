"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const glob = require("glob");
const path = require("path");
const inversify_1 = require("inversify");
const constants_1 = require("../constants");
const IocConfig_1 = require("../config/IocConfig");
class IoC {
    constructor() {
        this.container = new inversify_1.Container();
        const config = new IocConfig_1.IocConfig();
        config.configure(this);
    }
    configure(configuration) {
        this.customConfiguration = configuration;
    }
    configureLib(configuration) {
        this.libConfiguration = configuration;
    }
    bindModules() {
        return tslib_1.__awaiter(this, void 0, void 0, function* () {
            if (this.libConfiguration) {
                this.container = this.libConfiguration(this.container);
            }
            yield this.bindMiddlewares();
            yield this.bindControllers();
            if (this.customConfiguration) {
                this.container = this.customConfiguration(this.container);
            }
        });
    }
    bindMiddlewares() {
        return this.bindFiles('/middlewares/**/*Middleware.ts', constants_1.Targets.Middleware, (name, value) => this.bindFile(constants_1.Types.Middleware, name, value));
    }
    bindControllers() {
        return this.bindFiles('/controllers/**/*Controller.ts', constants_1.Targets.Controller, (name, value) => this.bindFile(constants_1.Types.Controller, name, value));
    }
    bindFile(type, name, value) {
        inversify_1.decorate(inversify_1.injectable(), value);
        this.container
            .bind(type)
            .to(value)
            .whenTargetNamed(name);
    }
    bindFiles(filePath, target, callback) {
        return new Promise((resolve) => {
            this.getFiles(filePath, (files) => {
                files.forEach((file) => {
                    let fileExport;
                    let fileClass;
                    let fileTarget;
                    const isRecursive = file.name.indexOf('.') > 0;
                    try {
                        fileExport = require(`${file.filePath}`);
                    }
                    catch (e) {
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
                    }
                    else {
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
    getClassOfFileExport(name, fileExport) {
        const fileParts = name.split('.');
        let fileClass = fileExport;
        fileParts.forEach((part) => {
            if (fileClass.hasOwnProperty(part)) {
                fileClass = fileClass[part];
            }
        });
        return fileClass;
    }
    getTargetOfFile(name, target) {
        const fileParts = name.split('.');
        let fileTarget = target;
        fileParts.forEach((part) => fileTarget = fileTarget[part]);
        return fileTarget;
    }
    getBasePath() {
        const baseFolder = __dirname.indexOf(`${path.sep}src${path.sep}`) >= 0 ? `${path.sep}src${path.sep}` : `${path.sep}dist${path.sep}`;
        const baseRoot = __dirname.substring(0, __dirname.indexOf(baseFolder));
        return path.join(baseRoot, baseFolder, 'api');
    }
    getFiles(filePath, done) {
        filePath = filePath.replace('.ts', '.js');
        glob(this.getBasePath() + filePath, (err, files) => {
            if (err) {
                console.log(`Could not read the folder ${filePath}!`);
                return;
            }
            done(files.map((p) => this.parseFilePath(p)));
        });
    }
    parseFilePath(filePath) {
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
exports.IoC = IoC;
//# sourceMappingURL=IoC.js.map