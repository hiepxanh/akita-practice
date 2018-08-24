import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Genre } from './genre.model';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

export interface GenresState extends EntityState<Genre> {}

@Injectable({ providedIn: MoviesStateModule })
@StoreConfig({ name: 'genres' })
export class GenresStore extends EntityStore<GenresState, Genre> {

  constructor() {
    super();
  }

}

