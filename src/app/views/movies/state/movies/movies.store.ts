import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Movie } from './movie.model';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

export interface MoviesState extends EntityState<Movie> {}

@Injectable({ providedIn: MoviesStateModule })
@StoreConfig({ name: 'movies' })
export class MoviesStore extends EntityStore<MoviesState, Movie> {

  constructor() {
    super();
  }

}

