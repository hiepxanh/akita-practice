import { Component, OnInit, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-invite-app-input',
  templateUrl: './invite-app-input.component.html',
  styleUrls: ['./invite-app-input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class InviteAppInputComponent implements OnInit {
  @Output() addPerson = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  add(personInput: HTMLInputElement) {
    this.addPerson.emit(personInput.value);
    personInput.value = '';
  }

}
