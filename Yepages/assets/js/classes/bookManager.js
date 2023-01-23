import { Book } from './book.js';

class BookManager {
    #books;
    
    
    constructor (books){
        this.#books = [];
    }
    get books (){
        return this.#books;
    }
    
    set books (books){
        this.#books = books;
    }
    
    findAllBooks(){
       return this.books;
    }

    findBookById(id) {
        for(let i = 0; i< this.#books.length; i++) {
            if(this.#books[i].id === id) {
                return this.#books[i];
            }
            else {
                return null;
            }
        }
    }

    findBooksByTitle(title) {
    
        let booksTitle = [];
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].title === title) {
                return booksTitle.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }
    
    findBooksByAuthor(author) {
        booksAuthor = [];
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].author === author) {
                return booksAuthor.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }
    findBooksByPublicationsYear(year) {
        booksYear = [];
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].publicationDate === year) {
                return booksYear.push(this.#books[i]);
            }
            else {
                return null;
            }
        }
    }
    createBook(book) {
        this.#books.push(book);
    }

    deleteBook(bookId) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].id === bookId) {
                this.#books.remove(books[i]);
            }
        }
    }
    
    editBook(book) {
        for (let i = 0; i < this.#books.length; i++) {
            if (this.#books[i].id === book.id) {
                this.#books[i] = book;
            }
        }
    }
    
    save() {
        let jsonBook = JSON.stringify(books);
        sessionStorage.setItem("books", jsonBook);
    }
    
    load() {
        let booksStorage = JSON.parse(sessionStorage.getItem("books"));
        let newBooks = [];
        
        for (let i = 0; i < booksStorage.length; i++) {
            let parseData = JSON.parse(booksStorage[i]);
            let newBook = new Book(parseData.id, parseData.title, parseData.author, parseData.publicationDate, parseData.totalPages, parseData.excerpt, parseData.coverImage);
            newBooks.push(newBook);
        }
    }
}
export { BookManager };