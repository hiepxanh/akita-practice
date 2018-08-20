import { BooksState, BooksStore } from "./books.store";
import { Book } from "@app/models/book";
import { QueryEntity } from "@datorama/akita";
import { Injectable } from "@angular/core";


@Injectable({ providedIn: 'root' })
export class BooksQuery extends QueryEntity<BooksState, Book> {
    constructor(protected store:BooksStore) {
        super(store)
    }
}