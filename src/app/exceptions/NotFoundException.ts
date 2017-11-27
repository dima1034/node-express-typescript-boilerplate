/**
 * This should be used if a someone requests a
 * entity with a id, but there is no entity with this id in the
 * database, then we throw this exception.
 */

import { Exception } from '../../server/helpers/Exception';

export class ValidationException extends Exception {
	constructor(text: string, errors: any) {
		const info = errors.map((e) => ({
			property: e.property,
			constraints: e.constraints
		}));
		super(400, text, info);
	}
}
