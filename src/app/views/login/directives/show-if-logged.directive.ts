import { Directive, Input, ViewContainerRef, TemplateRef, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SessionQuery } from '../login-state/sesstion.query';

@Directive({
  selector: '[showIfLogged]'
})
export class ShowIfLoggedDirective implements OnInit{
  subscription: Subscription;
  @Input() showIfLogged: boolean;

  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainer: ViewContainerRef,
    private sessionQuery: SessionQuery
  ) {

   }

  ngOnInit() {
    this.subscription = this.sessionQuery.isLoggedIn$
    .subscribe(isLoggedIn => {
      this.viewContainer.clear();
      if (isLoggedIn) {
        if (this.showIfLogged) {
          this.viewContainer.createEmbeddedView(this.templateRef);
        } else {
          this.viewContainer.clear();
        }
      } else {
        if (this.showIfLogged) {
          this.viewContainer.clear();
        } else {
          this.viewContainer.createEmbeddedView(this.templateRef)
        }
      }
    })
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
