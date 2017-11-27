import { Container } from 'inversify';
export declare class IoC {
    container: Container;
    libConfiguration: (container: Container) => Container;
    customConfiguration: (container: Container) => Container;
    constructor();
    configure(configuration: (container: Container) => Container): void;
    configureLib(configuration: (container: Container) => Container): void;
    bindModules(): Promise<void>;
    private bindMiddlewares();
    private bindControllers();
    private bindFile(type, name, value);
    private bindFiles(filePath, target, callback);
    private getClassOfFileExport(name, fileExport);
    private getTargetOfFile(name, target);
    private getBasePath();
    private getFiles(filePath, done);
    private parseFilePath(filePath);
}
