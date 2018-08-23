import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { PlayBookService } from './playbook.service';
import { PlayBookQuery } from '../playbook-state/playbook.query';
import { PlaybookDataService } from './playbook-data.service';
import { PlaybookStateModule } from '../playbook-state/playbook-state.module';

@Injectable({
  providedIn: PlaybookStateModule
})
export class BookExistsGuard implements CanActivate {
  constructor(
    private googleBooks: PlaybookDataService,
    private router: Router,
    private bookQuery: PlayBookQuery,
    private bookSerivce: PlayBookService
  ) {}

  hasBookInApi(id: string): Observable<boolean> {
    return this.googleBooks.retrieveBook(id).pipe(
      map(book => !!book),
      catchError(() => {
        this.router.navigate(['/404']);
        return of(false);
      })
    );
  }

  hasBook(id: string): Observable<boolean> {
    if(this.bookQuery.hasEntity(id)) {
      this.bookSerivce.setActive(id);
      return of(true);
    }
    return this.hasBookInApi(id);
  }


  canActivate(route: ActivatedRouteSnapshot): Observable<boolean> {
    return this.hasBook(route.params['id']);
  }
}
