///<reference path="../../../types/my-express.d.ts"/>
///<reference path="../../../types/interfaces.d.ts"/>

/**
 * This controller is return HELLO WORLD
 */

import {
	controller,
	httpGet,
	response,
	request
} from 'inversify-express-utils';

// Get custom middlewares
// const populateUser = app.IoC.getNamed<interfaces.Middleware>(Types.Middleware, Targets.Middleware.PopulateUserMiddleware);
// const authenticate = app.IoC.getNamed<interfaces.Middleware>(Types.Middleware, Targets.Middleware.AuthenticateMiddleware);

@controller('/home')
export class HomeController {

	constructor() {
		console.log('HomeController');
	}

    @httpGet('/')
    public async index(
			@request()
			_: myExpress.Request,
			@response()
			res: myExpress.Response
		): Promise<any> {
        	return res.ok("HELLO WOLRD");
    }
}
