import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayBook } from '@app/models/playbook';
import { PlayBookQuery } from '../../playbook-state/playbook.query';
import { PlayBookService } from '../../services/playbook.service';
import { untilDestroyed } from 'ngx-take-until-destroy';
import { skip, filter, debounceTime, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-playbook-search',
  templateUrl: './playbook-search.component.html',
  styleUrls: ['./playbook-search.component.scss']
})
export class PlaybookSearchComponent implements OnInit {
  searchQuery: string;
  books$: Observable<PlayBook[]>;
  loading$: Observable<boolean>;
  error$: Observable<string>;

  constructor(
    private playbookQuery: PlayBookQuery,
    private playbookService: PlayBookService
  ) {
    this.searchQuery = this.playbookQuery.getSearchTerm;
    this.loading$ = this.playbookQuery.selectLoading();
    this.playbookQuery.selectSearchTerm$.pipe(
      skip(1),
      filter(Boolean),
      debounceTime(300),
      untilDestroyed(this)
    ).subscribe(searchTerm => this.playbookService.searchBooks(searchTerm));
    this.books$ = this.playbookQuery.selectResultIds$.pipe(
      switchMap(ids => this.playbookQuery.selectMany(ids))
    )
   }

   search(query: string) {
     this.playbookService.updateSearchTerm(query);
   }

  ngOnInit() {
  }

}
