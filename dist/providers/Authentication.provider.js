export class AuthenticationProvider {
    constructor(strategy) {
        this.authStrategy = strategy;
    }
    setAuthStrategy(strategy) {
        this.authStrategy = strategy;
    }
    loginInApp(data) {
        console.log("Login in the App");
        const result = this.authStrategy.login(data);
        console.log(result);
    }
}
