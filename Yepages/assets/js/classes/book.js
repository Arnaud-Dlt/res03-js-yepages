class Book {
    #id;
    #title;
    #author;
    #publicationDate;
    #totalPages;
    #excerpt;
    #coverImage;
    
    constructor (id, title, author, publicationDate, totalPages, excerpt, coverImage){
        this.#id= id;
        this.#title = title;
        this.#author = author;
        this.#publicationDate = publicationDate;
        this.#totalPages = totalPages;
        this.#excerpt = excerpt;
        this.#coverImage = coverImage;
    }
    
    get id (){
        return this.#id;
    }
    
    set id (id){
        this.#id = id;
    }
    
    get title (){
        return this.#title;
    }
    
    set title (title){
        this.#title = title;
    }
    
    get author (){
        return this.#author;
    }
    
    set author (author){
        this.#author = author;
    }
    
    get publicationDate (){
        return this.#publicationDate;
    }
    
    set publicationDate (publicationDate){
        this.#publicationDate = publicationDate;
    }
    
    get totalPages (){
        return this.#totalPages;
    }
    
    set totalPages (totalPages){
        this.#totalPages = totalPages;
    }
    
    get excerpt (){
        return this.#excerpt;
    }
    
    set excerpt (excerpt){
        this.#excerpt = excerpt;
    }
    
    get coverImage (){
        return this.#coverImage;
    }
    
    set coverImage (coverImage){
        this.#coverImage = coverImage;
    }
    
    toJSON () {

    let user = {
        id: this.#id,
        title: this.#title,
        author: this.#author,
        publicationDate: this.#publicationDate,
        totalPages: this.#totalPages,
        excerpt: this.#excerpt,
        coverImage: this.#coverImage,
    };

    return JSON.stringify(user);
    
    }
}

export { Book } ;