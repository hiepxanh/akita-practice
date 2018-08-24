import { Component, OnInit, ChangeDetectionStrategy, EventEmitter, Input, Output } from '@angular/core';
import { Person } from '@app/models/person';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-invite-app-list',
  templateUrl: './invite-app-list.component.html',
  styleUrls: ['./invite-app-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteAppListComponent {
  @Input()
  people: Person;
  @Output()
  addGuest = new EventEmitter<ID>();
  @Output()
  removeGuest = new EventEmitter<ID>();
  @Output()
  removePerson = new EventEmitter<ID>();
  @Output()
  toggleAttending = new EventEmitter<ID>();

}
