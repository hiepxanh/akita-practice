import { Injectable } from '@angular/core';
import { QueryEntity } from '@datorama/akita';
import { GenresStore, GenresState } from './genres.store';
import { Genre } from './genre.model';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

@Injectable({ providedIn: MoviesStateModule })
export class GenresQuery extends QueryEntity<GenresState, Genre> {

  constructor(protected store: GenresStore) {
    super(store);
  }

}
