"use strict";
/**
 * This is for our IOC so have a unique key/target for
 * our controllers, services and repositories.
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.Targets = {
    Model: {
        User: 'User'
    },
    Repository: {
        UserRepository: 'UserRepository'
    },
    Service: {
        UserService: 'UserService'
    },
    Middleware: {
        AuthenticateMiddleware: 'AuthenticateMiddleware',
        PopulateUserMiddleware: 'PopulateUserMiddleware'
    },
    Listener: {
        user: {
            UserAuthenticatedListener: 'UserAuthenticatedListener',
            UserCreatedListener: 'UserCreatedListener'
        }
    },
    Controller: {
        HomeController: 'HomeController'
    }
};
//# sourceMappingURL=Targets.js.map