import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BooksListComponent } from './smart/books-list/books-list.component';
import { BookComponent } from './dumb/book/book.component';

const routes: Routes = [
  {
    path: '',
    component: BooksListComponent
  },
  {
    path: ':id',
    component: BookComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
