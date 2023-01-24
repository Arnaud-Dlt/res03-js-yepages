import { User } from './user.js';

class UserManager {
    #users;
    
    constructor(users) {
        this.#users = [];
    }

    get users() {
        return this.#users;
    }

    set users(users) {
        this.#users = users;
    }

    findUserById(id) {
        
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === id) {
                return this.#users[i];
            }
        }
    }

    findUserByUsername(username) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].username === username) {
                return this.#users[i];
            }
        }
    }

    findUserByEmail(email) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].email === email) {
                return this.#users[i];
            }
        }
    }

    createUser(user) {
        for(let i = 0; i < this.#users.length; i++) {
            if(this.#users[i].email !== user.email) {
                this.#users.push(user);
            }

        }
    }

    deleteUser(userId) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === userId) {
                this.#users.slice(users[i]);
            }
        }
    }
    
    editUser(user) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === user.id) {
                this.#users[i] = user;
            }
        }
    }
    save() {
        let jsonUser = JSON.stringify(users);
        sessionStorage.setItem("users", jsonUser);
    }
    
    load() {
        let usersStorage = JSON.parse(sessionStorage.getItem("users"));
        let newUsers = [];

        for (let i = 0; i < usersStorage.length; i++) {
            let parseData = JSON.parse(usersStorage[i]);
            let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
            this.#users.push(newUser);
        }
    }
    
    login(username, email) {
        if (this.#users.length > 0) {
            for (let i = 0; i < this.#users.length; i++) {
                if (email === this.#users[i].email && password === this.#users[i].password) {
                    alert(`Bonjour ${this.#users[i].username}`)
                }
                else {
                    alert("Identifiants inconnus");
                }
            }
        }
        else {
            alert("Identifiants inconnus");
        }
    }
}
export { UserManager };