import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-playbook-search-searchbar',
  templateUrl: './playbook-search-searchbar.component.html',
  styleUrls: ['./playbook-search-searchbar.component.scss']
})
export class PlaybookSearchSearchbarComponent implements OnInit {
  @Input() query = '';
  @Input() searching = false;
  @Input() error = '';
  @Output() search = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }

}
