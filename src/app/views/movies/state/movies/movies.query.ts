import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { MoviesStore, MoviesState } from './movies.store';
import { Movie } from './movie.model';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({
  providedIn: MoviesStateModule
})
export class MoviesQuery extends QueryEntity<MoviesState, Movie> {

  constructor(protected store: MoviesStore) {
    super(store);
  }

}
