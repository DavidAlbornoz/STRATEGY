export class OnMemoryAuth {
    constructor() {
        this.users = [
            {
                username: "DaviD",
                password: "55555",
            }
        ];
    }
    login(data) {
        let username = data.username;
        let password = data.password;
        let isUser = false;
        this.users.array.forEach((user) => {
            if (user.username === username && user.password === password) {
                isUser = true;
            }
        });
        return isUser;
    }
}
