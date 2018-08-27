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

  add(event,personInput: HTMLInputElement) {
    // console.log("$event ",$event)
    // to avoid duplicate vietnamese enter auto recognize 13 and 299
    if (event.keyCode == 13) {
      this.addPerson.emit(personInput.value);
      personInput.value = '';
    }
  }

}
