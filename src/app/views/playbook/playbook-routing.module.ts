import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PlaybookSearchComponent } from './smart/playbook-search/playbook-search.component';
import { PlaybookDetailComponent } from './smart/playbook-detail/playbook-detail.component';
import { PlaybookCollectionComponent } from './smart/playbook-collection/playbook-collection.component';
import { BookExistsGuard } from './services/book-exists.guard';

const routes: Routes = [
  {
    path: '',
    component: PlaybookSearchComponent,
    pathMatch: 'full'
  },
  {
    path: 'collection',
    component: PlaybookCollectionComponent,
    pathMatch: 'full'
  },
  {
    path: ':id',
    component: PlaybookDetailComponent,
    canActivate: [BookExistsGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PlaybookRoutingModule { }
