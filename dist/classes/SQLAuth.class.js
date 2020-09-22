import { USERS } from './../database/Users.database.js';
export class SQLAuth {
    login(data) {
        let username = data.db.username;
        let password = data.db.password;
        let isUser = false;
        USERS.forEach(user => {
            if (user.username === username && user.password === password) {
                isUser = true;
            }
        });
        return isUser;
    }
}
