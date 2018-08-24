import { Component, OnInit } from '@angular/core';
import { PlayBook } from '@app/models/playbook';
import { PlayBookQuery } from '../../playbook-state/playbook.query';
import { Observable } from 'rxjs';
import { PlayBookService } from '../../services/playbook.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-playbook-detail',
  templateUrl: './playbook-detail.component.html',
  styleUrls: ['./playbook-detail.component.scss']
})
export class PlaybookDetailComponent implements OnInit {
  book$: Observable<PlayBook>;
  isSelectedBookInCollection$: Observable<boolean>;

  constructor(
    private booksQuery: PlayBookQuery,
    private booksService: PlayBookService,
    private route: ActivatedRoute
  ) {
    const activeBookId = this.route.snapshot.paramMap.get('id');
    this.booksService.setActive(activeBookId);
    this.book$ = this.booksQuery.selectActive();
    this.isSelectedBookInCollection$ = this.booksQuery.isInCollection$;
  }

  ngOnInit() {
  }

  updateCollection({ id }: PlayBook) {
    this.booksService.updateCollection(id);
  }

}
