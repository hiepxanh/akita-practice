import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InviteAppRoutingModule } from './invite-app-routing.module';
import { InviteAppComponent } from './smart/invite-app/invite-app.component';
import { InviteAppStatsComponent } from './dumb/invite-app-stats/invite-app-stats.component';
import { InviteAppFilterComponent } from './dumb/invite-app-filter/invite-app-filter.component';
import { InviteAppInputComponent } from './dumb/invite-app-input/invite-app-input.component';
import { InviteAppListComponent } from './dumb/invite-app-list/invite-app-list.component';
import { InviteAppStateModule } from './invite-app-state/invite-app-state.module';
import { FormsModule } from '@angular/forms';
import { MatCheckboxModule } from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    InviteAppRoutingModule,
    InviteAppStateModule,
    FormsModule,
    MatCheckboxModule
  ],
  declarations: [InviteAppComponent, InviteAppStatsComponent, InviteAppFilterComponent, InviteAppInputComponent, InviteAppListComponent]
})
export class InviteAppModule { }
