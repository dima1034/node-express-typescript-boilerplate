/// <reference path="../../../types/my-express.d.ts" />
/// <reference path="../../../types/interfaces.d.ts" />
import { Exception } from '../helpers/Exception';
export declare const exceptionHandler: (error: Error | Exception, req: myExpress.Request, res: myExpress.Response, next: myExpress.NextFunction) => void;
