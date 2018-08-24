import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InviteAppComponent } from './smart/invite-app/invite-app.component';

const routes: Routes = [
  {
    path: '',
    component: InviteAppComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InviteAppRoutingModule { }
