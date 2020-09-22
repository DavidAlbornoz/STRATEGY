import { Auth } from '../interfaces/Auth.interface.js';
export class AuthenticationProvider {

    private authStrategy: Auth;
    
    constructor(strategy: Auth){
        this.authStrategy = strategy;
    }

    public setAuthStrategy(strategy: Auth){
        this.authStrategy = strategy;
    }

    public loginInApp(data: any){
        console.log("Login in the App");
        const result = this.authStrategy.login(data);
        console.log(result);
    }
}