import { USERS } from './../database/Users.database.js';
export class XMLAuth {
    login(data) {
        let username = data.tagUsername;
        let password = data.tagPassword;
        let isUser = false;
        USERS.forEach(user => {
            if (user.username === username && user.password === password) {
                isUser = true;
            }
        });
        return isUser;
    }
}
