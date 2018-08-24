import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MoviesRoutingModule } from './movies-routing.module';
import { MoviesComponent } from './smart/movies/movies.component';

@NgModule({
  imports: [
    CommonModule,
    MoviesRoutingModule
  ],
  declarations: [MoviesComponent]
})
export class MoviesModule { }
