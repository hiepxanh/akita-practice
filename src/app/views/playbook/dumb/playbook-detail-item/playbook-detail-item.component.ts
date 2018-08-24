import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { PlayBook } from '@app/models/playbook';
import { Location } from '@angular/common';

@Component({
  selector: 'app-playbook-detail-item',
  templateUrl: './playbook-detail-item.component.html',
  styleUrls: ['./playbook-detail-item.component.scss']
})
export class PlaybookDetailItemComponent implements OnInit {

  constructor(private location: Location) {}

  ngOnInit() {
  }

  /**
   * Presentational components receive data through @Input() and communicate events
   * through @Output() but generally maintain no internal state of their
   * own. All decisions are delegated to 'container', or 'smart'
   * components before data updates flow back down.
   *
   * More on 'smart' and 'presentational' components: https://gist.github.com/btroncone/a6e4347326749f938510#utilizing-container-components
   */
  @Input() book: PlayBook;
  @Input() inCollection: boolean;
  @Output() add = new EventEmitter<PlayBook>();
  @Output() remove = new EventEmitter<PlayBook>();

  /**
   * Tip: Utilize getters to keep templates clean
   */
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

  get thumbnail() {
    return (
      this.book.volumeInfo.imageLinks &&
      this.book.volumeInfo.imageLinks.smallThumbnail &&
      this.book.volumeInfo.imageLinks.smallThumbnail.replace('http:', '')
    );
  }

  get authors() {
    return this.book.volumeInfo.authors;
  }

  goBack() {
    this.location.back();
  }

  

}
