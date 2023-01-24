import { User } from './classes/user.js';
import { UserManager } from './classes/userManager.js';
import { Book } from './classes/book.js';
import { BookManager } from './classes/bookManager.js';

window.addEventListener("DOMContentLoaded",function(){
    let newUserManager=new UserManager([]);
    newUserManager.load();
    newUserManager.displayUsersTab();
})