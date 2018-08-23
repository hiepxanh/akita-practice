import { Component, OnInit, Input } from '@angular/core';
import { PlayBook } from '@app/models/playbook';

@Component({
  selector: 'app-playbook-search-previewlist',
  templateUrl: './playbook-search-previewlist.component.html',
  styleUrls: ['./playbook-search-previewlist.component.scss']
})
export class PlaybookSearchPreviewlistComponent implements OnInit {
  @Input() books: PlayBook[];
  constructor() { }

  ngOnInit() {
  }

}
