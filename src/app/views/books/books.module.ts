import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BooksRoutingModule } from './books-routing.module';
import { BooksListComponent } from './smart/books-list/books-list.component';
import { BookComponent } from './dumb/book/book.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    BooksRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [
    BooksListComponent,
    BookComponent
  ],
  providers: [
  ]
})
export class BooksModule { }
