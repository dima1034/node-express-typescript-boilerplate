/**
 * This should be used for repository errors like
 * entity with this id already exists and stuff like that.
 */
import { Exception } from '../../server/helpers/Exception';
export declare class DataBaseException extends Exception {
    constructor(text: string, error: any);
}
