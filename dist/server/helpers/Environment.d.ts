export declare class Environment {
    static getNodeEnv(): string;
    static isTest(): boolean;
    static isDevelopment(): boolean;
    static isProduction(): boolean;
    static getPkg(): any;
    static isTruthy(bool: string): boolean;
}
