import { Component, OnInit, Input } from '@angular/core';
import { PlayBook } from '@app/models/playbook';

@Component({
  selector: 'app-playbook-search-previewlist-item',
  templateUrl: './playbook-search-previewlist-item.component.html',
  styleUrls: ['./playbook-search-previewlist-item.component.scss']
})
export class PlaybookSearchPreviewlistItemComponent implements OnInit {
  @Input() book: PlayBook;

  get id() {
    return this.book.id;
  }

  get title() {
    return this.book.volumeInfo.title;
  }

  get subtitle() {
    return this.book.volumeInfo.subtitle;
  }

  get description() {
    return this.book.volumeInfo.description;
  }

  get thumbnail(): string | boolean {
    if (this.book.volumeInfo.imageLinks) {
      return this.book.volumeInfo.imageLinks.smallThumbnail.replace(
        'http:',
        ''
      );
    }

    return false;
  }

  get authors() {
    return this.book.volumeInfo.authors;
  }

  ngOnInit() {
    console.log("Thisbook",this.book)
  }
}
