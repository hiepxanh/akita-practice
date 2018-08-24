import { Injectable } from '@angular/core';
import { EntityState, EntityStore, StoreConfig } from '@datorama/akita';
import { Actor } from './actor.model';
import { MoviesStateModule } from '../../movies-state/movies-state.module';

export interface ActorsState extends EntityState<Actor> {}

@Injectable({ providedIn: MoviesStateModule })
@StoreConfig({ name: 'actors' })
export class ActorsStore extends EntityStore<ActorsState, Actor> {

  constructor() {
    super();
  }

}

