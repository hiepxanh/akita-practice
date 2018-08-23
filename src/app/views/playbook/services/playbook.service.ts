import { Injectable } from "@angular/core";
import { PlaybookStateModule } from "../playbook-state/playbook-state.module";
import { PlaybookStore } from "../playbook-state/playbook.store";
import { PlayBookQuery } from "../playbook-state/playbook.query";
import { transaction, ID } from "@datorama/akita";
import { PlayBook } from "@app/models/playbook";
import { forkJoin } from "rxjs";
import { PlaybookDataService } from "./playbook-data.service";

@Injectable({providedIn: PlaybookStateModule}) 
export class PlayBookService {
    constructor(
        private playbookStore: PlaybookStore,
        private playbookQuery: PlayBookQuery,
        private playbookDataService: PlaybookDataService
    ) {

    }

    searchBooks(searchTerm: string) {
        this.playbookStore.setLoading(true);
        this.playbookDataService.searchBooks(searchTerm)
        .subscribe(books => this.updateBooks(books))
    }

    updateSearchTerm(searchTerm: string) {
        this.playbookStore.updateSearchTerm(searchTerm);
    }
    
    setActive(id: ID) {
    this.playbookStore.setActive(id);
    }

    add(books: PlayBook[]) {
    this.playbookStore.add(books);
    }


    @transaction()
    private updateBooks(books) {
        const nonCollection = this.playbookQuery.nonCollectionBooks;
        this.playbookStore.remove([...nonCollection]);
        this.add(books);
        this.playbookStore.updateResultIds(books.map(({id}) => id));
        this.playbookStore.setLoading(false);
    }

    loadBooksToStore() {
        const book$ = this.playbookQuery.getCollection.map(id => this.playbookDataService.retrieveBook(id));
        forkJoin(book$).subscribe(books => this.add(books));
    }

    updateCollection(bookId: ID) {
        this.playbookStore.updateCollection(bookId);
        /** In real life, you will abstract this to service. */
        localStorage.setItem('collection',JSON.stringify(this.playbookQuery.getCollection))
    }
}