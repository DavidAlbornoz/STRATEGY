import { USERS } from './../database/Users.database.js';
import { Auth } from './../interfaces/Auth.interface.js';
export class XMLAuth implements Auth{
    login(data: any) : boolean{
        let username = data.tagUsername;
        let password = data.tagPassword;

        let isUser = false;

        USERS.forEach(user => {
            if(user.username === username && user.password === password){
                isUser = true;
            }
        });

        return isUser;
    }
}