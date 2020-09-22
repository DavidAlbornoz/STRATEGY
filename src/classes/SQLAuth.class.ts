import { USERS } from './../database/Users.database.js';
import { Auth } from './../interfaces/Auth.interface.js';
export class SQLAuth implements Auth{
    login(data: any) : boolean{
        let username = data.db.username;
        let password = data.db.password;

        let isUser = false;

        USERS.forEach(user => {
            if(user.username === username && user.password === password){
                isUser = true;
            }
        });

        return isUser;
    }
}