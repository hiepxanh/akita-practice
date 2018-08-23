import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from './views/login/login-state/sesstion.query';
import { SessionService } from './views/login/login-state/session.service';
import { CartQuery } from './views/cart/cart-state/cart.query';
import { Router } from '@angular/router';
import { SidenavService } from './ui/sidenav/sidenav-state/sidenav.service';
import { SidenavQuery } from './ui/sidenav/sidenav-state/sidenav.query';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akita';
  name$: Observable<string>;
  showSidenav$: Observable<boolean>;
  navItems = ['Home', 'Todos', 'Books', 'Pizzas','Playbook', 'Playbook/Collection', 'Products'];
  count$: Observable<number>;
  constructor(
    private sessionService: SessionService, 
    private authQuery: SessionQuery,
    private cartQuery: CartQuery,
    private router: Router,
    private sidenavService: SidenavService,
    private sidenavQuery: SidenavQuery
  ) { 
    this.count$ = this.cartQuery.selectCount();
    this.showSidenav$ = this.sidenavQuery.sideNavOpen$;
  }

  ngOnInit() {
    this.name$ = this.authQuery.name$;
  }

  logout() {
    this.sessionService.logout();
    this.router.navigateByUrl('home');
  }

  closeSidenav() {
    this.sidenavService.setSidenavState(false);
  }

  openSidenav() {
    this.sidenavService.setSidenavState(true);
  }
}
