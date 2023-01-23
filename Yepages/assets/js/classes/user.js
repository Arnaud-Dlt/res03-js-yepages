class User {
    #id;
    #username;
    #email;
    #password;
    #firstName;
    #lastName;
    #profileImage;
    
    constructor (id, username, email, password, firstName, lastName, profileImage){
        this.#id = id;
        this.#username = username;
        this.#email = email;
        this.#password = password;
        this.#firstName = firstName;
        this.#lastName = lastName;
        this.#profileImage = profileImage;
    }
    
    get id (){
        return this.#id;
    }
    
    set id (id){
        this.#id = id;
    }
    
    get username (){
        return this.#username;
    }
    
    set username (username){
        this.#username = username;
    }
    
    get email (){
        return this.#email;
    }
    
    set email (email){
        this.#email = email;
    }
    
    get password (){
        return this.#password;
    }
    
    set password (password){
        this.#password = password;
    }
    
    get firstName (){
        return this.#firstName;
    }
    
    set firstName (firstName){
        this.#firstName = firstName;
    }
    
    get lastName (){
        return this.#lastName;
    }
    
    set lastName (lastName){
        this.#lastName = lastName;
    }
    
    get profileImage (){
        return this.#profileImage;
    }
    
    set profileImage (profileImage){
        this.#profileImage = profileImage;
    }
    
    toJSON () {

    let user = {
        id: this.#id,
        username: this.#username,
        email: this.#email,
        password: this.#password,
        profileImage: this.#profileImage,
        firstName: this.#firstName,
        lastName: this.#lastName,
    };

    return JSON.stringify(user);
    
    }
}

export { User };