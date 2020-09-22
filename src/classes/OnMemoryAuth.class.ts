import { Auth } from "../interfaces/Auth.interface.js";

export class OnMemoryAuth implements Auth{
    
    public users: any;

    constructor(){
        this.users = [
            {
                username: "DaviD",
                password: "55555",
            }
        ];
    }

    login(data: any): boolean{
        let username = data.username;
        let password = data.password;

        let isUser = false;

        this.users.array.forEach((user: any) => {
            if(user.username === username && user.password === password){
                isUser = true;
            }
        });

        return isUser;
    }

}