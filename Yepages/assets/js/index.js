import { User } from './classes/user.js';
import { Book } from './classes/book.js';
import { BookManager } from './classes/bookManager.js';
import { UserManager } from './classes/userManager.js';

window.addEventListener("DOMContentLoaded", function (){

    let newUserManager = new UserManager([]);
    console.log(newUserManager);
    
    /// Inscription
    
    let formRegister = document.getElementById("formRegister");
    formRegister.addEventListener("submit", function(event){
        event.preventDefault();
        
        let newUsername = document.getElementById("username").value;
        let newUserEmail = document.getElementById("email").value;
        let newUserPassword = document.getElementById("password").value;
        let newUserConfirmPwd = document.getElementById("confirmPwd").value;
        let newUserFirstName = document.getElementById("firstname").value;
        let newUserLastName = document.getElementById("lastname").value;
        let newUserProfileImage = document.getElementById("profilImg").value;
        let id = newUserManager.users.length +1;

        let newUser = new User(id , newUsername, newUserEmail, newUserPassword, newUserFirstName, newUserLastName, newUserProfileImage );
        
        newUserManager.createUser(newUser);
        console.log(newUserManager.users);
        newUserManager.save();
        
    });
    
    /// Connexion
    
    let formConnect = document.getElementById("formConnect");
    formConnect.addEventListener("submit", function(event){
        event.preventDefault();
        
        let connectEmail=document.getElementById("connectEmail").value;
        console.log(connectEmail);
        let connectPassword=document.getElementById("connectPassword").value;
        console.log(connectPassword);
        
        newUserManager.login(connectEmail, connectPassword);
    });
    
    
    
})