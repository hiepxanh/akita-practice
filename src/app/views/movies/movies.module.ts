import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './smart/movies/movies.component';
import { MoviesStateModule } from './movies-state/movies-state.module';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule,
    MoviesStateModule
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
