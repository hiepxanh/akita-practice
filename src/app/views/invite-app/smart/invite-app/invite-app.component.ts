import { Component, OnInit } from '@angular/core';
import { PeopleQuery } from '../../invite-app-state/invite-app.query';
import { PeopleService } from '../../invite-app-state/people.service';
import { ViewPeople } from '@app/models/person';
import { Observable } from 'rxjs';
import { ID } from '@datorama/akita';

@Component({
  selector: 'app-invite-app',
  templateUrl: './invite-app.component.html',
  styleUrls: ['./invite-app.component.scss']
})
export class InviteAppComponent implements OnInit {
  selectPeople$: Observable<ViewPeople>;
  constructor(
    private peopleQuery: PeopleQuery,
    private peopleService: PeopleService
  ) { }

  ngOnInit() {
    this.selectPeople$ = this.peopleQuery.selectPeople$;
  }

  addPerson(name:string) {
    this.peopleService.addPerson(name);
  }

  removePerson(id:ID) {
    this.peopleService.removePerson(id);
  }

  addGuest(id: ID) {
    this.peopleService.addGuest(id);
  }

  removeGuest(id: ID) {
    this.peopleService.removeGuest(id);
  }

  updateAttending(id: ID) {
    this.peopleService.updateAttending(id);
  }

  updateFilter(filter: string) {
    this.peopleService.updateFilter(filter);
  }
}
