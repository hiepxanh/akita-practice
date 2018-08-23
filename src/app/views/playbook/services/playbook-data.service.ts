import { Injectable } from "@angular/core";
import { PlaybookStateModule } from "../playbook-state/playbook-state.module";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { PlayBook } from "@app/models/playbook";
import { ID } from "@datorama/akita";
import { map } from "rxjs/operators";

@Injectable({providedIn: PlaybookStateModule})

export class PlaybookDataService {
    private API_PATH = `https://www.googleapis.com/books/v1/volumes`;

    constructor(
        private http: HttpClient) {

    }

    searchBooks(queryTitle: ID):Observable<PlayBook[]> {
        return this.http.get<{items: PlayBook[]}>(`${this.API_PATH}?q=${queryTitle}`)
        .pipe(
            map(books => books.items || [])
        )
    }
    
    retrieveBook(volumeId: ID):Observable<PlayBook> {
        return this.http.get<PlayBook>(`${this.API_PATH}/${volumeId}`)
    }
}