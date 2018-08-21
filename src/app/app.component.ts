import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from './views/login/login-state/sesstion.query';
import { SessionService } from './views/login/login-state/session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akita';
  name$: Observable<string>;
  constructor(
    private sessionService: SessionService, 
    private authQuery: SessionQuery
  ) { 
    
  }

  ngOnInit() {
    this.name$ = this.authQuery.name$;
  }

  logout() {
    this.sessionService.logout();
  }
}
