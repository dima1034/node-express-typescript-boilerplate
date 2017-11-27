/**
* This should be used when we validate
* the request payload, so we can response with a 400 (Bad Request)
*/
import { Exception } from '../../server/helpers/Exception';
export declare class ValidationException extends Exception {
    constructor(text: string, errors: any);
}
