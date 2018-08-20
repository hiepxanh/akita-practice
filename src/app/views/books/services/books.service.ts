import { timer } from "rxjs";
import { BooksStore } from "../state/books.store";
import { mapTo } from "rxjs/operators";
import { booksData } from "./book.data";
import { ID } from "@datorama/akita";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class BooksService {
    constructor(private booksStore: BooksStore) {

    }

    getBooks() {
        timer(1000)
        .pipe(mapTo(booksData))
        .subscribe(books => {
            this.booksStore.set(books);
        })
    }

    getBook(id: ID) {
        timer(800)
        .pipe(mapTo(booksData))
        .subscribe(book => {
            this.booksStore.add(book);
        })
    }
}