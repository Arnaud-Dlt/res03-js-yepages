import { User } from './user.js';

class UserManager {
    #users;
    constructor(users) {
        this.#users = users;
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
            else {
                return null;
            }
        }
    }

    findUserByUsername(username) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].username === username) {
                return this.#users[i];
            }
            else {
                return null;
            }
        }
    }

    findUserByEmail(email) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].email === email) {
                return this.#users[i];
            }
            else {
                return null;
            }
        }
    }

    createUser(user) {
        this.#users.push(user);
    }

    deleteUser(userId) {
        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].id === userId) {
                this.#users.remove(users[i]);
            }
        }
    }
    editUser(user) {
        for (let i = 0; i < this.#users; i++) {
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
            newUsers.push(newUser);
        }
    }
}
export { UserManager };