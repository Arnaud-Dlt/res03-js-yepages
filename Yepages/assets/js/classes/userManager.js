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
        let state = false;
        let confirmpassword = document.getElementById("confirmPwd").value;

        for (let i = 0; i < this.#users.length; i++) {
            if (this.#users[i].email === user.email) {
                state = true
            }
        }

        if (state === false) {

            if (user.password !== "" && user.password === confirmpassword) {
                this.#users.push(user);
            }
            else {
                alert("Les mots de passe sont différents");
            }

        }
        else {
            alert(`Désolé l'email : ${user.email} est déja utilisé !`);
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
        let jsonUser = JSON.stringify(this.#users);
        localStorage.setItem("users", jsonUser);
    }

    load() {
        let usersStorage = JSON.parse(localStorage.getItem("users"));
        for (let i = 0; i < usersStorage.length; i++) {
            let parseData = JSON.parse(usersStorage[i]);
            let newUser = new User(parseData.id, parseData.username, parseData.email, parseData.password, parseData.firstName, parseData.lastName, parseData.profileImage);
            this.#users.push(newUser);
        }

    }

    login(email, password) {
        if (this.#users.length > 0) {
            for (let i = 0; i < this.#users.length; i++) {
                if (email === this.#users[i].email && password === this.#users[i].password) {
                    alert(`Bonjour ${this.#users[i].username}`);
                    break;
                }
            }
        }
        else {
            alert("Identifiants inconnus");
        }
    }

    displayUsersTab (){
        for (let i = 0; i < this.#users.length; i++) {
            /// Recup Tbody
            let tbody = document.querySelector("main section table tbody");

            /// Elements du Tab à créer 
            let tr = document.createElement("tr");
            let td1 = document.createElement("td");
            let td2 = document.createElement("td");
            let td3 = document.createElement("td");
            let td4 = document.createElement("td");
            let td5 = document.createElement("td");
            let td6 = document.createElement("td");
            let td7 = document.createElement("td");

            /// Ajout des elements
            tbody.appendChild(tr);
            tr.appendChild(td1);
            tr.appendChild(td2);
            tr.appendChild(td3);
            tr.appendChild(td4);
            tr.appendChild(td5);
            tr.appendChild(td6);
            tr.appendChild(td7);

            /// Contenu des cellules 
            td1.textContent = this.#users[i].id;
            td2.textContent = this.#users[i].username;
            td3.textContent = this.#users[i].email;
            td4.textContent = this.#users[i].password;
            td5.textContent = this.#users[i].firstname;
            td6.textContent = this.#users[i].lastname;
            td7.textContent = this.#users[i].profileImage;
        }
    }
}
export { UserManager };