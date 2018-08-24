import { Component, OnInit } from '@angular/core';
import { Book } from '@app/models/book';
import { Observable } from 'rxjs';
import { BooksQuery } from '../../state/books.query';
import { BooksService } from '../../services/books.service';
import { FormControl } from '@angular/forms';
import { startWith, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.scss']
})
export class BooksListComponent implements OnInit {
  books$: Observable<Book[]>;
  selectLoading$: Observable<boolean>;
  sortControl = new FormControl('price');
  constructor(
    private booksQuery: BooksQuery,
    private booksService: BooksService
  ) { }

  ngOnInit() {
    this.books$ = this.sortControl.valueChanges
    .pipe(
      startWith<keyof Book>('price'),
      switchMap(sortBy => this.booksQuery.selectAll({sortBy}))
    );
    this.selectLoading$ = this.booksQuery.selectLoading();
    this.getBooks();
  }

  getBooks() {
    if (this.booksQuery.isPristine) {
      this.booksService.getBooks();
    }
  }

}
