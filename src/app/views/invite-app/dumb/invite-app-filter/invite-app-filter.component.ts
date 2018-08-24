import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invite-app-filter',
  templateUrl: './invite-app-filter.component.html',
  styleUrls: ['./invite-app-filter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteAppFilterComponent implements OnInit {
  @Output() updateFilter: EventEmitter<string> = new EventEmitter<string>();
  filters = [
    {friendly: 'All', action: 'SHOW_ALL'},
    {friendly: 'Attending', action: 'SHOW_ATTENDING'},
    {friendly: 'Attending w/ Guests', action: 'SHOW_WITH_GUESTS'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
