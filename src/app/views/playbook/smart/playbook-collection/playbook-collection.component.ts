import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { PlayBook } from '@app/models/playbook';
import { PlayBookQuery } from '../../playbook-state/playbook.query';

@Component({
  selector: 'app-playbook-collection',
  templateUrl: './playbook-collection.component.html',
  styleUrls: ['./playbook-collection.component.scss']
})
export class PlaybookCollectionComponent implements OnInit {

  books$: Observable<PlayBook[]>;

  constructor(private bookQuery: PlayBookQuery) {
    this.books$ = this.bookQuery.selectMany(this.bookQuery.getCollection);
  }

  ngOnInit() {
  }

}
