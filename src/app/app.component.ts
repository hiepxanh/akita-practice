import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { SessionQuery } from './views/login/login-state/sesstion.query';
import { SessionService } from './views/login/login-state/session.service';
import { CartQuery } from './views/cart/cart-state/cart.query';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'akita';
  name$: Observable<string>;
  navItems = ['Home', 'Todos', 'Books', 'Pizzas', 'Products'];
  count$: Observable<number>;
  constructor(
    private sessionService: SessionService, 
    private authQuery: SessionQuery,
    private cartQuery: CartQuery,
    private router: Router
  ) { 
    this.count$ = this.cartQuery.selectCount();
  }

  ngOnInit() {
    this.name$ = this.authQuery.name$;
  }

  logout() {
    this.sessionService.logout();
    this.router.navigateByUrl('home');
  }
}
