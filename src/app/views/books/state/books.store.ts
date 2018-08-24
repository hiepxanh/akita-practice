import { EntityState, StoreConfig, EntityStore } from "@datorama/akita";
import { Book } from "@app/models/book";
import { Injectable } from "@angular/core";

export interface BooksState extends EntityState<Book> {}

@StoreConfig({ name: 'books' })
@Injectable({ providedIn: 'root' })
export class BooksStore extends EntityStore<BooksState, Book> {
    constructor() {
        super();
    }
}