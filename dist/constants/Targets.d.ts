/**
 * This is for our IOC so have a unique key/target for
 * our controllers, services and repositories.
 */
export declare const Targets: {
    Model: {
        User: string;
    };
    Repository: {
        UserRepository: string;
    };
    Service: {
        UserService: string;
    };
    Middleware: {
        AuthenticateMiddleware: string;
        PopulateUserMiddleware: string;
    };
    Listener: {
        user: {
            UserAuthenticatedListener: string;
            UserCreatedListener: string;
        };
    };
    Controller: {
        HomeController: string;
    };
};
